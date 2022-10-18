import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CheckoutCreateRequest } from '../models/CheckoutCreateRequest';
import { CheckoutListResponse } from '../models/CheckoutListResponse';
import { ICheckout } from '../models/ICheckout';
export declare class CheckoutsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, checkout_create_request?: CheckoutCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, checkout_create_request?: CheckoutCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class CheckoutsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<ICheckout>;
    _delete_1(response: ResponseContext): Promise<ICheckout>;
    create(response: ResponseContext): Promise<ICheckout>;
    create_2(response: ResponseContext): Promise<ICheckout>;
    list(response: ResponseContext): Promise<CheckoutListResponse>;
    list_3(response: ResponseContext): Promise<CheckoutListResponse>;
    retrieve(response: ResponseContext): Promise<ICheckout>;
    retrieve_4(response: ResponseContext): Promise<ICheckout>;
}
