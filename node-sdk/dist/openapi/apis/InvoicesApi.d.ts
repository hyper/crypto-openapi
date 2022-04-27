import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { Invoice } from '../models/Invoice';
import { InvoiceData } from '../models/InvoiceData';
export declare class InvoicesApiRequestFactory extends BaseAPIRequestFactory {
    create(prismAccount?: string, invoiceData?: InvoiceData, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    poll(id: string, prismAccount?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class InvoicesApiResponseProcessor {
    create(response: ResponseContext): Promise<Invoice>;
    list(response: ResponseContext): Promise<InlineResponse2002>;
    poll(response: ResponseContext): Promise<void>;
    retrieve(response: ResponseContext): Promise<Invoice>;
    update(response: ResponseContext): Promise<Invoice>;
}
