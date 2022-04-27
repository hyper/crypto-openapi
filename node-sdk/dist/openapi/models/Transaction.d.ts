import { Account } from './Account';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { Product } from './Product';
import { Wallet } from './Wallet';
export declare class Transaction {
    'account'?: string | Account;
    'amount': number;
    'chain': TransactionChainEnum;
    'created': Date;
    'currency': TransactionCurrencyEnum;
    'customer'?: string | Customer;
    'id': string;
    'invoice': string | Invoice;
    'platformAccount'?: string | Account;
    'product'?: string | Product;
    'status': TransactionStatusEnum;
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
export declare type TransactionChainEnum = "eth" | "sol";
export declare type TransactionCurrencyEnum = "eth" | "sol";
export declare type TransactionStatusEnum = "pending" | "failed" | "succeeded" | "canceled" | "refunded";
