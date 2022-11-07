import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IWebhook } from '../models/IWebhook';
import { WebhookCreateRequest } from '../models/WebhookCreateRequest';
import { WebhookListResponse } from '../models/WebhookListResponse';
import { WebhookUpdateRequest } from '../models/WebhookUpdateRequest';
export declare class WebhooksApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, webhook_create_request?: WebhookCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, webhook_create_request?: WebhookCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, webhook_update_request?: WebhookUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    update_5(id: string, pluto_account?: string, webhook_update_request?: WebhookUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class WebhooksApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void | IWebhook>;
    _delete_1(response: ResponseContext): Promise<void | IWebhook>;
    create(response: ResponseContext): Promise<void | IWebhook>;
    create_2(response: ResponseContext): Promise<void | IWebhook>;
    list(response: ResponseContext): Promise<void | WebhookListResponse>;
    list_3(response: ResponseContext): Promise<void | WebhookListResponse>;
    retrieve(response: ResponseContext): Promise<void | IWebhook>;
    retrieve_4(response: ResponseContext): Promise<void | IWebhook>;
    update(response: ResponseContext): Promise<void | IWebhook>;
    update_5(response: ResponseContext): Promise<void | IWebhook>;
}
