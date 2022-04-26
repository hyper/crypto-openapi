import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { Wallet } from '../models/Wallet';
export declare class WalletsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(walletId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    create(prismAccount?: string, inlineObject4?: InlineObject4, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(walletId: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    update(walletId: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class WalletsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Wallet>;
    list(response: ResponseContext): Promise<InlineResponse2006>;
    retrieve(response: ResponseContext): Promise<Wallet>;
    update(response: ResponseContext): Promise<Wallet>;
}
