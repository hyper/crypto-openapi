export declare class Invoice {
    'id': string;
    'account'?: string;
    'amount'?: number;
    'chain'?: InvoiceChainEnum;
    'created': Date;
    'currency'?: InvoiceCurrencyEnum;
    'customer'?: string;
    'due'?: Date;
    'number'?: string;
    'product'?: string;
    'status'?: InvoiceStatusEnum;
    'transaction'?: string;
    'wallet'?: string;
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
export declare type InvoiceChainEnum = "eth" | "sol";
export declare type InvoiceCurrencyEnum = "eth" | "sol";
export declare type InvoiceStatusEnum = "open" | "paid" | "unpaid" | "void";
