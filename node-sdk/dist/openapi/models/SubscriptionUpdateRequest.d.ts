export declare class SubscriptionUpdateRequest {
    'cancel_at'?: Date | number;
    'cancel_at_period_end'?: boolean;
    'current_period_end'?: Date | number;
    'current_period_start'?: Date | number;
    'metadata'?: {
        [key: string]: any;
    };
    'pause_collection'?: boolean;
    'price'?: string;
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
