import { Account } from './Account';
export declare class PayoutWallet {
    'id': string;
    'created': Date;
    'test': boolean;
    'object': string;
    'account': string | Account;
    'address': string;
    'admin': boolean;
    'chain': PayoutWalletChainEnum;
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
export declare type PayoutWalletChainEnum = "eth" | "sol";
