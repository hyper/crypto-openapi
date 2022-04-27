import { CustomersBillingDetails } from './CustomersBillingDetails';
export declare class CustomerData {
    'account': string;
    'billing_details'?: CustomersBillingDetails;
    'email'?: string;
    'name'?: string;
    'phone'?: string;
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
