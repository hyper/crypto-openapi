import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { SubscriptionPeriod } from '../models/SubscriptionPeriod';
export declare class SubscriptionPeriodsApiRequestFactory extends BaseAPIRequestFactory {
    list(prism_account?: string, expand?: string, limit?: number, page?: number, sort?: any, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, inline_object2?: InlineObject2, _options?: Configuration): Promise<RequestContext>;
}
export declare class SubscriptionPeriodsApiResponseProcessor {
    list(response: ResponseContext): Promise<InlineResponse2001>;
    retrieve(response: ResponseContext): Promise<SubscriptionPeriod>;
    update(response: ResponseContext): Promise<SubscriptionPeriod>;
}
