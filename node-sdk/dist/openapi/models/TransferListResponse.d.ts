import { ITransfer } from './ITransfer';
export declare class TransferListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<ITransfer>;
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
