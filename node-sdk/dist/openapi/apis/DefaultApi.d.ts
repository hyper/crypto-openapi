import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { PaymentIntent } from '../models/PaymentIntent';
export declare class DefaultApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class DefaultApiResponseProcessor {
    _delete(response: ResponseContext): Promise<PaymentIntent>;
}
