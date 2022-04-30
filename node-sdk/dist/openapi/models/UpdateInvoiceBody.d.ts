export declare class UpdateInvoiceBody {
    'amount'?: number;
    'chain'?: string;
    'currency'?: string;
    'due'?: string;
    'transaction'?: string;
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
