import { AfterCompletion } from './AfterCompletion';
import { LineItem } from './LineItem';
export declare class PaymentLinkCreateRequest {
    'metadata'?: {
        [key: string]: any;
    };
    'line_items'?: Array<LineItem>;
    'application_fee_percent'?: number;
    'active'?: boolean;
    'after_completion'?: AfterCompletion;
    'expires_at'?: Date | number;
    'max_usages'?: number;
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
