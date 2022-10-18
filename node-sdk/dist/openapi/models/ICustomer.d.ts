import { CustomerCreateRequestBillingDetails } from './CustomerCreateRequestBillingDetails';
import { IPaymentIntent } from './IPaymentIntent';
import { IWallet } from './IWallet';
export declare class ICustomer {
    'account': string;
    'billing_details': CustomerCreateRequestBillingDetails;
    'created': number;
    'email'?: string;
    'id': string;
    'last_payment'?: IPaymentIntent;
    'metadata': {
        [key: string]: any;
    };
    'name'?: string;
    'object': string;
    'payments'?: number;
    'phone'?: string;
    'test': boolean;
    'wallets': Array<IWallet>;
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
