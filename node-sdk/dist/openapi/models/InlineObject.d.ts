export declare class InlineObject {
    'price': string;
    'customer': string;
    'status'?: string;
    'pause_collection'?: boolean;
    'cancel_at'?: number;
    'trial_period_duration'?: number;
    'metadata'?: any;
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
