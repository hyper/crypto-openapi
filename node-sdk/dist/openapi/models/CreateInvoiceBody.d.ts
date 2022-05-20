export declare class CreateInvoiceBody {
    'account': string;
    'amount'?: number;
    'application_fee_percent'?: number;
    'chain': string;
    'currency': string;
    'customer': string;
    'due'?: string;
    'metadata'?: any;
    'number': string;
    'price'?: string;
    'product'?: string;
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
