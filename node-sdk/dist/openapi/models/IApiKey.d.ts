import { ApiKeyType } from './ApiKeyType';
export declare class IApiKey {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'name': string;
    'note'?: string;
    'key': string;
    'type': ApiKeyType;
    'last_used'?: Date | number;
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
