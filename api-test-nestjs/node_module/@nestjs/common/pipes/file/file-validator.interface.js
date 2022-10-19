"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileValidator = void 0;
/**
 * Interface describing FileValidators, which can be added to a {@link ParseFilePipe}.
 */
class FileValidator {
    constructor(validationOptions) {
        this.validationOptions = validationOptions;
    }
}
exports.FileValidator = FileValidator;
