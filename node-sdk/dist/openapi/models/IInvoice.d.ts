import { InvoiceStatus } from './InvoiceStatus';
import { LineItem } from './LineItem';
export declare class IInvoice {
    'account': string;
    'coupon'?: string;
    'created': number;
    'customer': string;
    'due'?: Date | number;
    'hosted_invoice_url': string;
    'id': string;
    'invoice_pdf'?: string;
    'line_items': Array<LineItem>;
    'metadata': {
        [key: string]: any;
    };
    'notify': boolean;
    'number': string;
    'object': string;
    'period_end'?: Date | number;
    'period_start'?: Date | number;
    'platform_account'?: string;
    'price': string;
    'status': InvoiceStatus;
    'subscription'?: string;
    'test': boolean;
    'trial_period_days': number;
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
