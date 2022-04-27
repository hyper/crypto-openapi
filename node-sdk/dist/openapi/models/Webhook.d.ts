import { Account } from './Account';
export declare class Webhook {
    'account': string | Account;
    'created': Date;
    'endpointUrl': string;
    'eventTypes': Array<string>;
    'id': string;
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
