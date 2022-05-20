import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { Price } from '../models/Price';
import { Transaction } from '../models/Transaction';
export declare class DefaultApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(prism_account?: string, inline_object?: InlineObject, _options?: Configuration): Promise<RequestContext>;
    create_1(prism_account?: string, inline_object1?: InlineObject1, _options?: Configuration): Promise<RequestContext>;
    list(prism_account?: string, expand?: string, limit?: number, page?: number, sort?: any, _options?: Configuration): Promise<RequestContext>;
    list_2(prism_account?: string, expand?: string, limit?: number, page?: number, sort?: any, _options?: Configuration): Promise<RequestContext>;
    poll(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_3(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class DefaultApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Transaction>;
    create_1(response: ResponseContext): Promise<Price>;
    list(response: ResponseContext): Promise<InlineResponse200>;
    list_2(response: ResponseContext): Promise<InlineResponse2001>;
    poll(response: ResponseContext): Promise<Transaction>;
    retrieve(response: ResponseContext): Promise<Transaction>;
    retrieve_3(response: ResponseContext): Promise<Price>;
}
