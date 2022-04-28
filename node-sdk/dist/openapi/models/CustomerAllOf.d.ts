import { Account } from './Account';
import { CustomerAllOfBillingDetails } from './CustomerAllOfBillingDetails';
import { Wallet } from './Wallet';
export declare class CustomerAllOf {
    'account'?: string | Account;
    'billing_details'?: CustomerAllOfBillingDetails;
    'email'?: string;
    'name'?: string;
    'phone'?: string;
    'wallets'?: Array<Wallet>;
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
