import { InvoiceStatus } from './InvoiceStatus';
export declare class InvoiceUpdateRequest {
    'due'?: Date | number;
    'metadata'?: {
        [key: string]: any;
    };
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
