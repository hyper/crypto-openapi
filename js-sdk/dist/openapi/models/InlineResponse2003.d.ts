import { InlineResponse2003Data } from './InlineResponse2003Data';
import { Set } from './Set';
export declare class InlineResponse2003 {
    'data': Set<InlineResponse2003Data>;
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
