import { InlineResponse20010RequestBody } from './InlineResponse20010RequestBody';
import { InlineResponse20010RequestHeaders } from './InlineResponse20010RequestHeaders';
export declare class InlineResponse20010Request {
    'apiKey': string;
    'body': InlineResponse20010RequestBody;
    'headers': InlineResponse20010RequestHeaders;
    'ip': string;
    'method': string;
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
