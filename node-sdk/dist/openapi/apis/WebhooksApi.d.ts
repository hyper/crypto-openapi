import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { Webhook } from '../models/Webhook';
export declare class WebhooksApiRequestFactory extends BaseAPIRequestFactory {
  _delete(
    webhookId: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext>;
  create(
    prismAccount?: string,
    inlineObject5?: InlineObject5,
    _options?: Configuration
  ): Promise<RequestContext>;
  list(
    limit?: number,
    page?: number,
    sort?: any,
    expand?: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext>;
  retrieve(
    webhookId: string,
    expand?: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext>;
  update(
    webhookId: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext>;
}
export declare class WebhooksApiResponseProcessor {
  _delete(response: ResponseContext): Promise<void>;
  create(response: ResponseContext): Promise<Webhook>;
  list(response: ResponseContext): Promise<InlineResponse2007>;
  retrieve(response: ResponseContext): Promise<Webhook>;
  update(response: ResponseContext): Promise<Webhook>;
}
