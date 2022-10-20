import { IPayoutWallet } from './IPayoutWallet';
export declare class PayoutWalletListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<IPayoutWallet>;
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
