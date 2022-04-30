import { Invoice } from './Invoice';
import { Set } from './Set';
export declare class ListInvoicesResponse {
    'data': Set<Invoice>;
    'has_more': boolean;
    'page': number;
    'total': number;
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
