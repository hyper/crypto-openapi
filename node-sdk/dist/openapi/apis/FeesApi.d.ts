import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Fee } from '../models/Fee';
import { FeeData } from '../models/FeeData';
import { ListFeesResponse } from '../models/ListFeesResponse';
export declare class FeesApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    create(prismAccount?: string, feeData?: FeeData, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class FeesApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Fee>;
    list(response: ResponseContext): Promise<ListFeesResponse>;
    retrieve(response: ResponseContext): Promise<Fee>;
}
