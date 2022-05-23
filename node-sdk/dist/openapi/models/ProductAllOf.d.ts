import { Account } from './Account';
import { Price } from './Price';
export declare class ProductAllOf {
    'account': string | Account;
    'name': string;
    'description'?: string;
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
