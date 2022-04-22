import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineResponse20013 } from '../models/InlineResponse20013';
import { InlineResponse20014 } from '../models/InlineResponse20014';
import { InlineResponse20015 } from '../models/InlineResponse20015';
import { InlineResponse20016 } from '../models/InlineResponse20016';
export declare class ProductsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(productId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    create(prismAccount?: string, inlineObject3?: InlineObject3, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(productId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    update(productId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProductsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<InlineResponse20014>;
    list(response: ResponseContext): Promise<InlineResponse20013>;
    retrieve(response: ResponseContext): Promise<InlineResponse20015>;
    update(response: ResponseContext): Promise<InlineResponse20016>;
}
