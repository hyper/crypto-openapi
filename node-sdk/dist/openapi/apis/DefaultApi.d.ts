import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineObject6 } from '../models/InlineObject6';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { PayoutWallet } from '../models/PayoutWallet';
import { Transfer } from '../models/Transfer';
export declare class DefaultApiRequestFactory extends BaseAPIRequestFactory {
    getInvoicesInvoiceIdPoll(id: string, prismAccount?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    getTransfers(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    getTransfersTransferId(id: string, prismAccount?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    postTransfersId(id: string, prismAccount?: string, inlineObject6?: InlineObject6, _options?: Configuration): Promise<RequestContext>;
    wallets(prismAccount?: string, limit?: number, page?: number, sort?: any, expand?: string, inlineObject3?: InlineObject3, _options?: Configuration): Promise<RequestContext>;
    walletsId(id: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    walletsId_1(id: string, prismAccount?: string, _options?: Configuration): Promise<RequestContext>;
    walletsPayoutWalletId(id: string, prismAccount?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    wallets_2(prismAccount?: string, inlineObject4?: InlineObject4, _options?: Configuration): Promise<RequestContext>;
}
export declare class DefaultApiResponseProcessor {
    getInvoicesInvoiceIdPoll(response: ResponseContext): Promise<void>;
    getTransfers(response: ResponseContext): Promise<InlineResponse2006>;
    getTransfersTransferId(response: ResponseContext): Promise<Transfer>;
    postTransfersId(response: ResponseContext): Promise<void>;
    wallets(response: ResponseContext): Promise<void>;
    walletsId(response: ResponseContext): Promise<void>;
    walletsId_1(response: ResponseContext): Promise<PayoutWallet>;
    walletsPayoutWalletId(response: ResponseContext): Promise<PayoutWallet>;
    wallets_2(response: ResponseContext): Promise<PayoutWallet>;
}
