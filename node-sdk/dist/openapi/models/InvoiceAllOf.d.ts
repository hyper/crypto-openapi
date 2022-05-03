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
    'fees': Array<Fee>;
    'number': string;
    'payments'?: Array<Payment>;
    'product'?: string | Product;
    'status': InvoiceAllOfStatusEnum;
    'transaction'?: string;
    'transfers': Array<Transfer>;
    'wallet': string | Wallet;
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
export declare type InvoiceAllOfChainEnum = "eth" | "sol";
export declare type InvoiceAllOfCurrencyEnum = "eth" | "sol";
export declare type InvoiceAllOfStatusEnum = "open" | "paid" | "unpaid" | "void";
