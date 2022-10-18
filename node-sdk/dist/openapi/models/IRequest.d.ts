import { Headers } from './Headers';
export declare class IRequest {
    'api_key': string;
    'body': {
        [key: string]: any;
    };
    'headers': Headers;
    'ip': string;
    'method': string;
    'origin': string;
    'query': {
        [key: string]: any;
    };
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
