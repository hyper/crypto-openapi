import { Account } from './Account';
export declare class Webhook {
    'created': Date;
    'id': string;
    'test': boolean;
    'account': string | Account;
    'endpoint_url': string;
    'event_types': Array<string>;
    'secret': string;
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
