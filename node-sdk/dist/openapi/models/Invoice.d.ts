import { Account } from './Account';
import { Customer } from './Customer';
import { Product } from './Product';
import { Wallet } from './Wallet';
export declare class Invoice {
    'account'?: string | Account;
    'amount'?: number;
    'chain'?: InvoiceChainEnum;
    'created': Date;
    'currency'?: InvoiceCurrencyEnum;
    'customer'?: string | Customer;
    'due'?: Date;
    'id': string;
    'number'?: string;
    'product'?: string | Product;
    'status'?: InvoiceStatusEnum;
    'transaction'?: string;
    'wallet'?: string | Wallet;
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
