import { Account } from './Account';
import { Customer } from './Customer';
import { Product } from './Product';
import { Wallet } from './Wallet';
export declare class InvoiceAllOf {
    ''?: string;
    'account': string | Account;
    'amount': number;
    'chain': InvoiceAllOfChainEnum;
    'currency': InvoiceAllOfCurrencyEnum;
    'customer': string | Customer;
    'due'?: Date;
    'number': string;
    'product'?: string | Product;
    'status': InvoiceAllOfStatusEnum;
    'transaction'?: string;
    'wallet': string | Wallet;
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
export declare type InvoiceAllOfChainEnum = "eth" | "sol";
export declare type InvoiceAllOfCurrencyEnum = "eth" | "sol";
export declare type InvoiceAllOfStatusEnum = "open" | "paid" | "unpaid" | "void";
