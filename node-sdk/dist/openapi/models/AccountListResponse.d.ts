import { IAccount } from './IAccount';
export declare class AccountListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<IAccount>;
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
