import { BasePrice } from './BasePrice';
import { Chain } from './Chain';
import { Currency } from './Currency';
import { CustomAmount } from './CustomAmount';
export declare class PriceCreateRequest {
    'amount'?: number;
    'metadata'?: {
        [key: string]: any;
    };
    'chain'?: Chain;
    'application_fee_percent'?: number;
    'currency'?: Currency;
    'custom_amount'?: CustomAmount;
    'product'?: string;
    'base_price'?: BasePrice;
    'billing_period_days'?: number;
    'archived'?: boolean;
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
