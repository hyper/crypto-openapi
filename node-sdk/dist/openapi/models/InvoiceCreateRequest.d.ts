import { LineItem } from './LineItem';
export declare class InvoiceCreateRequest {
    'customer'?: string;
    'due'?: Date | number;
    'line_items'?: Array<LineItem>;
    'metadata'?: {
        [key: string]: any;
    };
    'notify'?: boolean;
    'price'?: string;
    'trial_period_days'?: number;
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
