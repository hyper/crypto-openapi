import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateProductBody } from '../models/CreateProductBody';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { Product } from '../models/Product';
import { UpdateProductBody } from '../models/UpdateProductBody';
export declare class ProductsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, create_product_body?: CreateProductBody, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, update_product_body?: UpdateProductBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProductsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Product>;
    list(response: ResponseContext): Promise<ListProductsResponse>;
    retrieve(response: ResponseContext): Promise<Product>;
    update(response: ResponseContext): Promise<Product>;
}
