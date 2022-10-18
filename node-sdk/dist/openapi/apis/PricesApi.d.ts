import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IPrice } from '../models/IPrice';
import { PriceCreateRequest } from '../models/PriceCreateRequest';
import { PriceListResponse } from '../models/PriceListResponse';
import { PriceUpdateRequest } from '../models/PriceUpdateRequest';
export declare class PricesApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, price_create_request?: PriceCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, price_create_request?: PriceCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, price_update_request?: PriceUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    update_5(id: string, pluto_account?: string, price_update_request?: PriceUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class PricesApiResponseProcessor {
    _delete(response: ResponseContext): Promise<IPrice>;
    _delete_1(response: ResponseContext): Promise<IPrice>;
    create(response: ResponseContext): Promise<IPrice>;
    create_2(response: ResponseContext): Promise<IPrice>;
    list(response: ResponseContext): Promise<PriceListResponse>;
    list_3(response: ResponseContext): Promise<PriceListResponse>;
    retrieve(response: ResponseContext): Promise<IPrice>;
    retrieve_4(response: ResponseContext): Promise<IPrice>;
    update(response: ResponseContext): Promise<IPrice>;
    update_5(response: ResponseContext): Promise<IPrice>;
}
