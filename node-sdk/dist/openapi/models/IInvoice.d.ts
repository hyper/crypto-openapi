import { InvoiceStatus } from './InvoiceStatus';
import { LineItem } from './LineItem';
export declare class IInvoice {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'platform_account'?: string;
    'status': InvoiceStatus;
    'number': string;
    'price': string;
    'customer': string;
    'line_items': Array<LineItem>;
    'trial_period_days': number;
    'subscription'?: string;
    'period_start'?: Date | number;
    'period_end'?: Date | number;
    'due'?: Date | number;
    'notify': boolean;
    'invoice_pdf'?: string;
    'hosted_invoice_url': string;
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
