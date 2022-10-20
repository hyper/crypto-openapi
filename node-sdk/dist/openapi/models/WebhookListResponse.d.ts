import { IWebhook } from './IWebhook';
export declare class WebhookListResponse {
    'total': number;
    'has_more': boolean;
    'page': number;
    'data': Array<IWebhook>;
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
