import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IInvoice } from '../models/IInvoice';
import { IPaymentIntent } from '../models/IPaymentIntent';
import { InvoiceCreateRequest } from '../models/InvoiceCreateRequest';
import { InvoiceListResponse } from '../models/InvoiceListResponse';
import { InvoicePayRequest } from '../models/InvoicePayRequest';
import { InvoiceUpdateRequest } from '../models/InvoiceUpdateRequest';
export declare class InvoicesApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    pay(id: string, pluto_account?: string, invoice_pay_request?: InvoicePayRequest, _options?: Configuration): Promise<RequestContext>;
    pay_4(id: string, pluto_account?: string, invoice_pay_request?: InvoicePayRequest, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    update_6(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class InvoicesApiResponseProcessor {
    _delete(response: ResponseContext): Promise<IInvoice | void>;
    _delete_1(response: ResponseContext): Promise<IInvoice | void>;
    create(response: ResponseContext): Promise<IInvoice | void>;
    create_2(response: ResponseContext): Promise<IInvoice | void>;
    list(response: ResponseContext): Promise<void | InvoiceListResponse>;
    list_3(response: ResponseContext): Promise<void | InvoiceListResponse>;
    pay(response: ResponseContext): Promise<void | IPaymentIntent>;
    pay_4(response: ResponseContext): Promise<void | IPaymentIntent>;
    retrieve(response: ResponseContext): Promise<IInvoice | void>;
    retrieve_5(response: ResponseContext): Promise<IInvoice | void>;
    update(response: ResponseContext): Promise<IInvoice | void>;
    update_6(response: ResponseContext): Promise<IInvoice | void>;
}
