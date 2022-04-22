export declare class InlineResponse20016 {
    'account': string;
    'amount': number;
    'baseCurrency'?: any;
    'chain': string;
    'created': string;
    'currency': string;
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
