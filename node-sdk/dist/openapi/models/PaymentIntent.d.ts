import { Account } from './Account';
import { Fee } from './Fee';
import { Invoice } from './Invoice';
import { Transfer } from './Transfer';
export declare class PaymentIntent {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account'?: string | Account;
    'amount': number;
    'application_fee_percent'?: number;
    'chain': PaymentIntentChainEnum;
    'currency': PaymentIntentCurrencyEnum;
    'customer': string;
    'exchange_rate'?: string;
    'fees': Array<Fee>;
    'hash'?: string;
    'invoice': string | Invoice;
    'last_payment_error'?: string;
    'line_items'?: string;
    'metadata'?: any;
    'platform_account'?: string | Account;
    'price'?: string;
    'status': PaymentIntentStatusEnum;
    'subscription'?: string;
    'transfers': Array<Transfer>;
    'usd_amount'?: string;
    'wallet'?: string;
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
export declare type PaymentIntentChainEnum = "eth" | "sol";
export declare type PaymentIntentCurrencyEnum = "eth" | "sol";
export declare type PaymentIntentStatusEnum = "pending" | "failed" | "succeeded" | "canceled";
