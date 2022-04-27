import { Account } from './Account';
import { Invoice } from './Invoice';
import { Wallet } from './Wallet';
export declare class Fee {
    'account'?: string | Account;
    'amount'?: number;
    'created': Date;
    'currency'?: string;
    'description'?: string;
    'id': string;
    'internal'?: boolean;
    'invoice'?: string | Invoice;
    'percent'?: number;
    'usdAmount'?: number;
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
