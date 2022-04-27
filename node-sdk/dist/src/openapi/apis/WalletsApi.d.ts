import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListWalletsResponse } from '../models/ListWalletsResponse';
import { Wallet } from '../models/Wallet';
import { WalletData } from '../models/WalletData';
export declare class WalletsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    create(prism_account?: string, wallet_data?: WalletData, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class WalletsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Wallet>;
    list(response: ResponseContext): Promise<ListWalletsResponse>;
    retrieve(response: ResponseContext): Promise<Wallet>;
    update(response: ResponseContext): Promise<Wallet>;
}
