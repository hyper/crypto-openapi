import { Account } from './Account';
import { Price } from './Price';
export declare class ProductAllOf {
    'account': string | Account;
    'active'?: boolean;
    'description'?: string;
    'name': string;
    'prices'?: Array<Price>;
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
