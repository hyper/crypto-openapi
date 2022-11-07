import { EventType } from './EventType';
export declare class WebhookCreateRequest {
    'endpoint_url'?: string;
    'event_types'?: Array<EventType>;
    'secret'?: string;
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
