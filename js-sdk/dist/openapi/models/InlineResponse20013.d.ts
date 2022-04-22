import { InlineResponse20013Data } from './InlineResponse20013Data';
import { Set } from './Set';
export declare class InlineResponse20013 {
    'data': Set<InlineResponse20013Data>;
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
