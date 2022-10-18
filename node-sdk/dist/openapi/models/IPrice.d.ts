import { BasePrice } from './BasePrice';
import { Chain } from './Chain';
import { Currency } from './Currency';
import { CustomAmount } from './CustomAmount';
export declare class IPrice {
    'account': string;
    'amount'?: number;
    'application_fee_percent'?: number;
    'archived': boolean;
    'base_price'?: BasePrice;
    'billing_period_days'?: number;
    'chain': Chain;
    'created': number;
    'currency': Currency;
    'custom_amount'?: CustomAmount;
    'id': string;
    'metadata': {
        [key: string]: any;
    };
    'object': string;
    'platform_account'?: string;
    'product'?: string;
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
