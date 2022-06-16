export declare class UpdateSubscriptionBody {
    'cancel_at'?: number;
    'canceled_at'?: number;
    'pause_collection'?: boolean;
    'price'?: string;
    'status'?: string;
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
