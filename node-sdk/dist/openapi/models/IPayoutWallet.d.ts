import { Chain } from './Chain';
import { PayoutWallet } from './PayoutWallet';
export declare class IPayoutWallet {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'chain': Chain;
    'address': string;
    '_default': boolean;
    'type': PayoutWallet;
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
