import { BasePrice } from './BasePrice';
import { Chain } from './Chain';
import { Currency } from './Currency';
import { CustomAmount } from './CustomAmount';
export declare class PriceCreateRequest {
    'amount'?: number;
    'application_fee_percent'?: number;
    'archived'?: boolean;
    'base_price'?: BasePrice;
    'billing_period_days'?: number;
    'chain'?: Chain;
    'currency'?: Currency;
    'custom_amount'?: CustomAmount;
    'metadata'?: {
        [key: string]: any;
    };
    'product'?: string;
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
