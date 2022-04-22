import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineResponse20010 } from '../models/InlineResponse20010';
import { InlineResponse2009 } from '../models/InlineResponse2009';
export declare class LogsApiRequestFactory extends BaseAPIRequestFactory {
    list(limit?: number, page?: number, sort?: any, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(logId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class LogsApiResponseProcessor {
    list(response: ResponseContext): Promise<InlineResponse2009>;
    retrieve(response: ResponseContext): Promise<InlineResponse20010>;
}
