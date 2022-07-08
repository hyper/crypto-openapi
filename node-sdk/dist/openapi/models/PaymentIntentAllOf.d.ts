import { Account } from './Account';
import { Customer } from './Customer';
import { Fee } from './Fee';
import { Invoice } from './Invoice';
import { PaymentIntentAllOfLineItems } from './PaymentIntentAllOfLineItems';
import { Price } from './Price';
import { Subscription } from './Subscription';
import { Transfer } from './Transfer';
import { Wallet } from './Wallet';
export declare class PaymentIntentAllOf {
    'account'?: string | Account;
    'amount': number;
    'application_fee_percent'?: number;
    'chain': PaymentIntentAllOfChainEnum;
    'currency': PaymentIntentAllOfCurrencyEnum;
    'customer'?: string | Customer;
    'exchange_rate'?: number;
    'fees': Array<Fee>;
    'hash'?: string;
    'invoice': string | Invoice;
    'last_payment_error'?: string;
    'line_items'?: Array<PaymentIntentAllOfLineItems>;
    'metadata'?: any;
    'platform_account'?: string | Account;
    'price'?: string | Price;
    'status': PaymentIntentAllOfStatusEnum;
    'subscription'?: string | Subscription;
    'transfers': Array<Transfer>;
    'usd_amount'?: number;
    'wallet'?: string | Wallet;
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
export declare type PaymentIntentAllOfChainEnum = "eth" | "sol";
export declare type PaymentIntentAllOfCurrencyEnum = "eth" | "sol";
export declare type PaymentIntentAllOfStatusEnum = "failed" | "succeeded" | "canceled" | "processing";
