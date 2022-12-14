import { ArgumentMetadata, PipeTransform } from '../interfaces/features/pipe-transform.interface';
import { ErrorHttpStatusCode } from '../utils/http-error-by-code.util';
export interface ParseUUIDPipeOptions {
    version?: '3' | '4' | '5';
    errorHttpStatusCode?: ErrorHttpStatusCode;
    exceptionFactory?: (errors: string) => any;
}
export declare class ParseUUIDPipe implements PipeTransform<string> {
    protected static uuidRegExps: {
        3: RegExp;
        4: RegExp;
        5: RegExp;
        all: RegExp;
    };
    private readonly version;
    protected exceptionFactory: (errors: string) => any;
    constructor(options?: ParseUUIDPipeOptions);
    transform(value: string, metadata: ArgumentMetadata): Promise<string>;
    protected isUUID(str: unknown, version?: string): any;
}
