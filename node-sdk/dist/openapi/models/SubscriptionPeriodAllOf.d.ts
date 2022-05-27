import { Account } from './Account';
import { Invoice } from './Invoice';
import { Subscription } from './Subscription';
export declare class SubscriptionPeriodAllOf {
    'account': string | Account;
    'end': number;
    'invoice'?: string | Invoice;
    'platform_account'?: string | Account;
    'start': number;
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
