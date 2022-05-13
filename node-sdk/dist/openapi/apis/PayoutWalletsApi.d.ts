import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CreatePayoutWalletBody } from '../models/CreatePayoutWalletBody';
import { ListPayoutWalletsResponse } from '../models/ListPayoutWalletsResponse';
import { PayoutWallet } from '../models/PayoutWallet';
export declare class PayoutWalletsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(prism_account?: string, create_payout_wallet_body?: CreatePayoutWalletBody, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, payout_wallet?: PayoutWallet, _options?: Configuration): Promise<RequestContext>;
}
export declare class PayoutWalletsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<PayoutWallet>;
    list(response: ResponseContext): Promise<ListPayoutWalletsResponse>;
    retrieve(response: ResponseContext): Promise<PayoutWallet>;
    update(response: ResponseContext): Promise<PayoutWallet>;
}
