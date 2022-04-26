import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Fee } from '../models/Fee';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineResponse2001 } from '../models/InlineResponse2001';
export declare class FeesApiRequestFactory extends BaseAPIRequestFactory {
    _delete(feeId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    create(prismAccount?: string, inlineObject1?: InlineObject1, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(feeId: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class FeesApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Fee>;
    list(response: ResponseContext): Promise<InlineResponse2001>;
    retrieve(response: ResponseContext): Promise<Fee>;
}
