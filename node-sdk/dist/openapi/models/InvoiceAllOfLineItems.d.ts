import { Price } from './Price';
export declare class InvoiceAllOfLineItems {
    'price'?: string | Price;
    'price_data'?: any;
    'quantity'?: number;
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
