import { Account } from './Account';
export declare class ApiKey {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'name'?: string;
    'note'?: string;
    'key': ApiKeyKeyEnum;
    'type': ApiKeyTypeEnum;
    'last_used'?: Date;
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
export declare type ApiKeyKeyEnum = "publishable" | "secret" | "restricted";
export declare type ApiKeyTypeEnum = "publishable" | "secret" | "restricted";
