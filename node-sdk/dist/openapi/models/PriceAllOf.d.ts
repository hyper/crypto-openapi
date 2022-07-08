import { Account } from './Account';
import { PriceAllOfBasePrice } from './PriceAllOfBasePrice';
import { Product } from './Product';
export declare class PriceAllOf {
    'account': string | Account;
    'platform_account'?: string | Account;
    'amount': number;
    'currency': string;
    'chain': string;
    'product'?: string | Product;
    'base_price'?: PriceAllOfBasePrice;
    'billing_period_duration'?: number;
    'application_fee_percent'?: number;
    'archived'?: boolean;
    'metadata'?: any;
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
