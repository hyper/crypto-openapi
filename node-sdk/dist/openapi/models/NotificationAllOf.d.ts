import { Account } from './Account';
export declare class NotificationAllOf {
    'account': string | Account;
    'type': NotificationAllOfTypeEnum;
    'data': string;
    'emails'?: Array<string>;
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
export declare type NotificationAllOfTypeEnum = "invoice.paid" | "invoice.unpaid" | "invoice.void" | "payment.failed" | "payment.succeeded";
