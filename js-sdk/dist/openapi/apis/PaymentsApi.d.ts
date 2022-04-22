import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineResponse20011 } from '../models/InlineResponse20011';
import { InlineResponse20012 } from '../models/InlineResponse20012';
export declare class PaymentsApiRequestFactory extends BaseAPIRequestFactory {
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(paymentId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class PaymentsApiResponseProcessor {
    list(response: ResponseContext): Promise<InlineResponse20011>;
    retrieve(response: ResponseContext): Promise<InlineResponse20012>;
}
