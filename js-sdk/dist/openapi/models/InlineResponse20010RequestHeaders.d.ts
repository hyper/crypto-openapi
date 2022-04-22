export declare class InlineResponse20010RequestHeaders {
    'accept': string;
    'acceptEncoding': string;
    'connection': string;
    'contentLength': string;
    'contentType': string;
    'host': string;
    'postmanToken': string;
    'userAgent': string;
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
