import { Account } from './Account';
import { Invoice } from './Invoice';
export declare class Transaction {
    'account'?: string | Account;
    'amount': number;
    'chain': TransactionChainEnum;
    'currency': TransactionCurrencyEnum;
    'invoice': string | Invoice;
    'metadata'?: any;
    'platform_account'?: string | Account;
    'status': TransactionStatusEnum;
    'transaction_hash'?: string;
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
export declare type TransactionChainEnum = "eth" | "sol";
export declare type TransactionCurrencyEnum = "eth" | "sol";
export declare type TransactionStatusEnum = "pending" | "failed" | "succeeded" | "canceled";
