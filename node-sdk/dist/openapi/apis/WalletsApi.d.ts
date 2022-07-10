import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreateWalletBody } from '../models/CreateWalletBody';
import { ListWalletsResponse } from '../models/ListWalletsResponse';
import { UpdateWalletBody } from '../models/UpdateWalletBody';
import { Wallet } from '../models/Wallet';
export declare class WalletsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, create_wallet_body?: CreateWalletBody, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, update_wallet_body?: UpdateWalletBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class WalletsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<Wallet>;
    list(response: ResponseContext): Promise<ListWalletsResponse>;
    retrieve(response: ResponseContext): Promise<Wallet>;
    update(response: ResponseContext): Promise<Wallet>;
}
