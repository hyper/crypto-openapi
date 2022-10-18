import { CustomAmount } from './CustomAmount';
export declare class BasePrice {
    'amount'?: number;
    'currency': string;
    'custom_amount'?: CustomAmount;
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
