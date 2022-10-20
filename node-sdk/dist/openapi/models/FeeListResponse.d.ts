import { IFee } from './IFee';
export declare class FeeListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<IFee>;
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
