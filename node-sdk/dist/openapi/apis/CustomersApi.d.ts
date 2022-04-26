import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Customer } from '../models/Customer';
import { InlineObject } from '../models/InlineObject';
import { InlineResponse200 } from '../models/InlineResponse200';
export declare class CustomersApiRequestFactory extends BaseAPIRequestFactory {
    create(prismAccount?: string, inlineObject?: InlineObject, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(customerId: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    update(customerId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class CustomersApiResponseProcessor {
    create(response: ResponseContext): Promise<Customer>;
    list(response: ResponseContext): Promise<InlineResponse200>;
    retrieve(response: ResponseContext): Promise<Customer>;
    update(response: ResponseContext): Promise<Customer>;
}
