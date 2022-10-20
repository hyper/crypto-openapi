import { IInvoice } from './IInvoice';
import { LineItem } from './LineItem';
import { SubscriptionStatus } from './SubscriptionStatus';
export declare class ISubscription {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'platform_account'?: string;
    'price': string;
    'line_items': Array<LineItem>;
    'trial_period_days': number;
    'customer': string;
    'status': SubscriptionStatus;
    'current_period_start': Date | number;
    'current_period_end': Date | number;
    'cancel_at_period_end': boolean;
    'pause_collection': boolean;
    'cancel_at'?: Date | number;
    'canceled_at'?: Date | number;
    'latest_invoice': IInvoice;
    'metadata': {
        [key: string]: any;
    };
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
