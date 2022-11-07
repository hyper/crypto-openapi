import { LineItem } from './LineItem';
export declare class SubscriptionCreateRequest {
    'cancel_at'?: Date | number;
    'customer'?: string;
    'line_items'?: Array<LineItem>;
    'metadata'?: {
        [key: string]: any;
    };
    'price'?: string;
    'trial_period_days'?: number;
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
