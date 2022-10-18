import { IPrice } from './IPrice';
export declare class LineItem {
    'description'?: string;
    'price': string;
    'price_data'?: IPrice;
    'quantity': number;
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
