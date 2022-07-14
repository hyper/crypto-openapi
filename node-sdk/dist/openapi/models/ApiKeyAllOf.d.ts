import { Account } from './Account';
export declare class ApiKeyAllOf {
    'account': string | Account;
    'admin': boolean;
    'key': ApiKeyAllOfKeyEnum;
    'type': ApiKeyAllOfTypeEnum;
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
export declare type ApiKeyAllOfKeyEnum = "publishable" | "secret" | "restricted";
export declare type ApiKeyAllOfTypeEnum = "publishable" | "secret" | "restricted";
