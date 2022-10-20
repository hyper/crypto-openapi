import { Chain } from './Chain';
import { Currency } from './Currency';
import { LineItem } from './LineItem';
export declare class PaymentIntentCreateRequest {
    'amount'?: number;
    'metadata'?: {
        [key: string]: any;
    };
    'price'?: string;
    'customer'?: string;
    'line_items'?: Array<LineItem>;
    'invoice'?: string;
    'subscription'?: string;
    'chain'?: Chain;
    'application_fee_percent'?: number;
    'currency'?: Currency;
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
