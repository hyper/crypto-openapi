import { Chain } from './Chain';
import { PayoutWallet } from './PayoutWallet';
export declare class IPayoutWallet {
    'account': string;
    'address': string;
    'chain': Chain;
    'created': number;
    '_default': boolean;
    'id': string;
    'object': string;
    'test': boolean;
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
