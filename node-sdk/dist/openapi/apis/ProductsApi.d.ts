import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IProduct } from '../models/IProduct';
import { ProductCreateRequest } from '../models/ProductCreateRequest';
import { ProductListResponse } from '../models/ProductListResponse';
import { ProductUpdateRequest } from '../models/ProductUpdateRequest';
export declare class ProductsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, product_create_request?: ProductCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, product_create_request?: ProductCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, product_update_request?: ProductUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    update_5(id: string, pluto_account?: string, product_update_request?: ProductUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class ProductsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<IProduct>;
    _delete_1(response: ResponseContext): Promise<IProduct>;
    create(response: ResponseContext): Promise<IProduct>;
    create_2(response: ResponseContext): Promise<IProduct>;
    list(response: ResponseContext): Promise<ProductListResponse>;
    list_3(response: ResponseContext): Promise<ProductListResponse>;
    retrieve(response: ResponseContext): Promise<IProduct>;
    retrieve_4(response: ResponseContext): Promise<IProduct>;
    update(response: ResponseContext): Promise<IProduct>;
    update_5(response: ResponseContext): Promise<IProduct>;
}
