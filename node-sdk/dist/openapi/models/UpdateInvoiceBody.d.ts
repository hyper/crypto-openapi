export declare class UpdateInvoiceBody {
    'application_fee_percent'?: number;
    'chain'?: string;
    'currency'?: string;
    'due'?: string;
    'metadata'?: any;
    'send_reminders'?: string;
    'status'?: string;
    'trial_period_duration'?: number;
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
