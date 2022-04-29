import { Account } from './Account';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { Product } from './Product';
import { Wallet } from './Wallet';
export declare class TransactionAllOf {
    'account'?: string | Account;
    'platform_account'?: string | Account;
    'invoice': string | Invoice;
    'status': TransactionAllOfStatusEnum;
    'chain': TransactionAllOfChainEnum;
    'amount': number;
    'currency': TransactionAllOfCurrencyEnum;
    'product'?: string | Product;
    'customer'?: string | Customer;
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
export declare type TransactionAllOfStatusEnum = "pending" | "failed" | "succeeded" | "canceled" | "refunded";
export declare type TransactionAllOfChainEnum = "eth" | "sol";
export declare type TransactionAllOfCurrencyEnum = "eth" | "sol";
