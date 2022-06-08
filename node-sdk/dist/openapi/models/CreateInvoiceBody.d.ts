import { InvoicesLineItems } from './InvoicesLineItems';
export declare class CreateInvoiceBody {
    'account': string;
    'application_fee_percent'?: number;
    'chain': string;
    'currency': string;
    'due'?: string;
    'number': string;
    'customer': string;
    'price'?: string;
    'wallet': string;
    'line_items'?: Array<InvoicesLineItems>;
    'trial_period_duration'?: number;
    'send_reminders'?: string;
    'metadata'?: any;
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
