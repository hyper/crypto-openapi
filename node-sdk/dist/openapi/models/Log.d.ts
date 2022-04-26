export declare class Log {
    'apiKey': string;
    'body'?: any;
    'created': Date;
    'headers'?: any;
    'id': string;
    'ip': string;
    'method': LogMethodEnum;
    'origin'?: string;
    'query': any;
    'url': string;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
export declare type LogMethodEnum = "POST" | "PATCH" | "DELETE";
