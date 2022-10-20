import { Chain } from './Chain';
import { Currency } from './Currency';
import { LineItem } from './LineItem';
import { PaymentIntentStatus } from './PaymentIntentStatus';
export declare class IPaymentIntent {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'platform_account'?: string;
    'hash'?: string;
    'invoice'?: string;
    'subscription'?: string;
    'checkout'?: string;
    'price'?: string;
    'line_items': Array<LineItem>;
    'customer': string;
    'wallet'?: string;
    'status': PaymentIntentStatus;
    'chain': Chain;
    'amount': number;
    'usd_amount': number;
    'exchange_rate': number;
    'application_fee_percent'?: number;
    'currency': Currency;
    'last_payment_error'?: string;
    'receipt_pdf'?: string;
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
