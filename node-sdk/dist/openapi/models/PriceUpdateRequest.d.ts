export declare class PriceUpdateRequest {
    'metadata'?: {
        [key: string]: any;
    };
    'application_fee_percent'?: number;
    'archived'?: boolean;
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
