import { ICustomerBillingDetails } from './ICustomerBillingDetails';
export declare class CustomerCreateRequest {
    'name'?: string;
    'email'?: string;
    'phone'?: string;
    'billing_details'?: ICustomerBillingDetails;
    'metadata'?: {
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
