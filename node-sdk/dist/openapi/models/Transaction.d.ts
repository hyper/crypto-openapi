import { Account } from './Account';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { Product } from './Product';
import { Wallet } from './Wallet';
export declare class Transaction {
    'account'?: string | Account;
    'platform_account'?: string | Account;
    'invoice': string | Invoice;
    'status': TransactionStatusEnum;
    'chain': TransactionChainEnum;
    'amount': number;
    'currency': TransactionCurrencyEnum;
    'product'?: string | Product;
    'customer'?: string | Customer;
    'wallet'?: string | Wallet;
    'id': string;
    'created': Date;
    'test': boolean;
    'object': string;
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
export declare type TransactionStatusEnum = "pending" | "failed" | "succeeded" | "canceled" | "refunded";
export declare type TransactionChainEnum = "eth" | "sol";
export declare type TransactionCurrencyEnum = "eth" | "sol";
