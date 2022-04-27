import { Account } from './Account';
import { Customer } from './Customer';
export declare class Wallet {
    'account'?: string | Account;
    'address': string;
    'admin'?: boolean;
    'chain': WalletChainEnum;
    'created': Date;
    'customer'?: string | Customer;
    'id': string;
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
