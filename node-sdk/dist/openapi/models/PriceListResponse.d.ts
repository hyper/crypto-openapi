import { IPrice } from './IPrice';
export declare class PriceListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<IPrice>;
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
