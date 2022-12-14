/**
 * Interface describing FileValidators, which can be added to a {@link ParseFilePipe}.
 */
export declare abstract class FileValidator<TValidationOptions = Record<string, any>> {
    protected readonly validationOptions: TValidationOptions;
    constructor(validationOptions: TValidationOptions);
    /**
     * Indicates if this file should be considered valid, according to the options passed in the constructor.
     * @param file the file from the request object
     */
    abstract isValid(file?: any): boolean | Promise<boolean>;
    /**
     * Builds an error message in case the validation fails.
     * @param file the file from the request object
     */
    abstract buildErrorMessage(file: any): string;
}
