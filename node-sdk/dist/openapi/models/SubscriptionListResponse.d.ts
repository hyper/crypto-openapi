import { ISubscription } from './ISubscription';
export declare class SubscriptionListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<ISubscription>;
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
