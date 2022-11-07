import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IPaymentLink } from '../models/IPaymentLink';
import { PaymentLinkCreateRequest } from '../models/PaymentLinkCreateRequest';
import { PaymentLinkListResponse } from '../models/PaymentLinkListResponse';
import { PaymentLinkUpdateRequest } from '../models/PaymentLinkUpdateRequest';
export declare class PaymentLinksApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, payment_link_create_request?: PaymentLinkCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, payment_link_create_request?: PaymentLinkCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, payment_link_update_request?: PaymentLinkUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    update_5(id: string, pluto_account?: string, payment_link_update_request?: PaymentLinkUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class PaymentLinksApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void | IPaymentLink>;
    _delete_1(response: ResponseContext): Promise<void | IPaymentLink>;
    create(response: ResponseContext): Promise<void | IPaymentLink>;
    create_2(response: ResponseContext): Promise<void | IPaymentLink>;
    list(response: ResponseContext): Promise<void | PaymentLinkListResponse>;
    list_3(response: ResponseContext): Promise<void | PaymentLinkListResponse>;
    retrieve(response: ResponseContext): Promise<void | IPaymentLink>;
    retrieve_4(response: ResponseContext): Promise<void | IPaymentLink>;
    update(response: ResponseContext): Promise<void | IPaymentLink>;
    update_5(response: ResponseContext): Promise<void | IPaymentLink>;
}
