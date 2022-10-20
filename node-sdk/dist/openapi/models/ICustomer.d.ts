import { ICustomerBillingDetails } from './ICustomerBillingDetails';
import { IPaymentIntent } from './IPaymentIntent';
import { IWallet } from './IWallet';
export declare class ICustomer {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'name'?: string;
    'email'?: string;
    'phone'?: string;
    'wallets': Array<IWallet>;
    'payments'?: number;
    'last_payment'?: IPaymentIntent;
    'billing_details': ICustomerBillingDetails;
    'metadata': {
        [key: string]: any;
    };
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
