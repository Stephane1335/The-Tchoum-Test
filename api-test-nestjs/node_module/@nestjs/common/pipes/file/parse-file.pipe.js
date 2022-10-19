"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseFilePipe = void 0;
const tslib_1 = require("tslib");
const shared_utils_1 = require("../../utils/shared.utils");
const core_1 = require("../../decorators/core");
const enums_1 = require("../../enums");
const http_error_by_code_util_1 = require("../../utils/http-error-by-code.util");
/**
 * Defines the built-in ParseFile Pipe. This pipe can be used to validate incoming files
 * with `@UploadedFile()` decorator. You can use either other specific built-in validators
 * or provide one of your own, simply implementing it through {@link FileValidator}
 * interface and adding it to ParseFilePipe's constructor.
 *
 * @see [Built-in Pipes](https://docs.nestjs.com/pipes#built-in-pipes)
 *
 * @publicApi
 */
let ParseFilePipe = class ParseFilePipe {
    constructor(options = {}) {
        const { exceptionFactory, errorHttpStatusCode = enums_1.HttpStatus.BAD_REQUEST, validators = [], fileIsRequired, } = options;
        this.exceptionFactory =
            exceptionFactory ||
                (error => new http_error_by_code_util_1.HttpErrorByCode[errorHttpStatusCode](error));
        this.validators = validators;
        this.fileIsRequired = fileIsRequired !== null && fileIsRequired !== void 0 ? fileIsRequired : true;
    }
    async transform(value) {
        if ((0, shared_utils_1.isUndefined)(value)) {
            if (this.fileIsRequired) {
                throw this.exceptionFactory('File is required');
            }
            return value;
        }
        if (this.validators.length) {
            await this.validate(value);
        }
        return value;
    }
    async validate(file) {
        for (const validator of this.validators) {
            await this.validateOrThrow(file, validator);
        }
        return file;
    }
    async validateOrThrow(file, validator) {
        const isValid = await validator.isValid(file);
        if (!isValid) {
            const errorMessage = validator.buildErrorMessage(file);
            throw this.exceptionFactory(errorMessage);
        }
    }
    /**
     * @returns list of validators used in this pipe.
     */
    getValidators() {
        return this.validators;
    }
};
ParseFilePipe = tslib_1.__decorate([
    (0, core_1.Injectable)(),
    tslib_1.__param(0, (0, core_1.Optional)()),
    tslib_1.__metadata("design:paramtypes", [Object])
], ParseFilePipe);
exports.ParseFilePipe = ParseFilePipe;
