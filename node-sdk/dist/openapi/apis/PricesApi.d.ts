import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListPricesResponse } from '../models/ListPricesResponse';
import { Price } from '../models/Price';
import { UpdatePriceBody } from '../models/UpdatePriceBody';
export declare class PricesApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(prism_account?: string, price?: Price, _options?: Configuration): Promise<RequestContext>;
    list(prism_account?: string, expand?: string, limit?: number, page?: number, sort?: any, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, update_price_body?: UpdatePriceBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class PricesApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Price>;
    list(response: ResponseContext): Promise<ListPricesResponse>;
    retrieve(response: ResponseContext): Promise<Price>;
    update(response: ResponseContext): Promise<Price>;
}
