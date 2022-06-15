import { Account } from './Account';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { Payment } from './Payment';
import { Price } from './Price';
import { SubscriptionAllOfLineItems } from './SubscriptionAllOfLineItems';
export declare class Subscription {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'platform_account'?: string | Account;
    'price': string | Price;
    'customer': string | Customer;
    'latest_invoice'?: Invoice;
    'status': SubscriptionStatusEnum;
    'pause_collection': boolean;
    'canceled_at'?: number;
    'invoices'?: Array<Invoice>;
    'payments'?: Array<Payment>;
    'trial_period_duration'?: number;
    'line_items'?: SubscriptionAllOfLineItems;
    'current_period_start': number;
    'current_period_end': number;
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
export declare type SubscriptionStatusEnum = "active" | "canceled" | "trialing" | "past_due";
