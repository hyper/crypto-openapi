import { Account } from './Account';
import { Customer } from './Customer';
export declare class WalletAllOf {
    'account': string | Account;
    'chain': WalletAllOfChainEnum;
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
export declare type WalletAllOfChainEnum = "eth" | "sol";
