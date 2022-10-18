import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ITransfer } from '../models/ITransfer';
import { TransferCreateRequest } from '../models/TransferCreateRequest';
import { TransferListResponse } from '../models/TransferListResponse';
export declare class TransfersApiRequestFactory extends BaseAPIRequestFactory {
    create(pluto_account?: string, transfer_create_request?: TransferCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_1(pluto_account?: string, transfer_create_request?: TransferCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class TransfersApiResponseProcessor {
    create(response: ResponseContext): Promise<ITransfer>;
    create_1(response: ResponseContext): Promise<ITransfer>;
    list(response: ResponseContext): Promise<TransferListResponse>;
    list_2(response: ResponseContext): Promise<TransferListResponse>;
    retrieve(response: ResponseContext): Promise<ITransfer>;
    retrieve_3(response: ResponseContext): Promise<ITransfer>;
}
