import { AfterCompletion } from './AfterCompletion';
import { Chain } from './Chain';
import { Currency } from './Currency';
import { LineItem } from './LineItem';
export declare class IPaymentLink {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'platform_account'?: string;
    'active': boolean;
    'url': string;
    'after_completion': AfterCompletion;
    'line_items': Array<LineItem>;
    'currency': Currency;
    'chain': Chain;
    'expires_at'?: Date | number;
    'max_usages'?: number;
    'remaining_stock'?: number;
    'application_fee_percent'?: number;
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
