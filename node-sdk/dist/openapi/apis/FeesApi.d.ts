import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateFeeBody } from '../models/CreateFeeBody';
import { Fee } from '../models/Fee';
import { ListFeesResponse } from '../models/ListFeesResponse';
export declare class FeesApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, create_fee_body?: CreateFeeBody, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class FeesApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Fee>;
    list(response: ResponseContext): Promise<ListFeesResponse>;
    retrieve(response: ResponseContext): Promise<Fee>;
}
