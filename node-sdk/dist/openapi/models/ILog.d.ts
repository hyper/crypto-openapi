import { IRequest } from './IRequest';
import { IResponse } from './IResponse';
export declare class ILog {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'request': IRequest;
    'response': IResponse;
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
