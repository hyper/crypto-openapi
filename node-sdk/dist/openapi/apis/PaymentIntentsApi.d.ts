import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IPaymentIntent } from '../models/IPaymentIntent';
import { PaymentIntentCreateRequest } from '../models/PaymentIntentCreateRequest';
import { PaymentIntentListResponse } from '../models/PaymentIntentListResponse';
import { PaymentIntentUpdateRequest } from '../models/PaymentIntentUpdateRequest';
export declare class PaymentIntentsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, payment_intent_create_request?: PaymentIntentCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, payment_intent_create_request?: PaymentIntentCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, status?: string, customer?: string, _options?: Configuration): Promise<RequestContext>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, status?: string, customer?: string, _options?: Configuration): Promise<RequestContext>;
    poll(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    poll_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    sendReceipt(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    sendReceipt_6(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, payment_intent_update_request?: PaymentIntentUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    update_7(id: string, pluto_account?: string, payment_intent_update_request?: PaymentIntentUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class PaymentIntentsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<IPaymentIntent>;
    _delete_1(response: ResponseContext): Promise<IPaymentIntent>;
    create(response: ResponseContext): Promise<IPaymentIntent>;
    create_2(response: ResponseContext): Promise<IPaymentIntent>;
    list(response: ResponseContext): Promise<PaymentIntentListResponse>;
    list_3(response: ResponseContext): Promise<PaymentIntentListResponse>;
    poll(response: ResponseContext): Promise<IPaymentIntent>;
    poll_4(response: ResponseContext): Promise<IPaymentIntent>;
    retrieve(response: ResponseContext): Promise<IPaymentIntent>;
    retrieve_5(response: ResponseContext): Promise<IPaymentIntent>;
    sendReceipt(response: ResponseContext): Promise<IPaymentIntent>;
    sendReceipt_6(response: ResponseContext): Promise<IPaymentIntent>;
    update(response: ResponseContext): Promise<IPaymentIntent>;
    update_7(response: ResponseContext): Promise<IPaymentIntent>;
}
