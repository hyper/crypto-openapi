import { Account } from './Account';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { PaymentIntentAllOfLineItems } from './PaymentIntentAllOfLineItems';
import { Price } from './Price';
export declare class Subscription {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'cancel_at'?: number;
    'cancel_at_period_end': boolean;
    'canceled_at'?: number;
    'current_period_end'?: number;
    'current_period_start'?: number;
    'customer': string | Customer;
    'latest_invoice'?: Invoice;
    'line_items'?: Array<PaymentIntentAllOfLineItems>;
    'pause_collection'?: boolean;
    'platform_account'?: string | Account;
    'price': string | Price;
    'status': SubscriptionStatusEnum;
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
export declare type SubscriptionStatusEnum = "active" | "canceled" | "trialing" | "past_due" | "incomplete";
