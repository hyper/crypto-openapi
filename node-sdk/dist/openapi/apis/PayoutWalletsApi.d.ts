import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Data } from '../models/Data';
import { PayoutWallet } from '../models/PayoutWallet';
import { PayoutWalletData } from '../models/PayoutWalletData';
export declare class PayoutWalletsApiRequestFactory extends BaseAPIRequestFactory {
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<RequestContext>;
    create(prism_account?: string, payout_wallet_data?: PayoutWalletData, _options?: Configuration): Promise<RequestContext>;
    list(prism_account?: string, limit?: number, page?: number, sort?: any, expand?: string, data?: Data, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, prism_account?: string, body?: any, _options?: Configuration): Promise<RequestContext>;
}
export declare class PayoutWalletsApiResponseProcessor {
    _delete(response: ResponseContext): Promise<void>;
    create(response: ResponseContext): Promise<PayoutWallet>;
    list(response: ResponseContext): Promise<void>;
    retrieve(response: ResponseContext): Promise<PayoutWallet>;
    update(response: ResponseContext): Promise<PayoutWallet>;
}
