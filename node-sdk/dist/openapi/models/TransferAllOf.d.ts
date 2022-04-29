import { Account } from './Account';
import { Invoice } from './Invoice';
import { Wallet } from './Wallet';
export declare class TransferAllOf {
    'account': string | Account;
    'invoice': string | Invoice;
    'wallet': string | Wallet;
    'percent': number;
    'description'?: string;
    'amount': number;
    'usd_amount': number;
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
