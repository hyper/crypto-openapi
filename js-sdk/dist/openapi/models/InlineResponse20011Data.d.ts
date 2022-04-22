export declare class InlineResponse20011Data {
    'account': string;
    'amount': number;
    'currency': string;
    'customer': string;
    'errorMessage': string;
    'exchangeRate': string;
    'id'?: string;
    'invoice': string;
    'status': string;
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
