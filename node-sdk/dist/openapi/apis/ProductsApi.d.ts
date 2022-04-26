import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { Product } from '../models/Product';
export declare class ProductsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(productId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    create(prismAccount?: string, inlineObject3?: InlineObject3, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(productId: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    update(productId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProductsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Product>;
    list(response: ResponseContext): Promise<InlineResponse2005>;
    retrieve(response: ResponseContext): Promise<Product>;
    update(response: ResponseContext): Promise<Product>;
}
