import { Account } from './Account';
import { PriceAllOfBasePrice } from './PriceAllOfBasePrice';
import { Product } from './Product';
export declare class PriceAllOf {
    'account': string | Account;
    'amount': number;
    'base_price'?: PriceAllOfBasePrice;
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
