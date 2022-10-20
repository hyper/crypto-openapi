import { LineItem } from './LineItem';
export declare class SubscriptionCreateRequest {
    'metadata'?: {
        [key: string]: any;
    };
    'price'?: string;
    'customer'?: string;
    'line_items'?: Array<LineItem>;
    'trial_period_days'?: number;
    'cancel_at'?: Date | number;
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
