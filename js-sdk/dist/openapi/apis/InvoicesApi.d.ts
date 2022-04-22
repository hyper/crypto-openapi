import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { InlineResponse2008 } from '../models/InlineResponse2008';
export declare class InvoicesApiRequestFactory extends BaseAPIRequestFactory {
    create(inlineObject2?: InlineObject2, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(invoiceId: string, _options?: Configuration): Promise<RequestContext>;
    update(invoiceId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class InvoicesApiResponseProcessor {
    create(response: ResponseContext): Promise<InlineResponse2007>;
    list(response: ResponseContext): Promise<InlineResponse2006>;
    retrieve(response: ResponseContext): Promise<InlineResponse2008>;
    update(response: ResponseContext): Promise<InlineResponse2008>;
}
