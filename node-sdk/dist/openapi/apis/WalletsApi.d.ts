import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IWallet } from '../models/IWallet';
import { WalletCreateRequest } from '../models/WalletCreateRequest';
import { WalletListResponse } from '../models/WalletListResponse';
import { WalletUpdateRequest } from '../models/WalletUpdateRequest';
export declare class WalletsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, wallet_create_request?: WalletCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, wallet_create_request?: WalletCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, wallet_update_request?: WalletUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    update_5(id: string, pluto_account?: string, wallet_update_request?: WalletUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class WalletsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<IWallet>;
    _delete_1(response: ResponseContext): Promise<IWallet>;
    create(response: ResponseContext): Promise<IWallet>;
    create_2(response: ResponseContext): Promise<IWallet>;
    list(response: ResponseContext): Promise<WalletListResponse>;
    list_3(response: ResponseContext): Promise<WalletListResponse>;
    retrieve(response: ResponseContext): Promise<IWallet>;
    retrieve_4(response: ResponseContext): Promise<IWallet>;
    update(response: ResponseContext): Promise<IWallet>;
    update_5(response: ResponseContext): Promise<IWallet>;
}
