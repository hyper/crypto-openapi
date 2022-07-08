import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListLogsResponse } from '../models/ListLogsResponse';
import { Log } from '../models/Log';
export declare class LogsApiRequestFactory extends BaseAPIRequestFactory {
    list(limit?: number, page?: number, sort?: any, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class LogsApiResponseProcessor {
    list(response: ResponseContext): Promise<ListLogsResponse>;
    retrieve(response: ResponseContext): Promise<Log>;
}
