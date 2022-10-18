import { CustomerCreateRequestBillingDetails } from './CustomerCreateRequestBillingDetails';
export declare class CustomerCreateRequest {
    'billing_details'?: CustomerCreateRequestBillingDetails;
    'email'?: string;
    'metadata'?: {
        [key: string]: any;
    };
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
