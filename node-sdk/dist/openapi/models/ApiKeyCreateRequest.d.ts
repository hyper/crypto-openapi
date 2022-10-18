import { ApiKeyType } from './ApiKeyType';
export declare class ApiKeyCreateRequest {
    'account'?: string;
    'name'?: string;
    'note'?: string;
    'type'?: ApiKeyType;
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
