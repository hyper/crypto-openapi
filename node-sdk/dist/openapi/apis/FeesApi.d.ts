import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { FeeCreateRequest } from '../models/FeeCreateRequest';
import { FeeListResponse } from '../models/FeeListResponse';
import { IFee } from '../models/IFee';
export declare class FeesApiRequestFactory extends BaseAPIRequestFactory {
    create(pluto_account?: string, fee_create_request?: FeeCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_1(pluto_account?: string, fee_create_request?: FeeCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class FeesApiResponseProcessor {
    create(response: ResponseContext): Promise<void | IFee>;
    create_1(response: ResponseContext): Promise<void | IFee>;
    list(response: ResponseContext): Promise<void | FeeListResponse>;
    list_2(response: ResponseContext): Promise<void | FeeListResponse>;
    retrieve(response: ResponseContext): Promise<void | IFee>;
    retrieve_3(response: ResponseContext): Promise<void | IFee>;
}
