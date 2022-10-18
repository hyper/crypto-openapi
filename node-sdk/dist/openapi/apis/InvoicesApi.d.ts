import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IInvoice } from '../models/IInvoice';
import { IPaymentIntent } from '../models/IPaymentIntent';
import { InvoiceCreateRequest } from '../models/InvoiceCreateRequest';
import { InvoiceListResponse } from '../models/InvoiceListResponse';
import { InvoiceUpdateRequest } from '../models/InvoiceUpdateRequest';
export declare class InvoicesApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    pay(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    pay_4(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    update_6(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class InvoicesApiResponseProcessor {
    _delete(response: ResponseContext): Promise<IInvoice>;
    _delete_1(response: ResponseContext): Promise<IInvoice>;
    create(response: ResponseContext): Promise<IInvoice>;
    create_2(response: ResponseContext): Promise<IInvoice>;
    list(response: ResponseContext): Promise<InvoiceListResponse>;
    list_3(response: ResponseContext): Promise<InvoiceListResponse>;
    pay(response: ResponseContext): Promise<IPaymentIntent>;
    pay_4(response: ResponseContext): Promise<IPaymentIntent>;
    retrieve(response: ResponseContext): Promise<IInvoice>;
    retrieve_5(response: ResponseContext): Promise<IInvoice>;
    update(response: ResponseContext): Promise<IInvoice>;
    update_6(response: ResponseContext): Promise<IInvoice>;
}
