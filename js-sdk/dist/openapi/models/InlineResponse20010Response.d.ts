import { InlineResponse20010ResponseBody } from './InlineResponse20010ResponseBody';
export declare class InlineResponse20010Response {
    'body': InlineResponse20010ResponseBody;
    'status': number;
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
