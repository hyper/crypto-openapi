import { Account } from './Account';
import { Invoice } from './Invoice';
export declare class TransactionAllOf {
    'account'?: string | Account;
    'amount': number;
    'chain': TransactionAllOfChainEnum;
    'currency': TransactionAllOfCurrencyEnum;
    'invoice': string | Invoice;
    'metadata'?: any;
    'platform_account'?: string | Account;
    'status': TransactionAllOfStatusEnum;
    'transaction_hash'?: string;
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
export declare type TransactionAllOfChainEnum = "eth" | "sol";
export declare type TransactionAllOfCurrencyEnum = "eth" | "sol";
export declare type TransactionAllOfStatusEnum = "pending" | "failed" | "succeeded" | "canceled";
