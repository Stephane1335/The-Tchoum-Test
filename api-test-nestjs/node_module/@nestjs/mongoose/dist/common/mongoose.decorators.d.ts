export declare const InjectModel: (model: string, connectionName?: string | undefined) => (target: object, key: string | symbol, index?: number | undefined) => void;
export declare const InjectConnection: (name?: string | undefined) => (target: object, key: string | symbol, index?: number | undefined) => void;
