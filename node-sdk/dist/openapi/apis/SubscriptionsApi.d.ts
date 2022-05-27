import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineResponse200 } from '../models/InlineResponse200';
import { Subscription } from '../models/Subscription';
export declare class SubscriptionsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(prism_account?: string, inline_object?: InlineObject, _options?: Configuration): Promise<RequestContext>;
    list(expand?: string, limit?: number, page?: number, sort?: any, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, inline_object1?: InlineObject1, _options?: Configuration): Promise<RequestContext>;
}
export declare class SubscriptionsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Subscription>;
    list(response: ResponseContext): Promise<InlineResponse200>;
    retrieve(response: ResponseContext): Promise<Subscription>;
    update(response: ResponseContext): Promise<Subscription>;
}
