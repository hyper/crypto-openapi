export declare class UpdateInvoiceBody {
    'amount'?: number;
    'application_fee_percent'?: number;
    'chain'?: string;
    'currency'?: string;
    'due'?: string;
    'status'?: string;
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
