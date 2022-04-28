import { Account } from './Account';
export declare class ApiKey {
    'id': string;
    'created': Date;
    'test': boolean;
    'object': string;
    'account': string | Account;
    'key': string;
    'type': ApiKeyTypeEnum;
    'admin': boolean;
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
export declare type ApiKeyTypeEnum = "publishable" | "secret" | "restricted";
