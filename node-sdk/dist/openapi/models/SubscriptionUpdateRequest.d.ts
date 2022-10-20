export declare class SubscriptionUpdateRequest {
    'metadata'?: {
        [key: string]: any;
    };
    'price'?: string;
    'cancel_at'?: Date | number;
    'pause_collection'?: boolean;
    'cancel_at_period_end'?: boolean;
    'current_period_start'?: Date | number;
    'current_period_end'?: Date | number;
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
