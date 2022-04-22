import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineResponse20017 } from '../models/InlineResponse20017';
import { InlineResponse20018 } from '../models/InlineResponse20018';
export declare class WalletsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(walletId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    create(prismAccount?: string, inlineObject4?: InlineObject4, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(walletId: string, limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    update(walletId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class WalletsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<InlineResponse20018>;
    list(response: ResponseContext): Promise<InlineResponse20017>;
    retrieve(response: ResponseContext): Promise<InlineResponse20018>;
    update(response: ResponseContext): Promise<InlineResponse20018>;
}
