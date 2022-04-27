import { PayoutWallet } from './PayoutWallet';
export declare class InlineObject3 {
    'data'?: Array<PayoutWallet>;
    'hasMore'?: boolean;
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
