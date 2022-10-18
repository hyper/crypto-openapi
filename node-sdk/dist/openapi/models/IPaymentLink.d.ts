import { AfterCompletion } from './AfterCompletion';
import { Chain } from './Chain';
import { Currency } from './Currency';
import { LineItem } from './LineItem';
export declare class IPaymentLink {
    'account': string;
    'active': boolean;
    'after_completion': AfterCompletion;
    'application_fee_percent'?: number;
    'chain': Chain;
    'created': number;
    'currency': Currency;
    'expires_at'?: Date | number;
    'id': string;
    'line_items': Array<LineItem>;
    'max_usages'?: number;
    'metadata': {
        [key: string]: any;
    };
    'object': string;
    'platform_account'?: string;
    'remaining_stock'?: number;
    'test': boolean;
    'url': string;
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
