import { Account } from './Account';
import { Customer } from './Customer';
import { LineItem } from './LineItem';
import { Price } from './Price';
import { Subscription } from './Subscription';
export declare class InvoiceAllOf {
    'account': string | Account;
    'platform_account'?: string | Account;
    'status': InvoiceAllOfStatusEnum;
    'number': string;
    'price': string | Price;
    'customer': string | Customer;
    'line_items'?: Array<LineItem>;
    'trial_period_days'?: number;
    'subscription'?: string | Subscription;
    'period_start'?: number;
    'period_end'?: number;
    'due'?: number;
    'notify': boolean;
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
export declare type InvoiceAllOfStatusEnum = "open" | "paid" | "void" | "past_due" | "uncollectible";
