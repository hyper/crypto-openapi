import { EventType } from './EventType';
export declare class IWebhook {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'account': string;
    'endpoint_url': string;
    'event_types': Array<EventType>;
    'secret': string;
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
