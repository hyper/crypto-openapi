import { Chain } from './Chain';
import { Currency } from './Currency';
import { LineItem } from './LineItem';
import { PaymentIntentStatus } from './PaymentIntentStatus';
export declare class IPaymentIntent {
    'account': string;
    'amount': number;
    'application_fee_percent'?: number;
    'chain': Chain;
    'checkout'?: string;
    'created': number;
    'currency': Currency;
    'customer': string;
    'exchange_rate': number;
    'hash'?: string;
    'id': string;
    'invoice'?: string;
    'last_payment_error'?: string;
    'line_items': Array<LineItem>;
    'metadata': {
        [key: string]: any;
    };
    'object': string;
    'platform_account'?: string;
    'price'?: string;
    'receipt_pdf'?: string;
    'status': PaymentIntentStatus;
    'subscription'?: string;
    'test': boolean;
    'usd_amount': number;
    'wallet'?: string;
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
