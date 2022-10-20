export declare class Address {
    'state'?: string;
    'postal_code'?: string;
    'line2'?: string;
    'line1'?: string;
    'country'?: string;
    'city'?: string;
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
