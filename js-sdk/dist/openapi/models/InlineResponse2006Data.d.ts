export declare class InlineResponse2006Data {
    'account': string;
    'amount': number;
    'chain': string;
    'created': string;
    'currency': string;
    'customer': string;
    'due'?: any;
    'id'?: string;
    'number': string;
    'product': string;
    'status': string;
    'transaction': string;
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
