import { Account } from './Account';
export declare class ApiKey {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'admin': boolean;
    'key': ApiKeyKeyEnum;
    'type': ApiKeyTypeEnum;
    'name'?: string;
    'last_used'?: number;
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
