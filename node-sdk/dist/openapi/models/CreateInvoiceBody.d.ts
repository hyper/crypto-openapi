import { InvoicesFeeData } from './InvoicesFeeData';
export declare class CreateInvoiceBody {
    'account': string;
    'amount': number;
    'chain': string;
    'currency': string;
    'customer': string;
    'due'?: string;
    'fee_data'?: InvoicesFeeData;
    'number': string;
    'product'?: string;
    'transaction': string;
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
