import { IApiKey } from './IApiKey';
export declare class ApiKeyListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<IApiKey>;
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
