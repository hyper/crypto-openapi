export declare class InlineResponse20014 {
    'account': string;
    'amount': number;
    'chain': string;
    'created': string;
    'currency': string;
    'id': string;
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
