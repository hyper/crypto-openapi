import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListTransfersResponse } from '../models/ListTransfersResponse';
import { Transfer } from '../models/Transfer';
import { TransferData } from '../models/TransferData';
export declare class TransfersApiRequestFactory extends BaseAPIRequestFactory {
    create(prism_account?: string, transfer_data?: TransferData, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class TransfersApiResponseProcessor {
    create(response: ResponseContext): Promise<void>;
    list(response: ResponseContext): Promise<ListTransfersResponse>;
    retrieve(response: ResponseContext): Promise<Transfer>;
}
