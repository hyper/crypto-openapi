import { IPrice } from './IPrice';
export declare class IProduct {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'active': boolean;
    'account': string;
    'name': string;
    'description'?: string;
    'prices'?: Array<IPrice>;
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
