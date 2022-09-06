import { Account } from './Account';
import { CheckoutAllOfCustomerDetails } from './CheckoutAllOfCustomerDetails';
import { Customer } from './Customer';
import { PaymentIntent } from './PaymentIntent';
import { PaymentLink } from './PaymentLink';
export declare class Checkout {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'platform_account': string | Account;
    'status'?: CheckoutStatusEnum;
    'customer_details': CheckoutAllOfCustomerDetails;
    'amount': number;
    'payment_link': string | PaymentLink;
    'payment_intent': string | PaymentIntent;
    'customer': string | Customer;
    'last_payment_error': string;
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
export declare type CheckoutStatusEnum = "processing" | "requires_confirmation" | "succeeded" | "failed";
