import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateTransferBody } from '../models/CreateTransferBody';
import { ListTransfersResponse } from '../models/ListTransfersResponse';
import { Transfer } from '../models/Transfer';
export declare class TransfersApiRequestFactory extends BaseAPIRequestFactory {
    create(prism_account?: string, create_transfer_body?: CreateTransferBody, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class TransfersApiResponseProcessor {
    create(response: ResponseContext): Promise<Transfer>;
    list(response: ResponseContext): Promise<ListTransfersResponse>;
    retrieve(response: ResponseContext): Promise<Transfer>;
}
