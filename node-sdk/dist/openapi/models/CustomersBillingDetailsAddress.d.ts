export declare class CustomersBillingDetailsAddress {
    'city'?: string;
    'country'?: string;
    'line1'?: string;
    'line2'?: string;
    'postal_code'?: string;
    'state'?: string;
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
