export declare class UpdateInvoiceBody {
    'chain'?: string;
    'currency'?: string;
    'due'?: string;
    'application_fee_percent'?: number;
    'status'?: string;
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
