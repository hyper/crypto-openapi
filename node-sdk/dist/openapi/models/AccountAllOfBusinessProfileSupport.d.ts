import { CustomersIdBillingDetailsAddress } from './CustomersIdBillingDetailsAddress';
export declare class AccountAllOfBusinessProfileSupport {
    'email'?: string;
    'phone'?: string;
    'website'?: string;
    'address'?: CustomersIdBillingDetailsAddress;
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
