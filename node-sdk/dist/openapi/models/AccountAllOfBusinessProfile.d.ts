import { Address } from './Address';
export declare class AccountAllOfBusinessProfile {
    'name': string;
    'product_description'?: string;
    'url'?: string;
    'support_url'?: string;
    'support_email'?: string;
    'support_phone'?: string;
    'support_address'?: Address;
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
