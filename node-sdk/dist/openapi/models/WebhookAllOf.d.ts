import { Account } from './Account';
export declare class WebhookAllOf {
    'account': string | Account;
    'created': Date;
    'endpoint_url': string;
    'event_types': Array<string>;
    'secret'?: string;
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
