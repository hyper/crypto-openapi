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
    'platform_account'?: string | Account;
    'hash'?: string;
    'invoice': string | Invoice;
    'status': PaymentIntentStatusEnum;
    'chain': PaymentIntentChainEnum;
    'currency': PaymentIntentCurrencyEnum;
    'amount': number;
    'subscription'?: string;
    'price'?: string;
    'line_items'?: string;
    'customer': string;
    'wallet'?: string;
    'usd_amount'?: string;
    'exchange_rate'?: string;
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
export declare type PaymentIntentStatusEnum = "pending" | "failed" | "succeeded" | "canceled";
export declare type PaymentIntentChainEnum = "eth" | "sol";
export declare type PaymentIntentCurrencyEnum = "eth" | "sol";
