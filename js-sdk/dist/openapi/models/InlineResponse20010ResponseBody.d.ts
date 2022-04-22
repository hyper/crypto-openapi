import { InlineResponse20010ResponseBodyBranding } from './InlineResponse20010ResponseBodyBranding';
export declare class InlineResponse20010ResponseBody {
    'id': string;
    'branding': InlineResponse20010ResponseBodyBranding;
    'created': string;
    'invoicePrefix': string;
    'name': string;
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
