export declare class InlineResponse2005 {
    'account': string;
    'amount': number;
    'created': string;
    'currency': string;
    'description': string;
    'id'?: string;
    'invoice': string;
    'percent': number;
    'to': string;
    'usdAmount': number;
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
