import { Account } from './Account';
export declare class PayoutWallet {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'chain': PayoutWalletChainEnum;
    '_default'?: boolean;
    'address': string;
    'type': PayoutWalletTypeEnum;
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
export declare type PayoutWalletTypeEnum = "external" | "ftx";
