import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Invoice } from '../models/Invoice';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { PaymentIntent } from '../models/PaymentIntent';
export declare class InvoicesApiRequestFactory extends BaseAPIRequestFactory {
    create(pluto_account?: string, invoice?: Invoice, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    pay(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, invoice?: Invoice, _options?: Configuration): Promise<RequestContext>;
}
export declare class InvoicesApiResponseProcessor {
    create(response: ResponseContext): Promise<Invoice>;
    list(response: ResponseContext): Promise<ListInvoicesResponse>;
    pay(response: ResponseContext): Promise<PaymentIntent>;
    retrieve(response: ResponseContext): Promise<Invoice>;
    update(response: ResponseContext): Promise<Invoice>;
}
