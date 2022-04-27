import { Account } from './Account';
import { CustomerAllOfBillingDetails } from './CustomerAllOfBillingDetails';
export declare class CustomerAllOf {
    'account'?: string | Account;
    'billingDetails'?: CustomerAllOfBillingDetails;
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
