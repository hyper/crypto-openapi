import { Account } from './Account';
export declare class PayoutWalletAllOf {
    'account': string | Account;
    'address': string;
    'admin': boolean;
    'chain': PayoutWalletAllOfChainEnum;
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
export declare type PayoutWalletAllOfChainEnum = "eth" | "sol";
