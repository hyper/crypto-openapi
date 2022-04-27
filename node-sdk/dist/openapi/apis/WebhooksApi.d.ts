import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject8 } from '../models/InlineObject8';
import { InlineResponse2008 } from '../models/InlineResponse2008';
import { Webhook } from '../models/Webhook';
export declare class WebhooksApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    create(prismAccount?: string, inlineObject8?: InlineObject8, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class WebhooksApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Webhook>;
    list(response: ResponseContext): Promise<InlineResponse2008>;
    retrieve(response: ResponseContext): Promise<Webhook>;
    update(response: ResponseContext): Promise<Webhook>;
}
