import { Account } from './Account';
import { Customer } from './Customer';
import { Fee } from './Fee';
import { Payment } from './Payment';
import { Product } from './Product';
import { Transfer } from './Transfer';
import { Wallet } from './Wallet';
export declare class Invoice {
    'id': string;
    'created': Date;
    'test': boolean;
    'object': string;
    'account': string | Account;
    'amount': number;
    'chain': InvoiceChainEnum;
    'currency': InvoiceCurrencyEnum;
    'customer': string | Customer;
    'due'?: Date;
    'number': string;
    'product'?: string | Product;
    'status': InvoiceStatusEnum;
    'transaction'?: string;
    'wallet': string | Wallet;
    'fees': Array<Fee>;
    'transfers': Array<Transfer>;
    'payments'?: Array<Payment>;
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
