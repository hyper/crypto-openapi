import { Account } from './Account';
import { Invoice } from './Invoice';
export declare class Transaction {
    'account'?: string | Account;
    'platform_account'?: string | Account;
    'transaction_hash'?: string;
    'invoice': string | Invoice;
    'status': TransactionStatusEnum;
    'chain': TransactionChainEnum;
    'amount': number;
    'currency': TransactionCurrencyEnum;
    'metadata'?: any;
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
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
export declare type TransactionStatusEnum = "pending" | "failed" | "succeeded" | "canceled";
export declare type TransactionChainEnum = "eth" | "sol";
export declare type TransactionCurrencyEnum = "eth" | "sol";
