import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { Transfer } from '../models/Transfer';
import { TransferData } from '../models/TransferData';
export declare class TransfersApiRequestFactory extends BaseAPIRequestFactory {
    create(prismAccount?: string, transferData?: TransferData, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, prismAccount?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class TransfersApiResponseProcessor {
    create(response: ResponseContext): Promise<void>;
    list(response: ResponseContext): Promise<InlineResponse2006>;
    retrieve(response: ResponseContext): Promise<Transfer>;
}
