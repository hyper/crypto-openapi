import { IPrice } from './IPrice';
export declare class IProduct {
    'account': string;
    'active': boolean;
    'created': number;
    'description'?: string;
    'id': string;
    'name': string;
    'object': string;
    'prices'?: Array<IPrice>;
    'test': boolean;
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
