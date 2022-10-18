import { AfterCompletion } from './AfterCompletion';
import { LineItem } from './LineItem';
export declare class PaymentLinkCreateRequest {
    'active'?: boolean;
    'after_completion'?: AfterCompletion;
    'application_fee_percent'?: number;
    'expires_at'?: Date | number;
    'line_items'?: Array<LineItem>;
    'max_usages'?: number;
    'metadata'?: {
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
