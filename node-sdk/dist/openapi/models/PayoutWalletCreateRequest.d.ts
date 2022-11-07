import { Chain } from './Chain';
import { PayoutWallet } from './PayoutWallet';
export declare class PayoutWalletCreateRequest {
    'address'?: string;
    'chain'?: Chain;
    '_default'?: boolean;
    'type'?: PayoutWallet;
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
