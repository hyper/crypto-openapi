import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Account } from '../models/Account';
import { CreateAccountBody } from '../models/CreateAccountBody';
import { ListAccountsResponse } from '../models/ListAccountsResponse';
import { UpdateAccountBody } from '../models/UpdateAccountBody';
export declare class AccountsApiRequestFactory extends BaseAPIRequestFactory {
    create(pluto_account?: string, create_account_body?: CreateAccountBody, _options?: Configuration): Promise<RequestContext>;
    list(limit?: number, page?: number, sort?: any, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, expand?: string, pluto_account?: string, _options?: Configuration): Promise<RequestContext>;
    update(id: string, pluto_account?: string, update_account_body?: UpdateAccountBody, _options?: Configuration): Promise<RequestContext>;
}
export declare class AccountsApiResponseProcessor {
    create(response: ResponseContext): Promise<Account>;
    list(response: ResponseContext): Promise<ListAccountsResponse>;
    retrieve(response: ResponseContext): Promise<Account>;
    update(response: ResponseContext): Promise<Account>;
}
