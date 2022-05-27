export declare class CreateSubscriptionBody {
    'cancel_at'?: number;
    'customer': string;
    'metadata'?: any;
    'pause_collection'?: boolean;
    'price': string;
    'status'?: string;
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
