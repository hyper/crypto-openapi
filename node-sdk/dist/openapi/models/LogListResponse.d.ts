import { ILog } from './ILog';
export declare class LogListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<ILog>;
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
