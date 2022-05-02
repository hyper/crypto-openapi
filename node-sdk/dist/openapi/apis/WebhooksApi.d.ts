import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateWebhookBody } from '../models/CreateWebhookBody';
import { ListWebhooksResponse } from '../models/ListWebhooksResponse';
import { UpdateWebhookBody } from '../models/UpdateWebhookBody';
import { Webhook } from '../models/Webhook';
export declare class WebhooksApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(prism_account?: string, create_webhook_body?: CreateWebhookBody, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, update_webhook_body?: UpdateWebhookBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class WebhooksApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Webhook>;
    list(response: ResponseContext): Promise<ListWebhooksResponse>;
    retrieve(response: ResponseContext): Promise<Webhook>;
    update(response: ResponseContext): Promise<Webhook>;
}
