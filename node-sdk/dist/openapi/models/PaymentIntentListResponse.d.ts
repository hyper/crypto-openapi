import { IPaymentIntent } from './IPaymentIntent';
export declare class PaymentIntentListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<IPaymentIntent>;
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
