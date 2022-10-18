import { IRequest } from './IRequest';
import { IResponse } from './IResponse';
export declare class ILog {
    'account': string;
    'created': number;
    'id': string;
    'object': string;
    'request': IRequest;
    'response': IResponse;
    'test': boolean;
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
