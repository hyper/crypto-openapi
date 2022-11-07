import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ISubscription } from '../models/ISubscription';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import { SubscriptionListResponse } from '../models/SubscriptionListResponse';
import { SubscriptionUpdateRequest } from '../models/SubscriptionUpdateRequest';
export declare class SubscriptionsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, subscription_create_request?: SubscriptionCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, subscription_create_request?: SubscriptionCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, subscription_update_request?: SubscriptionUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    update_5(id: string, pluto_account?: string, subscription_update_request?: SubscriptionUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class SubscriptionsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void | ISubscription>;
    _delete_1(response: ResponseContext): Promise<void | ISubscription>;
    create(response: ResponseContext): Promise<void | ISubscription>;
    create_2(response: ResponseContext): Promise<void | ISubscription>;
    list(response: ResponseContext): Promise<void | SubscriptionListResponse>;
    list_3(response: ResponseContext): Promise<void | SubscriptionListResponse>;
    retrieve(response: ResponseContext): Promise<void | ISubscription>;
    retrieve_4(response: ResponseContext): Promise<void | ISubscription>;
    update(response: ResponseContext): Promise<void | ISubscription>;
    update_5(response: ResponseContext): Promise<void | ISubscription>;
}
