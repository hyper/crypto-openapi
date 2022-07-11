import { Account } from './Account';
import { PriceAllOfBasePrice } from './PriceAllOfBasePrice';
import { Product } from './Product';
export declare class Price {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'amount': number;
    'application_fee_percent'?: number;
    'archived'?: boolean;
    'base_price'?: PriceAllOfBasePrice;
    'billing_period_days'?: number;
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
