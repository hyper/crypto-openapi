export declare class InlineResponse20015 {
    'account': string;
    'amount': number;
    'baseCurrency'?: string;
    'chain': string;
    'created': string;
    'currency': string;
    'id'?: string;
    'name': string;
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
