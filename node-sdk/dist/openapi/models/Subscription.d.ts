import { Account } from './Account';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { Payment } from './Payment';
import { Price } from './Price';
import { SubscriptionPeriod } from './SubscriptionPeriod';
export declare class Subscription {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
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
export declare type SubscriptionStatusEnum = "active" | "canceled" | "trialing" | "past_due";
