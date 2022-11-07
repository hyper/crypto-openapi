import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ILog } from '../models/ILog';
import { LogListResponse } from '../models/LogListResponse';
export declare class LogsApiRequestFactory extends BaseAPIRequestFactory {
    list(pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    list_1(pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_2(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class LogsApiResponseProcessor {
    list(response: ResponseContext): Promise<LogListResponse | void>;
    list_1(response: ResponseContext): Promise<LogListResponse | void>;
    retrieve(response: ResponseContext): Promise<void | ILog>;
    retrieve_2(response: ResponseContext): Promise<void | ILog>;
}
