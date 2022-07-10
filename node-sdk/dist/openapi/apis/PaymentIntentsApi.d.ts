import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListPaymentIntentsResponse } from '../models/ListPaymentIntentsResponse';
import { PaymentIntent } from '../models/PaymentIntent';
import { UpdatePaymentIntentBody } from '../models/UpdatePaymentIntentBody';
export declare class PaymentIntentsApiRequestFactory extends BaseAPIRequestFactory {
    cancel(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, payment_intent?: PaymentIntent, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, expand?: string, limit?: number, page?: number, sort?: any, status?: 'processing' | 'succeeded' | 'failed' | 'canceled', customer?: string, _options?: Configuration): Promise<RequestContext>;
    poll(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, update_payment_intent_body?: UpdatePaymentIntentBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class PaymentIntentsApiResponseProcessor {
    cancel(response: ResponseContext): Promise<PaymentIntent>;
    create(response: ResponseContext): Promise<PaymentIntent>;
    list(response: ResponseContext): Promise<ListPaymentIntentsResponse>;
    poll(response: ResponseContext): Promise<PaymentIntent>;
    retrieve(response: ResponseContext): Promise<PaymentIntent>;
    update(response: ResponseContext): Promise<PaymentIntent>;
}
