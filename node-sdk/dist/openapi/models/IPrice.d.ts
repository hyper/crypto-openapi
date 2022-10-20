import { BasePrice } from './BasePrice';
import { Chain } from './Chain';
import { Currency } from './Currency';
import { CustomAmount } from './CustomAmount';
export declare class IPrice {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'platform_account'?: string;
    'amount'?: number;
    'custom_amount'?: CustomAmount;
    'currency': Currency;
    'chain': Chain;
    'product'?: string;
    'base_price'?: BasePrice;
    'billing_period_days'?: number;
    'application_fee_percent'?: number;
    'archived': boolean;
    'metadata': {
        [key: string]: any;
    };
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
