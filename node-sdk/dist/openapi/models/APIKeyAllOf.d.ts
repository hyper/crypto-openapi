import { Account } from './Account';
export declare class APIKeyAllOf {
    'account': string | Account;
    'admin': boolean;
    'created': Date;
    'id': string;
    'key': string;
    'type': APIKeyAllOfTypeEnum;
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
export declare type APIKeyAllOfTypeEnum = "publishable" | "secret" | "restricted";
