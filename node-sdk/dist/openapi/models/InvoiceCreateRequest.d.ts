import { LineItem } from './LineItem';
export declare class InvoiceCreateRequest {
    'metadata'?: {
        [key: string]: any;
    };
    'price'?: string;
    'customer'?: string;
    'line_items'?: Array<LineItem>;
    'trial_period_days'?: number;
    'due'?: Date | number;
    'notify'?: boolean;
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
