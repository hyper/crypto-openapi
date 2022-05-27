import { Account } from './Account';
import { Invoice } from './Invoice';
import { Subscription } from './Subscription';
export declare class SubscriptionPeriod {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'platform_account'?: string | Account;
    'start': number;
    'end': number;
    'invoice'?: string | Invoice;
    'subscription': string | Subscription;
    'trial': boolean;
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
