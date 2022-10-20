import { AfterCompletion } from './AfterCompletion';
export declare class PaymentLinkUpdateRequest {
    'metadata'?: {
        [key: string]: any;
    };
    'active'?: boolean;
    'after_completion'?: AfterCompletion;
    'expires_at'?: Date | number;
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
