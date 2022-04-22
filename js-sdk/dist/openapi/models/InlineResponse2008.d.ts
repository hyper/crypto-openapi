export declare class InlineResponse2008 {
    'account': string;
    'amount': number;
    'chain': string;
    'created': string;
    'currency': string;
    'due': number;
    'id'?: string;
    'number': string;
    'product': string;
    'status': string;
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
