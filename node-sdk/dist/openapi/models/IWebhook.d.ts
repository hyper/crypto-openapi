import { EventType } from './EventType';
export declare class IWebhook {
    'account': string;
    'created': number;
    'endpoint_url': string;
    'event_types': Array<EventType>;
    'id': string;
    'object': string;
    'secret': string;
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
