import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { Wallet } from '../models/Wallet';
import { WalletData } from '../models/WalletData';
export declare class WalletsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prismAccount?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    create(prismAccount?: string, walletData?: WalletData, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class WalletsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Wallet>;
    list(response: ResponseContext): Promise<InlineResponse2007>;
    retrieve(response: ResponseContext): Promise<Wallet>;
    update(response: ResponseContext): Promise<Wallet>;
}
