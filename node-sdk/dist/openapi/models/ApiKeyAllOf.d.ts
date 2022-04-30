import { Account } from './Account';
export declare class ApiKeyAllOf {
    'account': string | Account;
    'key': string;
    'type': ApiKeyAllOfTypeEnum;
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
export declare type ApiKeyAllOfTypeEnum = "publishable" | "secret" | "restricted";
