import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListSubscriptionPeriodsResponse } from '../models/ListSubscriptionPeriodsResponse';
import { SubscriptionPeriod } from '../models/SubscriptionPeriod';
import { UpdateSubscriptionPeriodBody } from '../models/UpdateSubscriptionPeriodBody';
export declare class SubscriptionPeriodsApiRequestFactory extends BaseAPIRequestFactory {
    list(prism_account?: string, expand?: string, limit?: number, page?: number, sort?: any, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, update_subscription_period_body?: UpdateSubscriptionPeriodBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class SubscriptionPeriodsApiResponseProcessor {
    list(response: ResponseContext): Promise<ListSubscriptionPeriodsResponse>;
    retrieve(response: ResponseContext): Promise<SubscriptionPeriod>;
    update(response: ResponseContext): Promise<SubscriptionPeriod>;
}
