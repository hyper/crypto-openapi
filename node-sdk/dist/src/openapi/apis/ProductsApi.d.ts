import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { Product } from '../models/Product';
import { ProductData } from '../models/ProductData';
export declare class ProductsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(prism_account?: string, product_data?: ProductData, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProductsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Product>;
    list(response: ResponseContext): Promise<ListProductsResponse>;
    retrieve(response: ResponseContext): Promise<Product>;
    update(response: ResponseContext): Promise<Product>;
}
