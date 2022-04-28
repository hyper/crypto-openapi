export declare class LogAllOf {
    'api_key': string;
    'body'?: any;
    'created': Date;
    'headers'?: any;
    'ip': string;
    'method': LogAllOfMethodEnum;
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
export declare type LogAllOfMethodEnum = "POST" | "PATCH" | "DELETE";
