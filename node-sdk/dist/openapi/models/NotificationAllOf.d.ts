import { Account } from './Account';
export declare class NotificationAllOf {
    'account': string | Account;
    'data': any;
    'emails': Array<string>;
    'type': NotificationAllOfTypeEnum;
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
export declare type NotificationAllOfTypeEnum = "invoice.open" | "invoice.uncollectible" | "invoice.void" | "payment_intent.failed" | "payment_intent.succeeded" | "login" | "team.invite";
