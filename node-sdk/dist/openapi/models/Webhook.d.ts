import { Account } from './Account';
export declare class Webhook {
    'id': string;
    'created': Date;
    'test': boolean;
    'object': string;
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
