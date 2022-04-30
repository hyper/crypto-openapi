import { Account } from './Account';
import { Customer } from './Customer';
export declare class Wallet {
    'id': string;
    'created': Date;
    'test': boolean;
    'object': string;
    'account': string | Account;
    'chain': WalletChainEnum;
    'address': string;
    'admin': boolean;
    'customer': string | Customer;
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
export declare type WalletChainEnum = "eth" | "sol";
