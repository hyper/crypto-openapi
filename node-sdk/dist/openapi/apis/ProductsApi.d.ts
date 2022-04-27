import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { Product } from '../models/Product';
import { ProductData } from '../models/ProductData';
export declare class ProductsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    create(prismAccount?: string, productData?: ProductData, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProductsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Product>;
    list(response: ResponseContext): Promise<ListProductsResponse>;
    retrieve(response: ResponseContext): Promise<Product>;
    update(response: ResponseContext): Promise<Product>;
}
