export declare class CreateInvoiceBody {
    'account': string;
    'amount': number;
    'chain': string;
    'currency': string;
    'customer': string;
    'due'?: string;
    'number': string;
    'product'?: string;
    'transaction': string;
    'wallet': string;
    'application_fee_percent'?: number;
    'metadata'?: any;
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
