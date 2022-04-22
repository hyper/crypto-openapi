import { InlineResponse200Data } from './InlineResponse200Data';
import { Set } from './Set';
export declare class InlineResponse200 {
    'data': Set<InlineResponse200Data>;
    'hasMore': boolean;
    'page': number;
    'total': number;
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
