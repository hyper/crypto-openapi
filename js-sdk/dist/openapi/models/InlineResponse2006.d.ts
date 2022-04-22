import { InlineResponse2006Data } from './InlineResponse2006Data';
import { Set } from './Set';
export declare class InlineResponse2006 {
    'data': Set<InlineResponse2006Data>;
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
