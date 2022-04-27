import { Transfer } from './Transfer';
export declare class ListTransfersResponse {
    'data'?: Array<Transfer>;
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
