import { PriceAllOfCustomAmount } from './PriceAllOfCustomAmount';
export declare class PriceAllOfBasePrice {
    'amount'?: number;
    'custom_amount'?: PriceAllOfCustomAmount;
    'currency'?: string;
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
