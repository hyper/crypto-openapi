import { Account } from './Account';
export declare class ApiKey {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'admin': boolean;
    'key': ApiKeyKeyEnum;
    'last_used'?: number;
    'name'?: string;
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
export declare type ApiKeyKeyEnum = "publishable" | "secret" | "restricted";
export declare type ApiKeyTypeEnum = "publishable" | "secret" | "restricted";
