import { Account } from './Account';
import { Invoice } from './Invoice';
import { PaymentIntent } from './PaymentIntent';
export declare class TransferAllOf {
    'account': string | Account;
    'description'?: string;
    'invoice': string | Invoice;
    'percent': number;
    'payment_intent': string | PaymentIntent;
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
