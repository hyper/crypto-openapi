import { InvoiceStatus } from './InvoiceStatus';
export declare class InvoiceUpdateRequest {
    'metadata'?: {
        [key: string]: any;
    };
    'due'?: Date | number;
    'notify'?: boolean;
    'status'?: InvoiceStatus;
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
