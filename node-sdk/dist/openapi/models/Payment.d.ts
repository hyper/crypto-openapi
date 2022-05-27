import { Account } from './Account';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { Subscription } from './Subscription';
import { Wallet } from './Wallet';
export declare class Payment {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'amount': number;
    'currency': string;
    'customer': string | Customer;
    'error_message'?: string;
    'exchange_rate': number;
    'invoice': string | Invoice;
    'status': PaymentStatusEnum;
    'subscription'?: string | Subscription;
    'usd_amount': number;
    'wallet': string | Wallet | any;
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
export declare type PaymentStatusEnum = "succeeded" | "failed";
