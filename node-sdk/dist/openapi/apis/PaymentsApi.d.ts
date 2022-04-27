import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListPaymentsResponse } from '../models/ListPaymentsResponse';
import { Payment } from '../models/Payment';
export declare class PaymentsApiRequestFactory extends BaseAPIRequestFactory {
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class PaymentsApiResponseProcessor {
    list(response: ResponseContext): Promise<ListPaymentsResponse>;
    retrieve(response: ResponseContext): Promise<Payment>;
}
