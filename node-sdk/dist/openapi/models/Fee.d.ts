import { Account } from './Account';
import { PaymentIntent } from './PaymentIntent';
import { PayoutWallet } from './PayoutWallet';
export declare class Fee {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'description'?: string;
    'internal': boolean;
    'payment_intent': string | PaymentIntent;
    'percent': number;
    'platform_account'?: string | Account;
    'wallet': string | PayoutWallet;
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
