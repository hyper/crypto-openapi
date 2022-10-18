import { IInvoice } from './IInvoice';
import { LineItem } from './LineItem';
import { SubscriptionStatus } from './SubscriptionStatus';
export declare class ISubscription {
    'account': string;
    'cancel_at'?: Date | number;
    'cancel_at_period_end': boolean;
    'canceled_at'?: Date | number;
    'created': number;
    'current_period_end': Date | number;
    'current_period_start': Date | number;
    'customer': string;
    'id': string;
    'latest_invoice': IInvoice;
    'line_items': Array<LineItem>;
    'metadata': {
        [key: string]: any;
    };
    'object': string;
    'pause_collection': boolean;
    'platform_account'?: string;
    'price': string;
    'status': SubscriptionStatus;
    'test': boolean;
    'trial_period_days': number;
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
