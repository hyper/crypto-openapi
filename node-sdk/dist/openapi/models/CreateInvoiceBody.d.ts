import { InvoicesLineItems } from './InvoicesLineItems';
export declare class CreateInvoiceBody {
    'account': string;
    'application_fee_percent'?: number;
    'chain': string;
    'currency': string;
    'customer': string;
    'due'?: string;
    'line_items'?: Array<InvoicesLineItems>;
    'metadata'?: any;
    'number': string;
    'price'?: string;
    'send_reminders'?: string;
    'trial_period_duration'?: number;
    'wallet': string;
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
