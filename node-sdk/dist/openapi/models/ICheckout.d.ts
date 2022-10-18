import { CheckoutStatus } from './CheckoutStatus';
import { CustomerDetails } from './CustomerDetails';
export declare class ICheckout {
    'account': string;
    'amount': number;
    'created': number;
    'customer': string;
    'customer_details': CustomerDetails;
    'id': string;
    'last_payment_error'?: string;
    'object': string;
    'payment_intent'?: string;
    'payment_link': string;
    'platform_account'?: string;
    'status': CheckoutStatus;
    'test': boolean;
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
