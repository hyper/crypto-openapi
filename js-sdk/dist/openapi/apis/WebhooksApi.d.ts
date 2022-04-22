import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineResponse20019 } from '../models/InlineResponse20019';
import { InlineResponse20020 } from '../models/InlineResponse20020';
import { InlineResponse20021 } from '../models/InlineResponse20021';
export declare class WebhooksApiRequestFactory extends BaseAPIRequestFactory {
    _delete(webhookId: string, _options?: Configuration): Promise<RequestContext>;
    create(inlineObject5?: InlineObject5, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(webhookId: string, _options?: Configuration): Promise<RequestContext>;
    update(webhookId: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class WebhooksApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<InlineResponse20020>;
    list(response: ResponseContext): Promise<InlineResponse20019>;
    retrieve(response: ResponseContext): Promise<InlineResponse20021>;
    update(response: ResponseContext): Promise<InlineResponse20020>;
}
