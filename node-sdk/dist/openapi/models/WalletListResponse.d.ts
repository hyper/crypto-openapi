import { IWallet } from './IWallet';
export declare class WalletListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<IWallet>;
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
