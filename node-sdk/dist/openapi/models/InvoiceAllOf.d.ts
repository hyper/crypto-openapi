import { Account } from './Account';
import { Customer } from './Customer';
import { Fee } from './Fee';
import { InvoiceAllOfLineItems } from './InvoiceAllOfLineItems';
import { Payment } from './Payment';
import { Price } from './Price';
import { Subscription } from './Subscription';
import { SubscriptionPeriod } from './SubscriptionPeriod';
import { Transaction } from './Transaction';
import { Transfer } from './Transfer';
import { Wallet } from './Wallet';
export declare class InvoiceAllOf {
    'account': string | Account;
    'amount': number;
    'amount_paid'?: number;
    'application_fee_percent'?: number;
    'chain': InvoiceAllOfChainEnum;
    'currency': InvoiceAllOfCurrencyEnum;
    'customer': string | Customer;
    'due'?: number;
    'fees': Array<Fee>;
    'line_items'?: InvoiceAllOfLineItems;
    'metadata'?: any;
    'number': string;
    'payment'?: Payment;
    'period'?: string | SubscriptionPeriod;
    'platform_account'?: string | Account;
    'price': string | Price;
    'send_reminders'?: string;
    'status': InvoiceAllOfStatusEnum;
    'subscription'?: string | Subscription;
    'transactions': Array<Transaction>;
    'transfers': Array<Transfer>;
    'trial_period_duration'?: number;
    'wallet': string | Wallet;
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
export declare type InvoiceAllOfChainEnum = "eth" | "sol";
export declare type InvoiceAllOfCurrencyEnum = "eth" | "sol";
export declare type InvoiceAllOfStatusEnum = "open" | "paid" | "unpaid" | "void" | "past_due";
