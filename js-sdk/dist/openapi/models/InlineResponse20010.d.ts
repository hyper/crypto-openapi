import { InlineResponse20010Request } from './InlineResponse20010Request';
import { InlineResponse20010Response } from './InlineResponse20010Response';
export declare class InlineResponse20010 {
    'account': string;
    'created': string;
    'request': InlineResponse20010Request;
    'response': InlineResponse20010Response;
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
