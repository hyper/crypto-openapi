import { ICustomer } from './ICustomer';
export declare class CustomerListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<ICustomer>;
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
