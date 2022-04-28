export declare class InlineObject2 {
    'amount'?: number;
    'base_currency'?: string;
    'chain'?: string;
    'currency'?: string;
    'name'?: string;
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
