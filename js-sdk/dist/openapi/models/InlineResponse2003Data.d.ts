export declare class InlineResponse2003Data {
    'account': string;
    'amount': number;
    'created': string;
    'description'?: any;
    'id'?: string;
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
