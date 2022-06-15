import { Account } from './Account';
import { Customer } from './Customer';
import { InvoiceAllOfLineItems } from './InvoiceAllOfLineItems';
import { Payment } from './Payment';
import { Price } from './Price';
import { Subscription } from './Subscription';
export declare class Invoice {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'platform_account'?: string | Account;
    'chain': InvoiceChainEnum;
    'amount': number;
    'status': InvoiceStatusEnum;
    'number': string;
    'customer': string | Customer;
    'price': string | Price;
    'payment'?: Payment;
    'subscription'?: string | Subscription;
    'line_items'?: InvoiceAllOfLineItems;
    'trial_period_duration'?: number;
    'send_reminders'?: string;
    'renewal'?: boolean;
    'period_start': number;
    'period_end': number;
    'due': number;
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
export declare type InvoiceChainEnum = "eth" | "sol";
export declare type InvoiceStatusEnum = "open" | "paid" | "void" | "past_due" | "uncollectible";
