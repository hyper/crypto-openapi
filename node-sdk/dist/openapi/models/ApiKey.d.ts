import { Account } from './Account';
export declare class ApiKey {
    'created': Date;
    'id': string;
    'test': boolean;
    'account': string | Account;
    'admin': boolean;
    'key': string;
    'type': ApiKeyTypeEnum;
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
