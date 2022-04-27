import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { Log } from '../models/Log';
export declare class LogsApiRequestFactory extends BaseAPIRequestFactory {
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class LogsApiResponseProcessor {
    list(response: ResponseContext): Promise<InlineResponse2003>;
    retrieve(response: ResponseContext): Promise<Log>;
}
