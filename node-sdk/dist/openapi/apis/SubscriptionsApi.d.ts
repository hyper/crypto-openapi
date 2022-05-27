import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateSubscriptionBody } from '../models/CreateSubscriptionBody';
import { ListSubscriptionsResponse } from '../models/ListSubscriptionsResponse';
import { Subscription } from '../models/Subscription';
import { UpdateSubscriptionBody } from '../models/UpdateSubscriptionBody';
export declare class SubscriptionsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(prism_account?: string, create_subscription_body?: CreateSubscriptionBody, _options?: Configuration): Promise<RequestContext>;
    list(expand?: string, limit?: number, page?: number, sort?: any, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, update_subscription_body?: UpdateSubscriptionBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class SubscriptionsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Subscription>;
    list(response: ResponseContext): Promise<ListSubscriptionsResponse>;
    retrieve(response: ResponseContext): Promise<Subscription>;
    update(response: ResponseContext): Promise<Subscription>;
}
