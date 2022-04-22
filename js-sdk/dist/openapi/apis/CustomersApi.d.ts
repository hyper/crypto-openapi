import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject } from '../models/InlineObject';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
export declare class CustomersApiRequestFactory extends BaseAPIRequestFactory {
    create(prismAccount?: string, inlineObject?: InlineObject, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(customerId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    update(customerId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class CustomersApiResponseProcessor {
    create(response: ResponseContext): Promise<InlineResponse2001>;
    list(response: ResponseContext): Promise<InlineResponse200>;
    retrieve(response: ResponseContext): Promise<InlineResponse2001>;
    update(response: ResponseContext): Promise<InlineResponse2002>;
}
