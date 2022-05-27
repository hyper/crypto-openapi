import { Account } from './Account';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { Payment } from './Payment';
import { Price } from './Price';
import { SubscriptionPeriod } from './SubscriptionPeriod';
export declare class SubscriptionAllOf {
    'account': string | Account;
    'cancel_at'?: number;
    'canceled_at'?: number;
    'current_period'?: SubscriptionPeriod;
    'customer': string | Customer;
    'invoices'?: Array<Invoice>;
    'latest_invoice'?: Invoice;
    'latest_period'?: SubscriptionPeriod;
    'next_invoice'?: Invoice;
    'pause_collection': boolean;
    'payments'?: Array<Payment>;
    'periods'?: Array<SubscriptionPeriod>;
    'platform_account'?: string | Account;
    'price': string | Price;
    'status': SubscriptionAllOfStatusEnum;
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
export declare type SubscriptionAllOfStatusEnum = "active" | "canceled" | "trialing" | "past_due";
