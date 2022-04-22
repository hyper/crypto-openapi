export declare class InlineResponse2004 {
    'account': string;
    'amount': number;
    'created': string;
    'description'?: string;
    'id': string;
    'invoice': string;
    'percent': number;
    'usdAmount': number;
    'wallet': string;
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
