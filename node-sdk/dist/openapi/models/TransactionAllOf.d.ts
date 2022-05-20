import { Account } from './Account';
import { Invoice } from './Invoice';
export declare class TransactionAllOf {
    'account'?: string | Account;
    'platform_account'?: string | Account;
    'transaction_hash'?: string;
    'invoice': string | Invoice;
    'status': TransactionAllOfStatusEnum;
    'chain': TransactionAllOfChainEnum;
    'amount': number;
    'currency': TransactionAllOfCurrencyEnum;
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
export declare type TransactionAllOfStatusEnum = "pending" | "failed" | "succeeded" | "canceled";
export declare type TransactionAllOfChainEnum = "eth" | "sol";
export declare type TransactionAllOfCurrencyEnum = "eth" | "sol";
