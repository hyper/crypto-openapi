import { InlineResponse20017Data } from './InlineResponse20017Data';
import { Set } from './Set';
export declare class InlineResponse20017 {
    'data': Set<InlineResponse20017Data>;
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
