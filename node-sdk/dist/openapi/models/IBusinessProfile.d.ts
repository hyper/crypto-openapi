import { Address } from './Address';
export declare class IBusinessProfile {
    'name': string;
    'product_description'?: string;
    'support_address'?: Address;
    'support_email'?: string;
    'support_phone'?: string;
    'support_url'?: string;
    'url'?: string;
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
