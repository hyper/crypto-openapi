import { Account } from './Account';
export declare class Notification {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'data': string;
    'emails'?: Array<string>;
    'type': NotificationTypeEnum;
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
export declare type NotificationTypeEnum = "invoice.paid" | "invoice.unpaid" | "invoice.void" | "payment.failed" | "payment.succeeded";
