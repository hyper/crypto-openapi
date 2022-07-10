import { Account } from './Account';
import { Customer } from './Customer';
import { InvoiceAllOfLineItems } from './InvoiceAllOfLineItems';
import { Price } from './Price';
import { Subscription } from './Subscription';
export declare class InvoiceAllOf {
    'account': string | Account;
    'amount': number;
    'chain': InvoiceAllOfChainEnum;
    'customer': string | Customer;
    'due'?: number;
    'line_items'?: Array<InvoiceAllOfLineItems>;
    'metadata'?: any;
    'notify': boolean;
    'number': string;
    'period_end'?: number;
    'period_start'?: number;
    'platform_account'?: string | Account;
    'price': string | Price;
    'send_reminders'?: boolean;
    'status': InvoiceAllOfStatusEnum;
    'subscription'?: string | Subscription;
    'trial_period_duration'?: number;
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
export declare type InvoiceAllOfStatusEnum = "open" | "paid" | "void" | "past_due" | "uncollectible";
