import { Account } from './Account';
import { PaymentIntent } from './PaymentIntent';
import { PayoutWallet } from './PayoutWallet';
export declare class Transfer {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'payment_intent': string | PaymentIntent;
    'wallet': string | PayoutWallet;
    'percent': number;
    'description'?: string;
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
