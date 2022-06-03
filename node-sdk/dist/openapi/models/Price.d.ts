import { Account } from './Account';
import { PricesBasePrice } from './PricesBasePrice';
import { Product } from './Product';
export declare class Price {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'amount': number;
    'application_fee_percent'?: number;
    'base_price'?: PricesBasePrice;
    'billing_period_duration'?: number;
    'chain': string;
    'currency': string;
    'metadata'?: any;
    'platform_account'?: string | Account;
    'product'?: string | Product;
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
