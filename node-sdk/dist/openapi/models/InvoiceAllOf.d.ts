import { Account } from './Account';
import { Customer } from './Customer';
import { Fee } from './Fee';
import { Payment } from './Payment';
import { Product } from './Product';
import { Transfer } from './Transfer';
import { Wallet } from './Wallet';
export declare class InvoiceAllOf {
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
    'fees'?: Array<Fee>;
    'transfers'?: Array<Transfer>;
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
export declare type InvoiceAllOfChainEnum = "eth" | "sol";
export declare type InvoiceAllOfCurrencyEnum = "eth" | "sol";
export declare type InvoiceAllOfStatusEnum = "open" | "paid" | "unpaid" | "void";
