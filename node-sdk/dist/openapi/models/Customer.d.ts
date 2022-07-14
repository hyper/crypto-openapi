import { Account } from './Account';
import { CustomersIdBillingDetails } from './CustomersIdBillingDetails';
import { PaymentIntent } from './PaymentIntent';
import { Wallet } from './Wallet';
export declare class Customer {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'billing_details'?: CustomersIdBillingDetails;
    'email'?: string;
    'name'?: string;
    'phone'?: string;
    'wallets': Array<Wallet>;
    'payments': Array<PaymentIntent>;
    'last_payment': string | PaymentIntent;
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
