import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateInvoiceBody } from '../models/CreateInvoiceBody';
import { Invoice } from '../models/Invoice';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { UpdateInvoiceBody } from '../models/UpdateInvoiceBody';
export declare class InvoicesApiRequestFactory extends BaseAPIRequestFactory {
    create(prism_account?: string, create_invoice_body?: CreateInvoiceBody, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    poll(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, update_invoice_body?: UpdateInvoiceBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class InvoicesApiResponseProcessor {
    create(response: ResponseContext): Promise<Invoice>;
    list(response: ResponseContext): Promise<ListInvoicesResponse>;
    poll(response: ResponseContext): Promise<Invoice>;
    retrieve(response: ResponseContext): Promise<Invoice>;
    update(response: ResponseContext): Promise<Invoice>;
}
