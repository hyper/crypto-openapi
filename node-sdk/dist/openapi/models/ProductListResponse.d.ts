import { IProduct } from './IProduct';
export declare class ProductListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<IProduct>;
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
