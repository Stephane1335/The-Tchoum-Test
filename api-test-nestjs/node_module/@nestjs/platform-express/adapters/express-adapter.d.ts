import { RequestMethod, VersioningOptions } from '@nestjs/common';
import { VersionValue } from '@nestjs/common/interfaces';
import { CorsOptions, CorsOptionsDelegate } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestApplicationOptions } from '@nestjs/common/interfaces/nest-application-options.interface';
import { AbstractHttpAdapter } from '@nestjs/core/adapters/http-adapter';
import { ServeStaticOptions } from '../interfaces/serve-static-options.interface';
declare type VersionedRoute = <TRequest extends Record<string, any> = any, TResponse = any>(req: TRequest, res: TResponse, next: () => void) => any;
export declare class ExpressAdapter extends AbstractHttpAdapter {
    private readonly routerMethodFactory;
    private readonly logger;
    constructor(instance?: any);
    reply(response: any, body: any, statusCode?: number): any;
    status(response: any, statusCode: number): any;
    end(response: any, message?: string): any;
    render(response: any, view: string, options: any): any;
    redirect(response: any, statusCode: number, url: string): any;
    setErrorHandler(handler: Function, prefix?: string): any;
    setNotFoundHandler(handler: Function, prefix?: string): any;
    isHeadersSent(response: any): boolean;
    setHeader(response: any, name: string, value: string): any;
    listen(port: string | number, callback?: () => void): any;
    listen(port: string | number, hostname: string, callback?: () => void): any;
    close(): Promise<unknown>;
    set(...args: any[]): any;
    enable(...args: any[]): any;
    disable(...args: any[]): any;
    engine(...args: any[]): any;
    useStaticAssets(path: string, options: ServeStaticOptions): any;
    setBaseViewsDir(path: string | string[]): any;
    setViewEngine(engine: string): any;
    getRequestHostname(request: any): string;
    getRequestMethod(request: any): string;
    getRequestUrl(request: any): string;
    enableCors(options: CorsOptions | CorsOptionsDelegate<any>): any;
    createMiddlewareFactory(requestMethod: RequestMethod): (path: string, callback: Function) => any;
    initHttpServer(options: NestApplicationOptions): void;
    registerParserMiddleware(prefix?: string, rawBody?: boolean): void;
    setLocal(key: string, value: any): this;
    getType(): string;
    applyVersionFilter(handler: Function, version: VersionValue, versioningOptions: VersioningOptions): VersionedRoute;
    private isMiddlewareApplied;
}
export {};
