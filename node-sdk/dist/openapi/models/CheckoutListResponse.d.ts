import { ICheckout } from './ICheckout';
export declare class CheckoutListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<ICheckout>;
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
