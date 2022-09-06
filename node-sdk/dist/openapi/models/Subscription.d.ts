import { Account } from './Account';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { LineItem } from './LineItem';
import { Price } from './Price';
export declare class Subscription {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'platform_account'?: string | Account;
    'price': string | Price;
    'line_items'?: Array<LineItem>;
    'trial_period_days'?: number;
    'customer': string | Customer;
    'status': SubscriptionStatusEnum;
    'pause_collection'?: boolean;
    'canceled_at'?: number;
    'current_period_start'?: number;
    'current_period_end'?: number;
    'cancel_at_period_end': boolean;
    'cancel_at'?: number;
    'latest_invoice'?: Invoice;
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
export declare type SubscriptionStatusEnum = "active" | "canceled" | "trialing" | "past_due" | "incomplete";
