import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { Invoice } from '../models/Invoice';
export declare class InvoicesApiRequestFactory extends BaseAPIRequestFactory {
  create(
    prismAccount?: string,
    inlineObject2?: InlineObject2,
    _options?: Configuration
  ): Promise<RequestContext>;
  list(
    limit?: number,
    page?: number,
    sort?: any,
    expand?: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext>;
  retrieve(
    invoiceId: string,
    expand?: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext>;
  update(
    invoiceId: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext>;
}
export declare class InvoicesApiResponseProcessor {
  create(response: ResponseContext): Promise<Invoice>;
  list(response: ResponseContext): Promise<InlineResponse2002>;
  retrieve(response: ResponseContext): Promise<Invoice>;
  update(response: ResponseContext): Promise<Invoice>;
}
