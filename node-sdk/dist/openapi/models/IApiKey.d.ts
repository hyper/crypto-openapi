import { ApiKeyType } from './ApiKeyType';
export declare class IApiKey {
    'account': string;
    'admin': boolean;
    'created': number;
    'id': string;
    'key': string;
    'last_used'?: Date | number;
    'name': string;
    'note'?: string;
    'object': string;
    'test': boolean;
    'type': ApiKeyType;
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
