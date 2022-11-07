import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { AccountConnectRequest } from '../models/AccountConnectRequest';
import { AccountCreateRequest } from '../models/AccountCreateRequest';
import { AccountDashboardAccessRequest } from '../models/AccountDashboardAccessRequest';
import { AccountListResponse } from '../models/AccountListResponse';
import { AccountUpdateRequest } from '../models/AccountUpdateRequest';
import { IAccount } from '../models/IAccount';
export declare class AccountsApiRequestFactory extends BaseAPIRequestFactory {
    connect(id: string, pluto_account?: string, account_connect_request?: AccountConnectRequest, _options?: Configuration): Promise<RequestContext>;
    connect_1(id: string, pluto_account?: string, account_connect_request?: AccountConnectRequest, _options?: Configuration): Promise<RequestContext>;
    create(pluto_account?: string, account_create_request?: AccountCreateRequest, _options?: Configuration): Promise<RequestContext>;
    create_2(pluto_account?: string, account_create_request?: AccountCreateRequest, _options?: Configuration): Promise<RequestContext>;
    dashboardAccess(id: string, pluto_account?: string, expand?: string, account_dashboard_access_request?: AccountDashboardAccessRequest, _options?: Configuration): Promise<RequestContext>;
    dashboardAccess_3(id: string, pluto_account?: string, expand?: string, account_dashboard_access_request?: AccountDashboardAccessRequest, _options?: Configuration): Promise<RequestContext>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    list_4(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<RequestContext>;
    patch(id: string, pluto_account?: string, account_update_request?: AccountUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    patch_5(id: string, pluto_account?: string, account_update_request?: AccountUpdateRequest, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve_6(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class AccountsApiResponseProcessor {
    connect(response: ResponseContext): Promise<void | IAccount>;
    connect_1(response: ResponseContext): Promise<void | IAccount>;
    create(response: ResponseContext): Promise<void | IAccount>;
    create_2(response: ResponseContext): Promise<void | IAccount>;
    dashboardAccess(response: ResponseContext): Promise<void | IAccount>;
    dashboardAccess_3(response: ResponseContext): Promise<void | IAccount>;
    list(response: ResponseContext): Promise<AccountListResponse | void>;
    list_4(response: ResponseContext): Promise<AccountListResponse | void>;
    patch(response: ResponseContext): Promise<void | IAccount>;
    patch_5(response: ResponseContext): Promise<void | IAccount>;
    retrieve(response: ResponseContext): Promise<void | IAccount>;
    retrieve_6(response: ResponseContext): Promise<void | IAccount>;
}
