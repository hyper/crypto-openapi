import { Account } from './Account';
import { CustomerBillingDetails } from './CustomerBillingDetails';
export declare class Customer {
    'account'?: string | Account;
    'billingDetails'?: CustomerBillingDetails;
    'created': Date;
    'email'?: string;
    'id': string;
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
