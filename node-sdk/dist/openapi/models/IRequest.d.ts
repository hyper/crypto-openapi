import { Headers } from './Headers';
export declare class IRequest {
    'ip': string;
    'headers': Headers;
    'method': string;
    'origin': string;
    'body': {
        [key: string]: any;
    };
    'url': string;
    'api_key': string;
    'query': {
        [key: string]: any;
    };
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
