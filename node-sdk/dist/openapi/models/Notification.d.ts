import { Account } from './Account';
export declare class Notification {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'type': NotificationTypeEnum;
    'data': any;
    'emails': Array<string>;
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
export declare type NotificationTypeEnum = "invoice.open" | "invoice.uncollectible" | "invoice.void" | "payment_intent.failed" | "payment_intent.succeeded" | "login" | "team.invite";
