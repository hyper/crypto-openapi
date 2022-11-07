import { Chain } from './Chain';
import { Currency } from './Currency';
import { LineItem } from './LineItem';
export declare class PaymentIntentCreateRequest {
    'amount'?: number;
    'application_fee_percent'?: number;
    'chain'?: Chain;
    'currency'?: Currency;
    'customer'?: string;
    'invoice'?: string;
    'line_items'?: Array<LineItem>;
    'metadata'?: {
        [key: string]: any;
    };
    'price'?: string;
    'subscription'?: string;
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
