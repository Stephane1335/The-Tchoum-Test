import { FileValidator } from './file-validator.interface';
export declare type MaxFileSizeValidatorOptions = {
    maxSize: number;
};
/**
 * Defines the built-in MaxSize File Validator
 *
 * @see [File Validators](https://docs.nestjs.com/techniques/file-upload#validators)
 *
 * @publicApi
 */
export declare class MaxFileSizeValidator extends FileValidator<MaxFileSizeValidatorOptions> {
    buildErrorMessage(): string;
    isValid(file: any): boolean;
}
