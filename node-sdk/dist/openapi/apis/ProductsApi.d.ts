import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { Product } from '../models/Product';
export declare class ProductsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    create(prismAccount?: string, inlineObject5?: InlineObject5, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProductsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Product>;
    list(response: ResponseContext): Promise<InlineResponse2005>;
    retrieve(response: ResponseContext): Promise<Product>;
    update(response: ResponseContext): Promise<Product>;
}
