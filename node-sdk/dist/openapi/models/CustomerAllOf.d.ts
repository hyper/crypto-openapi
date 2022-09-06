import { Account } from './Account';
import { CustomerAllOfBillingDetails } from './CustomerAllOfBillingDetails';
import { PaymentIntent } from './PaymentIntent';
import { Wallet } from './Wallet';
export declare class CustomerAllOf {
    'account': string | Account;
    'name'?: string;
    'email'?: string;
    'phone'?: string;
    'billing_details'?: CustomerAllOfBillingDetails;
    'wallets': Array<Wallet>;
    'payments': Array<PaymentIntent>;
    'last_payment': PaymentIntent;
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
