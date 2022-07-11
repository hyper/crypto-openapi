import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
export declare class DefaultApiRequestFactory extends BaseAPIRequestFactory {
  pay(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class DefaultApiResponseProcessor {
  pay(response: ResponseContext): Promise<void>;
}
