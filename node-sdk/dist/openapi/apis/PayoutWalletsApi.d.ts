import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IPayoutWallet } from '../models/IPayoutWallet';
import { PayoutWalletCreateRequest } from '../models/PayoutWalletCreateRequest';
import { PayoutWalletListResponse } from '../models/PayoutWalletListResponse';
import { PayoutWalletUpdateRequest } from '../models/PayoutWalletUpdateRequest';
export declare class PayoutWalletsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, payout_wallet_create_request?: PayoutWalletCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, payout_wallet_create_request?: PayoutWalletCreateRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, payout_wallet_update_request?: PayoutWalletUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    update_5(id: string, pluto_account?: string, payout_wallet_update_request?: PayoutWalletUpdateRequest, _options?: Configuration): Promise<RequestContext>;
}
export declare class PayoutWalletsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void | IPayoutWallet>;
    _delete_1(response: ResponseContext): Promise<void | IPayoutWallet>;
    create(response: ResponseContext): Promise<void | IPayoutWallet>;
    create_2(response: ResponseContext): Promise<void | IPayoutWallet>;
    list(response: ResponseContext): Promise<void | PayoutWalletListResponse>;
    list_3(response: ResponseContext): Promise<void | PayoutWalletListResponse>;
    retrieve(response: ResponseContext): Promise<void | IPayoutWallet>;
    retrieve_4(response: ResponseContext): Promise<void | IPayoutWallet>;
    update(response: ResponseContext): Promise<IPayoutWallet>;
    update_5(response: ResponseContext): Promise<IPayoutWallet>;
}
