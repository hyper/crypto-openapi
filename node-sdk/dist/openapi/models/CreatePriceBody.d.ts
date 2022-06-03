import { PricesBasePrice } from './PricesBasePrice';
export declare class CreatePriceBody {
    'amount'?: string;
    'base_price'?: PricesBasePrice;
    'billing_period_duration'?: number;
    'chain': string;
    'currency': string;
    'metadata'?: any;
    'product': string;
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
