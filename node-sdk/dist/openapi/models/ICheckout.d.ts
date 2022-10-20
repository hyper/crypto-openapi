import { CheckoutStatus } from './CheckoutStatus';
import { CustomerDetails } from './CustomerDetails';
export declare class ICheckout {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'platform_account'?: string;
    'status': CheckoutStatus;
    'customer_details': CustomerDetails;
    'amount': number;
    'payment_link': string;
    'payment_intent'?: string;
    'customer': string;
    'last_payment_error'?: string;
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
