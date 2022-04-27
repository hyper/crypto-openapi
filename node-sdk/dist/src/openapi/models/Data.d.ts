import { PayoutWallet } from './PayoutWallet';
export declare class Data {
    'data'?: Array<PayoutWallet>;
    'has_more'?: boolean;
    'page'?: number;
    'total'?: number;
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
