import { Account } from './Account';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { PaymentIntentAllOfLineItems } from './PaymentIntentAllOfLineItems';
import { Price } from './Price';
export declare class SubscriptionAllOf {
    'account': string | Account;
    'platform_account'?: string | Account;
    'price': string | Price;
    'customer': string | Customer;
    'latest_invoice'?: Invoice;
    'status': SubscriptionAllOfStatusEnum;
    'pause_collection'?: boolean;
    'canceled_at'?: number;
    'trial_period_days'?: number;
    'line_items'?: Array<PaymentIntentAllOfLineItems>;
    'current_period_start'?: number;
    'current_period_end'?: number;
    'cancel_at_period_end': boolean;
    'cancel_at'?: number;
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
export declare type SubscriptionAllOfStatusEnum = "active" | "canceled" | "trialing" | "past_due" | "incomplete";
