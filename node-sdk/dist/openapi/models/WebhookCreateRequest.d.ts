import { EventType } from './EventType';
export declare class WebhookCreateRequest {
    'secret'?: string;
    'endpoint_url'?: string;
    'event_types'?: Array<EventType>;
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
