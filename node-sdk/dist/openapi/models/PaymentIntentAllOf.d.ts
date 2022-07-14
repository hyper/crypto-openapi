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
    'platform_account'?: string | Account;
    'hash'?: string;
    'invoice'?: string | Invoice;
    'status': PaymentIntentAllOfStatusEnum;
    'chain': PaymentIntentAllOfChainEnum;
    'currency': PaymentIntentAllOfCurrencyEnum;
    'amount': number;
    'subscription'?: string | Subscription;
    'price'?: string | Price;
    'line_items'?: Array<PaymentIntentAllOfLineItems>;
    'customer': string | Customer;
    'wallet'?: string | Wallet;
    'usd_amount'?: number;
    'exchange_rate'?: number;
    'application_fee_percent'?: number;
    'last_payment_error'?: string;
    'fees': Array<Fee>;
    'transfers': Array<Transfer>;
    'metadata'?: any;
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
export declare type PaymentIntentAllOfStatusEnum = "failed" | "succeeded" | "canceled" | "requires_confirmation";
export declare type PaymentIntentAllOfChainEnum = "eth" | "sol";
export declare type PaymentIntentAllOfCurrencyEnum = "eth" | "sol";
