import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListSubscriptionsResponse } from '../models/ListSubscriptionsResponse';
import { Subscription } from '../models/Subscription';
export declare class SubscriptionsApiRequestFactory extends BaseAPIRequestFactory {
    cancel(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(prism_account?: string, subscription?: Subscription, _options?: Configuration): Promise<RequestContext>;
    list(expand?: string, limit?: number, page?: number, sort?: any, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, subscription?: Subscription, _options?: Configuration): Promise<RequestContext>;
}
export declare class SubscriptionsApiResponseProcessor {
    cancel(response: ResponseContext): Promise<Subscription>;
    create(response: ResponseContext): Promise<Subscription>;
    list(response: ResponseContext): Promise<ListSubscriptionsResponse>;
    retrieve(response: ResponseContext): Promise<Subscription>;
    update(response: ResponseContext): Promise<Subscription>;
}
