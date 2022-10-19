'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

function _stream() {
  const data = require('stream');

  _stream = function () {
    return data;
  };

  return data;
}

function _worker_threads() {
  const data = require('worker_threads');

  _worker_threads = function () {
    return data;
  };

  return data;
}

function _mergeStream() {
  const data = _interopRequireDefault(require('merge-stream'));

  _mergeStream = function () {
    return data;
  };

  return data;
}

var _types = require('../types');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class ExperimentalWorker {
  _worker;
  _options;
  _request;
  _retries;
  _onProcessEnd;
  _onCustomMessage;
  _fakeStream;
  _stdout;
  _stderr;
  _exitPromise;
  _resolveExitPromise;
  _forceExited;

  constructor(options) {
    this._options = options;
    this._request = null;
    this._fakeStream = null;
    this._stdout = null;
    this._stderr = null;
    this._exitPromise = new Promise(resolve => {
      this._resolveExitPromise = resolve;
    });
    this._forceExited = false;
    this.initialize();
  }

  initialize() {
    this._worker = new (_worker_threads().Worker)(
      require.resolve('./threadChild'),
      {
        eval: false,
        resourceLimits: this._options.resourceLimits,
        stderr: true,
        stdout: true,
        workerData: this._options.workerData,
        ...this._options.forkOptions
      }
    );

    if (this._worker.stdout) {
      if (!this._stdout) {
        // We need to add a permanent stream to the merged stream to prevent it
        // from ending when the subprocess stream ends
        this._stdout = (0, _mergeStream().default)(this._getFakeStream());
      }

      this._stdout.add(this._worker.stdout);
    }

    if (this._worker.stderr) {
      if (!this._stderr) {
        // We need to add a permanent stream to the merged stream to prevent it
        // from ending when the subprocess stream ends
        this._stderr = (0, _mergeStream().default)(this._getFakeStream());
      }

      this._stderr.add(this._worker.stderr);
    }

    this._worker.on('message', this._onMessage.bind(this));

    this._worker.on('exit', this._onExit.bind(this));

    this._worker.postMessage([
      _types.CHILD_MESSAGE_INITIALIZE,
      false,
      this._options.workerPath,
      this._options.setupArgs,
      String(this._options.workerId + 1) // 0-indexed workerId, 1-indexed JEST_WORKER_ID
    ]);

    this._retries++; // If we exceeded the amount of retries, we will emulate an error reply
    // coming from the child. This avoids code duplication related with cleaning
    // the queue, and scheduling the next call.

    if (this._retries > this._options.maxRetries) {
      const error = new Error('Call retries were exceeded');

      this._onMessage([
        _types.PARENT_MESSAGE_CLIENT_ERROR,
        error.name,
        error.message,
        error.stack,
        {
          type: 'WorkerError'
        }
      ]);
    }
  }

  _shutdown() {
    // End the permanent stream so the merged stream end too
    if (this._fakeStream) {
      this._fakeStream.end();

      this._fakeStream = null;
    }

    this._resolveExitPromise();
  }

  _onMessage(response) {
    let error;

    switch (response[0]) {
      case _types.PARENT_MESSAGE_OK:
        this._onProcessEnd(null, response[1]);

        break;

      case _types.PARENT_MESSAGE_CLIENT_ERROR:
        error = response[4];

        if (error != null && typeof error === 'object') {
          const extra = error; // @ts-expect-error: no index

          const NativeCtor = globalThis[response[1]];
          const Ctor = typeof NativeCtor === 'function' ? NativeCtor : Error;
          error = new Ctor(response[2]);
          error.type = response[1];
          error.stack = response[3];

          for (const key in extra) {
            // @ts-expect-error: no index
            error[key] = extra[key];
          }
        }

        this._onProcessEnd(error, null);

        break;

      case _types.PARENT_MESSAGE_SETUP_ERROR:
        error = new Error(`Error when calling setup: ${response[2]}`); // @ts-expect-error: adding custom properties to errors.

        error.type = response[1];
        error.stack = response[3];

        this._onProcessEnd(error, null);

        break;

      case _types.PARENT_MESSAGE_CUSTOM:
        this._onCustomMessage(response[1]);

        break;

      default:
        throw new TypeError(`Unexpected response from worker: ${response[0]}`);
    }
  }

  _onExit(exitCode) {
    if (exitCode !== 0 && !this._forceExited) {
      this.initialize();

      if (this._request) {
        this._worker.postMessage(this._request);
      }
    } else {
      this._shutdown();
    }
  }

  waitForExit() {
    return this._exitPromise;
  }

  forceExit() {
    this._forceExited = true;

    this._worker.terminate();
  }

  send(request, onProcessStart, onProcessEnd, onCustomMessage) {
    onProcessStart(this);

    this._onProcessEnd = (...args) => {
      var _onProcessEnd;

      // Clean the request to avoid sending past requests to workers that fail
      // while waiting for a new request (timers, unhandled rejections...)
      this._request = null;
      const res =
        (_onProcessEnd = onProcessEnd) === null || _onProcessEnd === void 0
          ? void 0
          : _onProcessEnd(...args); // Clean up the reference so related closures can be garbage collected.

      onProcessEnd = null;
      return res;
    };

    this._onCustomMessage = (...arg) => onCustomMessage(...arg);

    this._request = request;
    this._retries = 0;

    this._worker.postMessage(request);
  }

  getWorkerId() {
    return this._options.workerId;
  }

  getStdout() {
    return this._stdout;
  }

  getStderr() {
    return this._stderr;
  }

  _getFakeStream() {
    if (!this._fakeStream) {
      this._fakeStream = new (_stream().PassThrough)();
    }

    return this._fakeStream;
  }
}

exports.default = ExperimentalWorker;
