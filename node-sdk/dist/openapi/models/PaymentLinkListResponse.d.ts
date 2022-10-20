import { IPaymentLink } from './IPaymentLink';
export declare class PaymentLinkListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<IPaymentLink>;
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
