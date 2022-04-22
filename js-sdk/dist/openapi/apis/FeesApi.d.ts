import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
export declare class FeesApiRequestFactory extends BaseAPIRequestFactory {
    _delete(feeId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    create(prismAccount?: string, inlineObject1?: InlineObject1, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(feeId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class FeesApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<InlineResponse2004>;
    list(response: ResponseContext): Promise<InlineResponse2003>;
    retrieve(response: ResponseContext): Promise<InlineResponse2005>;
}
