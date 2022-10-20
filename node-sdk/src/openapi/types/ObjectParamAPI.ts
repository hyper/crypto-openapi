import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccountConnectRequest } from '../models/AccountConnectRequest';
import { AccountCreateRequest } from '../models/AccountCreateRequest';
import { AccountDashboardAccessRequest } from '../models/AccountDashboardAccessRequest';
import { AccountDashboardAccessResponse } from '../models/AccountDashboardAccessResponse';
import { AccountListResponse } from '../models/AccountListResponse';
import { AccountUpdateRequest } from '../models/AccountUpdateRequest';
import { Address } from '../models/Address';
import { AfterCompletion } from '../models/AfterCompletion';
import { ApiKeyCreateRequest } from '../models/ApiKeyCreateRequest';
import { ApiKeyListResponse } from '../models/ApiKeyListResponse';
import { ApiKeyType } from '../models/ApiKeyType';
import { BasePrice } from '../models/BasePrice';
import { Chain } from '../models/Chain';
import { CheckoutCreateRequest } from '../models/CheckoutCreateRequest';
import { CheckoutListResponse } from '../models/CheckoutListResponse';
import { CheckoutStatus } from '../models/CheckoutStatus';
import { Currency } from '../models/Currency';
import { CustomAmount } from '../models/CustomAmount';
import { CustomerCreateRequest } from '../models/CustomerCreateRequest';
import { CustomerDetails } from '../models/CustomerDetails';
import { CustomerListResponse } from '../models/CustomerListResponse';
import { CustomerUpdateRequest } from '../models/CustomerUpdateRequest';
import { EventType } from '../models/EventType';
import { FeeCreateRequest } from '../models/FeeCreateRequest';
import { FeeListResponse } from '../models/FeeListResponse';
import { Headers } from '../models/Headers';
import { IAccount } from '../models/IAccount';
import { IApiKey } from '../models/IApiKey';
import { IBilling } from '../models/IBilling';
import { IBranding } from '../models/IBranding';
import { IBusinessProfile } from '../models/IBusinessProfile';
import { ICheckout } from '../models/ICheckout';
import { ICustomer } from '../models/ICustomer';
import { ICustomerBillingDetails } from '../models/ICustomerBillingDetails';
import { IFee } from '../models/IFee';
import { IIntegrations } from '../models/IIntegrations';
import { IIntegrationsFtx } from '../models/IIntegrationsFtx';
import { IInvoice } from '../models/IInvoice';
import { ILog } from '../models/ILog';
import { IPaymentIntent } from '../models/IPaymentIntent';
import { IPaymentLink } from '../models/IPaymentLink';
import { IPayments } from '../models/IPayments';
import { IPayoutWallet } from '../models/IPayoutWallet';
import { IPrice } from '../models/IPrice';
import { IProduct } from '../models/IProduct';
import { IRequest } from '../models/IRequest';
import { IResponse } from '../models/IResponse';
import { ISettings } from '../models/ISettings';
import { ISubscription } from '../models/ISubscription';
import { ITeamMember } from '../models/ITeamMember';
import { ITransfer } from '../models/ITransfer';
import { IWallet } from '../models/IWallet';
import { IWebhook } from '../models/IWebhook';
import { InvoiceCreateRequest } from '../models/InvoiceCreateRequest';
import { InvoiceListResponse } from '../models/InvoiceListResponse';
import { InvoiceStatus } from '../models/InvoiceStatus';
import { InvoiceUpdateRequest } from '../models/InvoiceUpdateRequest';
import { LineItem } from '../models/LineItem';
import { LogListResponse } from '../models/LogListResponse';
import { PaymentIntentCreateRequest } from '../models/PaymentIntentCreateRequest';
import { PaymentIntentListResponse } from '../models/PaymentIntentListResponse';
import { PaymentIntentStatus } from '../models/PaymentIntentStatus';
import { PaymentIntentUpdateRequest } from '../models/PaymentIntentUpdateRequest';
import { PaymentLinkCreateRequest } from '../models/PaymentLinkCreateRequest';
import { PaymentLinkListResponse } from '../models/PaymentLinkListResponse';
import { PaymentLinkUpdateRequest } from '../models/PaymentLinkUpdateRequest';
import { PayoutWallet } from '../models/PayoutWallet';
import { PayoutWalletCreateRequest } from '../models/PayoutWalletCreateRequest';
import { PayoutWalletListResponse } from '../models/PayoutWalletListResponse';
import { PayoutWalletUpdateRequest } from '../models/PayoutWalletUpdateRequest';
import { PriceCreateRequest } from '../models/PriceCreateRequest';
import { PriceListResponse } from '../models/PriceListResponse';
import { PriceUpdateRequest } from '../models/PriceUpdateRequest';
import { ProductCreateRequest } from '../models/ProductCreateRequest';
import { ProductListResponse } from '../models/ProductListResponse';
import { ProductUpdateRequest } from '../models/ProductUpdateRequest';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import { SubscriptionListResponse } from '../models/SubscriptionListResponse';
import { SubscriptionStatus } from '../models/SubscriptionStatus';
import { SubscriptionUpdateRequest } from '../models/SubscriptionUpdateRequest';
import { TransferCreateRequest } from '../models/TransferCreateRequest';
import { TransferListResponse } from '../models/TransferListResponse';
import { WalletCreateRequest } from '../models/WalletCreateRequest';
import { WalletListResponse } from '../models/WalletListResponse';
import { WalletUpdateRequest } from '../models/WalletUpdateRequest';
import { WebhookCreateRequest } from '../models/WebhookCreateRequest';
import { WebhookListResponse } from '../models/WebhookListResponse';
import { WebhookUpdateRequest } from '../models/WebhookUpdateRequest';

import { ObservableAccountsApi } from "./ObservableAPI";
import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";

export interface AccountsApiConnectRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApiconnect
     */
    id: string
    /**
     * 
     * @type string
     * @memberof AccountsApiconnect
     */
    pluto_account?: string
    /**
     * 
     * @type AccountConnectRequest
     * @memberof AccountsApiconnect
     */
    account_connect_request?: AccountConnectRequest
}

export interface AccountsApiConnect0Request {
    /**
     * 
     * @type string
     * @memberof AccountsApiconnect_1
     */
    id: string
    /**
     * 
     * @type string
     * @memberof AccountsApiconnect_1
     */
    pluto_account?: string
    /**
     * 
     * @type AccountConnectRequest
     * @memberof AccountsApiconnect_1
     */
    account_connect_request?: AccountConnectRequest
}

export interface AccountsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type AccountCreateRequest
     * @memberof AccountsApicreate
     */
    account_create_request?: AccountCreateRequest
}

export interface AccountsApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof AccountsApicreate_2
     */
    pluto_account?: string
    /**
     * 
     * @type AccountCreateRequest
     * @memberof AccountsApicreate_2
     */
    account_create_request?: AccountCreateRequest
}

export interface AccountsApiDashboardAccessRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApidashboardAccess
     */
    id: string
    /**
     * 
     * @type string
     * @memberof AccountsApidashboardAccess
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof AccountsApidashboardAccess
     */
    expand?: string
    /**
     * 
     * @type AccountDashboardAccessRequest
     * @memberof AccountsApidashboardAccess
     */
    account_dashboard_access_request?: AccountDashboardAccessRequest
}

export interface AccountsApiDashboardAccess0Request {
    /**
     * 
     * @type string
     * @memberof AccountsApidashboardAccess_3
     */
    id: string
    /**
     * 
     * @type string
     * @memberof AccountsApidashboardAccess_3
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof AccountsApidashboardAccess_3
     */
    expand?: string
    /**
     * 
     * @type AccountDashboardAccessRequest
     * @memberof AccountsApidashboardAccess_3
     */
    account_dashboard_access_request?: AccountDashboardAccessRequest
}

export interface AccountsApiListRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof AccountsApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof AccountsApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof AccountsApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof AccountsApilist
     */
    expand?: string
}

export interface AccountsApiList0Request {
    /**
     * 
     * @type string
     * @memberof AccountsApilist_4
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof AccountsApilist_4
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof AccountsApilist_4
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof AccountsApilist_4
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof AccountsApilist_4
     */
    expand?: string
}

export interface AccountsApiPatchRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApipatch
     */
    id: string
    /**
     * 
     * @type string
     * @memberof AccountsApipatch
     */
    pluto_account?: string
    /**
     * 
     * @type AccountUpdateRequest
     * @memberof AccountsApipatch
     */
    account_update_request?: AccountUpdateRequest
}

export interface AccountsApiPatch0Request {
    /**
     * 
     * @type string
     * @memberof AccountsApipatch_5
     */
    id: string
    /**
     * 
     * @type string
     * @memberof AccountsApipatch_5
     */
    pluto_account?: string
    /**
     * 
     * @type AccountUpdateRequest
     * @memberof AccountsApipatch_5
     */
    account_update_request?: AccountUpdateRequest
}

export interface AccountsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof AccountsApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof AccountsApiretrieve
     */
    expand?: string
}

export interface AccountsApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof AccountsApiretrieve_6
     */
    id: string
    /**
     * 
     * @type string
     * @memberof AccountsApiretrieve_6
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof AccountsApiretrieve_6
     */
    expand?: string
}

export class ObjectAccountsApi {
    private api: ObservableAccountsApi

    public constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Connect account
     * @param param the request object
     */
    public connect(param: AccountsApiConnectRequest, options?: Configuration): Promise<IAccount> {
        return this.api.connect(param.id, param.pluto_account, param.account_connect_request,  options).toPromise();
    }

    /**
     * Connect account
     * @param param the request object
     */
    public connect_1(param: AccountsApiConnect0Request, options?: Configuration): Promise<IAccount> {
        return this.api.connect_1(param.id, param.pluto_account, param.account_connect_request,  options).toPromise();
    }

    /**
     * Create account
     * @param param the request object
     */
    public create(param: AccountsApiCreateRequest = {}, options?: Configuration): Promise<IAccount> {
        return this.api.create(param.pluto_account, param.account_create_request,  options).toPromise();
    }

    /**
     * Create account
     * @param param the request object
     */
    public create_2(param: AccountsApiCreate0Request = {}, options?: Configuration): Promise<IAccount> {
        return this.api.create_2(param.pluto_account, param.account_create_request,  options).toPromise();
    }

    /**
     * Get dashboard access to account
     * @param param the request object
     */
    public dashboardAccess(param: AccountsApiDashboardAccessRequest, options?: Configuration): Promise<AccountDashboardAccessResponse> {
        return this.api.dashboardAccess(param.id, param.pluto_account, param.expand, param.account_dashboard_access_request,  options).toPromise();
    }

    /**
     * Get dashboard access to account
     * @param param the request object
     */
    public dashboardAccess_3(param: AccountsApiDashboardAccess0Request, options?: Configuration): Promise<AccountDashboardAccessResponse> {
        return this.api.dashboardAccess_3(param.id, param.pluto_account, param.expand, param.account_dashboard_access_request,  options).toPromise();
    }

    /**
     * List accounts
     * @param param the request object
     */
    public list(param: AccountsApiListRequest = {}, options?: Configuration): Promise<AccountListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * List accounts
     * @param param the request object
     */
    public list_4(param: AccountsApiList0Request = {}, options?: Configuration): Promise<AccountListResponse> {
        return this.api.list_4(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * Update account
     * @param param the request object
     */
    public patch(param: AccountsApiPatchRequest, options?: Configuration): Promise<IAccount> {
        return this.api.patch(param.id, param.pluto_account, param.account_update_request,  options).toPromise();
    }

    /**
     * Update account
     * @param param the request object
     */
    public patch_5(param: AccountsApiPatch0Request, options?: Configuration): Promise<IAccount> {
        return this.api.patch_5(param.id, param.pluto_account, param.account_update_request,  options).toPromise();
    }

    /**
     * Retrieve account
     * @param param the request object
     */
    public retrieve(param: AccountsApiRetrieveRequest, options?: Configuration): Promise<IAccount> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve account
     * @param param the request object
     */
    public retrieve_6(param: AccountsApiRetrieve0Request, options?: Configuration): Promise<IAccount> {
        return this.api.retrieve_6(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

}

import { ObservableCheckoutsApi } from "./ObservableAPI";
import { CheckoutsApiRequestFactory, CheckoutsApiResponseProcessor} from "../apis/CheckoutsApi";

export interface CheckoutsApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof CheckoutsApi_delete
     */
    id: string
    /**
     * 
     * @type string
     * @memberof CheckoutsApi_delete
     */
    pluto_account?: string
}

export interface CheckoutsApiDelete0Request {
    /**
     * 
     * @type string
     * @memberof CheckoutsApi_delete_1
     */
    id: string
    /**
     * 
     * @type string
     * @memberof CheckoutsApi_delete_1
     */
    pluto_account?: string
}

export interface CheckoutsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof CheckoutsApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type CheckoutCreateRequest
     * @memberof CheckoutsApicreate
     */
    checkout_create_request?: CheckoutCreateRequest
}

export interface CheckoutsApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof CheckoutsApicreate_2
     */
    pluto_account?: string
    /**
     * 
     * @type CheckoutCreateRequest
     * @memberof CheckoutsApicreate_2
     */
    checkout_create_request?: CheckoutCreateRequest
}

export interface CheckoutsApiListRequest {
    /**
     * 
     * @type string
     * @memberof CheckoutsApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof CheckoutsApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof CheckoutsApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof CheckoutsApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof CheckoutsApilist
     */
    expand?: string
}

export interface CheckoutsApiList0Request {
    /**
     * 
     * @type string
     * @memberof CheckoutsApilist_3
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof CheckoutsApilist_3
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof CheckoutsApilist_3
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof CheckoutsApilist_3
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof CheckoutsApilist_3
     */
    expand?: string
}

export interface CheckoutsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof CheckoutsApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof CheckoutsApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof CheckoutsApiretrieve
     */
    expand?: string
}

export interface CheckoutsApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof CheckoutsApiretrieve_4
     */
    id: string
    /**
     * 
     * @type string
     * @memberof CheckoutsApiretrieve_4
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof CheckoutsApiretrieve_4
     */
    expand?: string
}

export class ObjectCheckoutsApi {
    private api: ObservableCheckoutsApi

    public constructor(configuration: Configuration, requestFactory?: CheckoutsApiRequestFactory, responseProcessor?: CheckoutsApiResponseProcessor) {
        this.api = new ObservableCheckoutsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fail checkout
     * @param param the request object
     */
    public _delete(param: CheckoutsApiDeleteRequest, options?: Configuration): Promise<ICheckout> {
        return this.api._delete(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Fail checkout
     * @param param the request object
     */
    public _delete_1(param: CheckoutsApiDelete0Request, options?: Configuration): Promise<ICheckout> {
        return this.api._delete_1(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Create checkout
     * @param param the request object
     */
    public create(param: CheckoutsApiCreateRequest = {}, options?: Configuration): Promise<ICheckout> {
        return this.api.create(param.pluto_account, param.checkout_create_request,  options).toPromise();
    }

    /**
     * Create checkout
     * @param param the request object
     */
    public create_2(param: CheckoutsApiCreate0Request = {}, options?: Configuration): Promise<ICheckout> {
        return this.api.create_2(param.pluto_account, param.checkout_create_request,  options).toPromise();
    }

    /**
     * List checkouts
     * @param param the request object
     */
    public list(param: CheckoutsApiListRequest = {}, options?: Configuration): Promise<CheckoutListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * List checkouts
     * @param param the request object
     */
    public list_3(param: CheckoutsApiList0Request = {}, options?: Configuration): Promise<CheckoutListResponse> {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * Retrieve checkout
     * @param param the request object
     */
    public retrieve(param: CheckoutsApiRetrieveRequest, options?: Configuration): Promise<ICheckout> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve checkout
     * @param param the request object
     */
    public retrieve_4(param: CheckoutsApiRetrieve0Request, options?: Configuration): Promise<ICheckout> {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

}

import { ObservableCustomersApi } from "./ObservableAPI";
import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";

export interface CustomersApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof CustomersApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type CustomerCreateRequest
     * @memberof CustomersApicreate
     */
    customer_create_request?: CustomerCreateRequest
}

export interface CustomersApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof CustomersApicreate_1
     */
    pluto_account?: string
    /**
     * 
     * @type CustomerCreateRequest
     * @memberof CustomersApicreate_1
     */
    customer_create_request?: CustomerCreateRequest
}

export interface CustomersApiListRequest {
    /**
     * 
     * @type string
     * @memberof CustomersApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof CustomersApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof CustomersApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof CustomersApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof CustomersApilist
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof CustomersApilist
     */
    email?: string
}

export interface CustomersApiList0Request {
    /**
     * 
     * @type string
     * @memberof CustomersApilist_2
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof CustomersApilist_2
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof CustomersApilist_2
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof CustomersApilist_2
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof CustomersApilist_2
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof CustomersApilist_2
     */
    email?: string
}

export interface CustomersApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof CustomersApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof CustomersApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof CustomersApiretrieve
     */
    expand?: string
}

export interface CustomersApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof CustomersApiretrieve_3
     */
    id: string
    /**
     * 
     * @type string
     * @memberof CustomersApiretrieve_3
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof CustomersApiretrieve_3
     */
    expand?: string
}

export interface CustomersApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof CustomersApiupdate
     */
    id: string
    /**
     * 
     * @type string
     * @memberof CustomersApiupdate
     */
    pluto_account?: string
    /**
     * 
     * @type CustomerUpdateRequest
     * @memberof CustomersApiupdate
     */
    customer_update_request?: CustomerUpdateRequest
}

export interface CustomersApiUpdate0Request {
    /**
     * 
     * @type string
     * @memberof CustomersApiupdate_4
     */
    id: string
    /**
     * 
     * @type string
     * @memberof CustomersApiupdate_4
     */
    pluto_account?: string
    /**
     * 
     * @type CustomerUpdateRequest
     * @memberof CustomersApiupdate_4
     */
    customer_update_request?: CustomerUpdateRequest
}

export class ObjectCustomersApi {
    private api: ObservableCustomersApi

    public constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor) {
        this.api = new ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create customer
     * @param param the request object
     */
    public create(param: CustomersApiCreateRequest = {}, options?: Configuration): Promise<ICustomer> {
        return this.api.create(param.pluto_account, param.customer_create_request,  options).toPromise();
    }

    /**
     * Create customer
     * @param param the request object
     */
    public create_1(param: CustomersApiCreate0Request = {}, options?: Configuration): Promise<ICustomer> {
        return this.api.create_1(param.pluto_account, param.customer_create_request,  options).toPromise();
    }

    /**
     * List customers
     * @param param the request object
     */
    public list(param: CustomersApiListRequest = {}, options?: Configuration): Promise<CustomerListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, param.email,  options).toPromise();
    }

    /**
     * List customers
     * @param param the request object
     */
    public list_2(param: CustomersApiList0Request = {}, options?: Configuration): Promise<CustomerListResponse> {
        return this.api.list_2(param.pluto_account, param.limit, param.page, param.sort, param.expand, param.email,  options).toPromise();
    }

    /**
     * Retrieve customer
     * @param param the request object
     */
    public retrieve(param: CustomersApiRetrieveRequest, options?: Configuration): Promise<ICustomer> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve customer
     * @param param the request object
     */
    public retrieve_3(param: CustomersApiRetrieve0Request, options?: Configuration): Promise<ICustomer> {
        return this.api.retrieve_3(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Update customer
     * @param param the request object
     */
    public update(param: CustomersApiUpdateRequest, options?: Configuration): Promise<ICustomer> {
        return this.api.update(param.id, param.pluto_account, param.customer_update_request,  options).toPromise();
    }

    /**
     * Update customer
     * @param param the request object
     */
    public update_4(param: CustomersApiUpdate0Request, options?: Configuration): Promise<ICustomer> {
        return this.api.update_4(param.id, param.pluto_account, param.customer_update_request,  options).toPromise();
    }

}

import { ObservableFeesApi } from "./ObservableAPI";
import { FeesApiRequestFactory, FeesApiResponseProcessor} from "../apis/FeesApi";

export interface FeesApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof FeesApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type FeeCreateRequest
     * @memberof FeesApicreate
     */
    fee_create_request?: FeeCreateRequest
}

export interface FeesApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof FeesApicreate_1
     */
    pluto_account?: string
    /**
     * 
     * @type FeeCreateRequest
     * @memberof FeesApicreate_1
     */
    fee_create_request?: FeeCreateRequest
}

export interface FeesApiListRequest {
    /**
     * 
     * @type string
     * @memberof FeesApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof FeesApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof FeesApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof FeesApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof FeesApilist
     */
    expand?: string
}

export interface FeesApiList0Request {
    /**
     * 
     * @type string
     * @memberof FeesApilist_2
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof FeesApilist_2
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof FeesApilist_2
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof FeesApilist_2
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof FeesApilist_2
     */
    expand?: string
}

export interface FeesApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof FeesApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof FeesApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof FeesApiretrieve
     */
    expand?: string
}

export interface FeesApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof FeesApiretrieve_3
     */
    id: string
    /**
     * 
     * @type string
     * @memberof FeesApiretrieve_3
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof FeesApiretrieve_3
     */
    expand?: string
}

export class ObjectFeesApi {
    private api: ObservableFeesApi

    public constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor) {
        this.api = new ObservableFeesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create fee
     * @param param the request object
     */
    public create(param: FeesApiCreateRequest = {}, options?: Configuration): Promise<IFee> {
        return this.api.create(param.pluto_account, param.fee_create_request,  options).toPromise();
    }

    /**
     * Create fee
     * @param param the request object
     */
    public create_1(param: FeesApiCreate0Request = {}, options?: Configuration): Promise<IFee> {
        return this.api.create_1(param.pluto_account, param.fee_create_request,  options).toPromise();
    }

    /**
     * List fees
     * @param param the request object
     */
    public list(param: FeesApiListRequest = {}, options?: Configuration): Promise<FeeListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * List fees
     * @param param the request object
     */
    public list_2(param: FeesApiList0Request = {}, options?: Configuration): Promise<FeeListResponse> {
        return this.api.list_2(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * Retrieve fee
     * @param param the request object
     */
    public retrieve(param: FeesApiRetrieveRequest, options?: Configuration): Promise<IFee> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve fee
     * @param param the request object
     */
    public retrieve_3(param: FeesApiRetrieve0Request, options?: Configuration): Promise<IFee> {
        return this.api.retrieve_3(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

}

import { ObservableInvoicesApi } from "./ObservableAPI";
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";

export interface InvoicesApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApi_delete
     */
    id: string
    /**
     * 
     * @type string
     * @memberof InvoicesApi_delete
     */
    pluto_account?: string
}

export interface InvoicesApiDelete0Request {
    /**
     * 
     * @type string
     * @memberof InvoicesApi_delete_1
     */
    id: string
    /**
     * 
     * @type string
     * @memberof InvoicesApi_delete_1
     */
    pluto_account?: string
}

export interface InvoicesApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type InvoiceCreateRequest
     * @memberof InvoicesApicreate
     */
    invoice_create_request?: InvoiceCreateRequest
}

export interface InvoicesApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof InvoicesApicreate_2
     */
    pluto_account?: string
    /**
     * 
     * @type InvoiceCreateRequest
     * @memberof InvoicesApicreate_2
     */
    invoice_create_request?: InvoiceCreateRequest
}

export interface InvoicesApiListRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof InvoicesApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof InvoicesApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof InvoicesApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof InvoicesApilist
     */
    expand?: string
}

export interface InvoicesApiList0Request {
    /**
     * 
     * @type string
     * @memberof InvoicesApilist_3
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof InvoicesApilist_3
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof InvoicesApilist_3
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof InvoicesApilist_3
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof InvoicesApilist_3
     */
    expand?: string
}

export interface InvoicesApiPayRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApipay
     */
    id: string
    /**
     * 
     * @type string
     * @memberof InvoicesApipay
     */
    pluto_account?: string
}

export interface InvoicesApiPay0Request {
    /**
     * 
     * @type string
     * @memberof InvoicesApipay_4
     */
    id: string
    /**
     * 
     * @type string
     * @memberof InvoicesApipay_4
     */
    pluto_account?: string
}

export interface InvoicesApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof InvoicesApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof InvoicesApiretrieve
     */
    expand?: string
}

export interface InvoicesApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof InvoicesApiretrieve_5
     */
    id: string
    /**
     * 
     * @type string
     * @memberof InvoicesApiretrieve_5
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof InvoicesApiretrieve_5
     */
    expand?: string
}

export interface InvoicesApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApiupdate
     */
    id: string
    /**
     * 
     * @type string
     * @memberof InvoicesApiupdate
     */
    pluto_account?: string
    /**
     * 
     * @type InvoiceUpdateRequest
     * @memberof InvoicesApiupdate
     */
    invoice_update_request?: InvoiceUpdateRequest
}

export interface InvoicesApiUpdate0Request {
    /**
     * 
     * @type string
     * @memberof InvoicesApiupdate_6
     */
    id: string
    /**
     * 
     * @type string
     * @memberof InvoicesApiupdate_6
     */
    pluto_account?: string
    /**
     * 
     * @type InvoiceUpdateRequest
     * @memberof InvoicesApiupdate_6
     */
    invoice_update_request?: InvoiceUpdateRequest
}

export class ObjectInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete invoice
     * @param param the request object
     */
    public _delete(param: InvoicesApiDeleteRequest, options?: Configuration): Promise<IInvoice> {
        return this.api._delete(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Delete invoice
     * @param param the request object
     */
    public _delete_1(param: InvoicesApiDelete0Request, options?: Configuration): Promise<IInvoice> {
        return this.api._delete_1(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Create invoice
     * @param param the request object
     */
    public create(param: InvoicesApiCreateRequest = {}, options?: Configuration): Promise<IInvoice> {
        return this.api.create(param.pluto_account, param.invoice_create_request,  options).toPromise();
    }

    /**
     * Create invoice
     * @param param the request object
     */
    public create_2(param: InvoicesApiCreate0Request = {}, options?: Configuration): Promise<IInvoice> {
        return this.api.create_2(param.pluto_account, param.invoice_create_request,  options).toPromise();
    }

    /**
     * List invoices
     * @param param the request object
     */
    public list(param: InvoicesApiListRequest = {}, options?: Configuration): Promise<InvoiceListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * List invoices
     * @param param the request object
     */
    public list_3(param: InvoicesApiList0Request = {}, options?: Configuration): Promise<InvoiceListResponse> {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * Pay invoice
     * @param param the request object
     */
    public pay(param: InvoicesApiPayRequest, options?: Configuration): Promise<IPaymentIntent> {
        return this.api.pay(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Pay invoice
     * @param param the request object
     */
    public pay_4(param: InvoicesApiPay0Request, options?: Configuration): Promise<IPaymentIntent> {
        return this.api.pay_4(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Retrieve invoice
     * @param param the request object
     */
    public retrieve(param: InvoicesApiRetrieveRequest, options?: Configuration): Promise<IInvoice> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve invoice
     * @param param the request object
     */
    public retrieve_5(param: InvoicesApiRetrieve0Request, options?: Configuration): Promise<IInvoice> {
        return this.api.retrieve_5(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Update invoice
     * @param param the request object
     */
    public update(param: InvoicesApiUpdateRequest, options?: Configuration): Promise<IInvoice> {
        return this.api.update(param.id, param.pluto_account, param.invoice_update_request,  options).toPromise();
    }

    /**
     * Update invoice
     * @param param the request object
     */
    public update_6(param: InvoicesApiUpdate0Request, options?: Configuration): Promise<IInvoice> {
        return this.api.update_6(param.id, param.pluto_account, param.invoice_update_request,  options).toPromise();
    }

}

import { ObservableLogsApi } from "./ObservableAPI";
import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";

export interface LogsApiListRequest {
    /**
     * 
     * @type string
     * @memberof LogsApilist
     */
    pluto_account?: string
}

export interface LogsApiList0Request {
    /**
     * 
     * @type string
     * @memberof LogsApilist_1
     */
    pluto_account?: string
}

export interface LogsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof LogsApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof LogsApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof LogsApiretrieve
     */
    expand?: string
}

export interface LogsApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof LogsApiretrieve_2
     */
    id: string
    /**
     * 
     * @type string
     * @memberof LogsApiretrieve_2
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof LogsApiretrieve_2
     */
    expand?: string
}

export class ObjectLogsApi {
    private api: ObservableLogsApi

    public constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List logs
     * @param param the request object
     */
    public list(param: LogsApiListRequest = {}, options?: Configuration): Promise<LogListResponse> {
        return this.api.list(param.pluto_account,  options).toPromise();
    }

    /**
     * List logs
     * @param param the request object
     */
    public list_1(param: LogsApiList0Request = {}, options?: Configuration): Promise<LogListResponse> {
        return this.api.list_1(param.pluto_account,  options).toPromise();
    }

    /**
     * Retrieve log
     * @param param the request object
     */
    public retrieve(param: LogsApiRetrieveRequest, options?: Configuration): Promise<ILog> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve log
     * @param param the request object
     */
    public retrieve_2(param: LogsApiRetrieve0Request, options?: Configuration): Promise<ILog> {
        return this.api.retrieve_2(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

}

import { ObservablePaymentIntentsApi } from "./ObservableAPI";
import { PaymentIntentsApiRequestFactory, PaymentIntentsApiResponseProcessor} from "../apis/PaymentIntentsApi";

export interface PaymentIntentsApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApi_delete
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApi_delete
     */
    pluto_account?: string
}

export interface PaymentIntentsApiDelete0Request {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApi_delete_1
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApi_delete_1
     */
    pluto_account?: string
}

export interface PaymentIntentsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type PaymentIntentCreateRequest
     * @memberof PaymentIntentsApicreate
     */
    payment_intent_create_request?: PaymentIntentCreateRequest
}

export interface PaymentIntentsApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApicreate_2
     */
    pluto_account?: string
    /**
     * 
     * @type PaymentIntentCreateRequest
     * @memberof PaymentIntentsApicreate_2
     */
    payment_intent_create_request?: PaymentIntentCreateRequest
}

export interface PaymentIntentsApiListRequest {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof PaymentIntentsApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PaymentIntentsApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof PaymentIntentsApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApilist
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApilist
     */
    status?: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApilist
     */
    customer?: string
}

export interface PaymentIntentsApiList0Request {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApilist_3
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof PaymentIntentsApilist_3
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PaymentIntentsApilist_3
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof PaymentIntentsApilist_3
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApilist_3
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApilist_3
     */
    status?: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApilist_3
     */
    customer?: string
}

export interface PaymentIntentsApiPollRequest {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApipoll
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApipoll
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApipoll
     */
    expand?: string
}

export interface PaymentIntentsApiPoll0Request {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApipoll_4
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApipoll_4
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApipoll_4
     */
    expand?: string
}

export interface PaymentIntentsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiretrieve
     */
    expand?: string
}

export interface PaymentIntentsApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiretrieve_5
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiretrieve_5
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiretrieve_5
     */
    expand?: string
}

export interface PaymentIntentsApiSendReceiptRequest {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApisendReceipt
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApisendReceipt
     */
    pluto_account?: string
}

export interface PaymentIntentsApiSendReceipt0Request {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApisendReceipt_6
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApisendReceipt_6
     */
    pluto_account?: string
}

export interface PaymentIntentsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiupdate
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiupdate
     */
    pluto_account?: string
    /**
     * 
     * @type PaymentIntentUpdateRequest
     * @memberof PaymentIntentsApiupdate
     */
    payment_intent_update_request?: PaymentIntentUpdateRequest
}

export interface PaymentIntentsApiUpdate0Request {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiupdate_7
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiupdate_7
     */
    pluto_account?: string
    /**
     * 
     * @type PaymentIntentUpdateRequest
     * @memberof PaymentIntentsApiupdate_7
     */
    payment_intent_update_request?: PaymentIntentUpdateRequest
}

export class ObjectPaymentIntentsApi {
    private api: ObservablePaymentIntentsApi

    public constructor(configuration: Configuration, requestFactory?: PaymentIntentsApiRequestFactory, responseProcessor?: PaymentIntentsApiResponseProcessor) {
        this.api = new ObservablePaymentIntentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete payment intent
     * @param param the request object
     */
    public _delete(param: PaymentIntentsApiDeleteRequest, options?: Configuration): Promise<IPaymentIntent> {
        return this.api._delete(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Delete payment intent
     * @param param the request object
     */
    public _delete_1(param: PaymentIntentsApiDelete0Request, options?: Configuration): Promise<IPaymentIntent> {
        return this.api._delete_1(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Create payment intent
     * @param param the request object
     */
    public create(param: PaymentIntentsApiCreateRequest = {}, options?: Configuration): Promise<IPaymentIntent> {
        return this.api.create(param.pluto_account, param.payment_intent_create_request,  options).toPromise();
    }

    /**
     * Create payment intent
     * @param param the request object
     */
    public create_2(param: PaymentIntentsApiCreate0Request = {}, options?: Configuration): Promise<IPaymentIntent> {
        return this.api.create_2(param.pluto_account, param.payment_intent_create_request,  options).toPromise();
    }

    /**
     * List payment intents
     * @param param the request object
     */
    public list(param: PaymentIntentsApiListRequest = {}, options?: Configuration): Promise<PaymentIntentListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, param.status, param.customer,  options).toPromise();
    }

    /**
     * List payment intents
     * @param param the request object
     */
    public list_3(param: PaymentIntentsApiList0Request = {}, options?: Configuration): Promise<PaymentIntentListResponse> {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand, param.status, param.customer,  options).toPromise();
    }

    /**
     * Poll payment intent
     * @param param the request object
     */
    public poll(param: PaymentIntentsApiPollRequest, options?: Configuration): Promise<IPaymentIntent> {
        return this.api.poll(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Poll payment intent
     * @param param the request object
     */
    public poll_4(param: PaymentIntentsApiPoll0Request, options?: Configuration): Promise<IPaymentIntent> {
        return this.api.poll_4(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve payment intent
     * @param param the request object
     */
    public retrieve(param: PaymentIntentsApiRetrieveRequest, options?: Configuration): Promise<IPaymentIntent> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve payment intent
     * @param param the request object
     */
    public retrieve_5(param: PaymentIntentsApiRetrieve0Request, options?: Configuration): Promise<IPaymentIntent> {
        return this.api.retrieve_5(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Send payment intent receipt
     * @param param the request object
     */
    public sendReceipt(param: PaymentIntentsApiSendReceiptRequest, options?: Configuration): Promise<IPaymentIntent> {
        return this.api.sendReceipt(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Send payment intent receipt
     * @param param the request object
     */
    public sendReceipt_6(param: PaymentIntentsApiSendReceipt0Request, options?: Configuration): Promise<IPaymentIntent> {
        return this.api.sendReceipt_6(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Update payment intent
     * @param param the request object
     */
    public update(param: PaymentIntentsApiUpdateRequest, options?: Configuration): Promise<IPaymentIntent> {
        return this.api.update(param.id, param.pluto_account, param.payment_intent_update_request,  options).toPromise();
    }

    /**
     * Update payment intent
     * @param param the request object
     */
    public update_7(param: PaymentIntentsApiUpdate0Request, options?: Configuration): Promise<IPaymentIntent> {
        return this.api.update_7(param.id, param.pluto_account, param.payment_intent_update_request,  options).toPromise();
    }

}

import { ObservablePaymentLinksApi } from "./ObservableAPI";
import { PaymentLinksApiRequestFactory, PaymentLinksApiResponseProcessor} from "../apis/PaymentLinksApi";

export interface PaymentLinksApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof PaymentLinksApi_delete
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentLinksApi_delete
     */
    pluto_account?: string
}

export interface PaymentLinksApiDelete0Request {
    /**
     * 
     * @type string
     * @memberof PaymentLinksApi_delete_1
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentLinksApi_delete_1
     */
    pluto_account?: string
}

export interface PaymentLinksApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof PaymentLinksApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type PaymentLinkCreateRequest
     * @memberof PaymentLinksApicreate
     */
    payment_link_create_request?: PaymentLinkCreateRequest
}

export interface PaymentLinksApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof PaymentLinksApicreate_2
     */
    pluto_account?: string
    /**
     * 
     * @type PaymentLinkCreateRequest
     * @memberof PaymentLinksApicreate_2
     */
    payment_link_create_request?: PaymentLinkCreateRequest
}

export interface PaymentLinksApiListRequest {
    /**
     * 
     * @type string
     * @memberof PaymentLinksApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof PaymentLinksApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PaymentLinksApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof PaymentLinksApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof PaymentLinksApilist
     */
    expand?: string
}

export interface PaymentLinksApiList0Request {
    /**
     * 
     * @type string
     * @memberof PaymentLinksApilist_3
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof PaymentLinksApilist_3
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PaymentLinksApilist_3
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof PaymentLinksApilist_3
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof PaymentLinksApilist_3
     */
    expand?: string
}

export interface PaymentLinksApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof PaymentLinksApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentLinksApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof PaymentLinksApiretrieve
     */
    expand?: string
}

export interface PaymentLinksApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof PaymentLinksApiretrieve_4
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentLinksApiretrieve_4
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof PaymentLinksApiretrieve_4
     */
    expand?: string
}

export interface PaymentLinksApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof PaymentLinksApiupdate
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentLinksApiupdate
     */
    pluto_account?: string
    /**
     * 
     * @type PaymentLinkUpdateRequest
     * @memberof PaymentLinksApiupdate
     */
    payment_link_update_request?: PaymentLinkUpdateRequest
}

export interface PaymentLinksApiUpdate0Request {
    /**
     * 
     * @type string
     * @memberof PaymentLinksApiupdate_5
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PaymentLinksApiupdate_5
     */
    pluto_account?: string
    /**
     * 
     * @type PaymentLinkUpdateRequest
     * @memberof PaymentLinksApiupdate_5
     */
    payment_link_update_request?: PaymentLinkUpdateRequest
}

export class ObjectPaymentLinksApi {
    private api: ObservablePaymentLinksApi

    public constructor(configuration: Configuration, requestFactory?: PaymentLinksApiRequestFactory, responseProcessor?: PaymentLinksApiResponseProcessor) {
        this.api = new ObservablePaymentLinksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete payment link
     * @param param the request object
     */
    public _delete(param: PaymentLinksApiDeleteRequest, options?: Configuration): Promise<IPaymentLink> {
        return this.api._delete(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Delete payment link
     * @param param the request object
     */
    public _delete_1(param: PaymentLinksApiDelete0Request, options?: Configuration): Promise<IPaymentLink> {
        return this.api._delete_1(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Create payment link
     * @param param the request object
     */
    public create(param: PaymentLinksApiCreateRequest = {}, options?: Configuration): Promise<IPaymentLink> {
        return this.api.create(param.pluto_account, param.payment_link_create_request,  options).toPromise();
    }

    /**
     * Create payment link
     * @param param the request object
     */
    public create_2(param: PaymentLinksApiCreate0Request = {}, options?: Configuration): Promise<IPaymentLink> {
        return this.api.create_2(param.pluto_account, param.payment_link_create_request,  options).toPromise();
    }

    /**
     * List payment links
     * @param param the request object
     */
    public list(param: PaymentLinksApiListRequest = {}, options?: Configuration): Promise<PaymentLinkListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * List payment links
     * @param param the request object
     */
    public list_3(param: PaymentLinksApiList0Request = {}, options?: Configuration): Promise<PaymentLinkListResponse> {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * Retrieve payment link
     * @param param the request object
     */
    public retrieve(param: PaymentLinksApiRetrieveRequest, options?: Configuration): Promise<IPaymentLink> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve payment link
     * @param param the request object
     */
    public retrieve_4(param: PaymentLinksApiRetrieve0Request, options?: Configuration): Promise<IPaymentLink> {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Update payment link
     * @param param the request object
     */
    public update(param: PaymentLinksApiUpdateRequest, options?: Configuration): Promise<IPaymentLink> {
        return this.api.update(param.id, param.pluto_account, param.payment_link_update_request,  options).toPromise();
    }

    /**
     * Update payment link
     * @param param the request object
     */
    public update_5(param: PaymentLinksApiUpdate0Request, options?: Configuration): Promise<IPaymentLink> {
        return this.api.update_5(param.id, param.pluto_account, param.payment_link_update_request,  options).toPromise();
    }

}

import { ObservablePayoutWalletsApi } from "./ObservableAPI";
import { PayoutWalletsApiRequestFactory, PayoutWalletsApiResponseProcessor} from "../apis/PayoutWalletsApi";

export interface PayoutWalletsApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApi_delete
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApi_delete
     */
    pluto_account?: string
}

export interface PayoutWalletsApiDelete0Request {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApi_delete_1
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApi_delete_1
     */
    pluto_account?: string
}

export interface PayoutWalletsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type PayoutWalletCreateRequest
     * @memberof PayoutWalletsApicreate
     */
    payout_wallet_create_request?: PayoutWalletCreateRequest
}

export interface PayoutWalletsApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApicreate_2
     */
    pluto_account?: string
    /**
     * 
     * @type PayoutWalletCreateRequest
     * @memberof PayoutWalletsApicreate_2
     */
    payout_wallet_create_request?: PayoutWalletCreateRequest
}

export interface PayoutWalletsApiListRequest {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof PayoutWalletsApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PayoutWalletsApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof PayoutWalletsApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApilist
     */
    expand?: string
}

export interface PayoutWalletsApiList0Request {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApilist_3
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof PayoutWalletsApilist_3
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PayoutWalletsApilist_3
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof PayoutWalletsApilist_3
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApilist_3
     */
    expand?: string
}

export interface PayoutWalletsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiretrieve
     */
    expand?: string
}

export interface PayoutWalletsApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiretrieve_4
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiretrieve_4
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiretrieve_4
     */
    expand?: string
}

export interface PayoutWalletsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiupdate
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiupdate
     */
    pluto_account?: string
    /**
     * 
     * @type PayoutWalletUpdateRequest
     * @memberof PayoutWalletsApiupdate
     */
    payout_wallet_update_request?: PayoutWalletUpdateRequest
}

export interface PayoutWalletsApiUpdate0Request {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiupdate_5
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiupdate_5
     */
    pluto_account?: string
    /**
     * 
     * @type PayoutWalletUpdateRequest
     * @memberof PayoutWalletsApiupdate_5
     */
    payout_wallet_update_request?: PayoutWalletUpdateRequest
}

export class ObjectPayoutWalletsApi {
    private api: ObservablePayoutWalletsApi

    public constructor(configuration: Configuration, requestFactory?: PayoutWalletsApiRequestFactory, responseProcessor?: PayoutWalletsApiResponseProcessor) {
        this.api = new ObservablePayoutWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete payout wallet
     * @param param the request object
     */
    public _delete(param: PayoutWalletsApiDeleteRequest, options?: Configuration): Promise<IPayoutWallet> {
        return this.api._delete(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Delete payout wallet
     * @param param the request object
     */
    public _delete_1(param: PayoutWalletsApiDelete0Request, options?: Configuration): Promise<IPayoutWallet> {
        return this.api._delete_1(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Create payout wallet
     * @param param the request object
     */
    public create(param: PayoutWalletsApiCreateRequest = {}, options?: Configuration): Promise<IPayoutWallet> {
        return this.api.create(param.pluto_account, param.payout_wallet_create_request,  options).toPromise();
    }

    /**
     * Create payout wallet
     * @param param the request object
     */
    public create_2(param: PayoutWalletsApiCreate0Request = {}, options?: Configuration): Promise<IPayoutWallet> {
        return this.api.create_2(param.pluto_account, param.payout_wallet_create_request,  options).toPromise();
    }

    /**
     * List payout wallets
     * @param param the request object
     */
    public list(param: PayoutWalletsApiListRequest = {}, options?: Configuration): Promise<PayoutWalletListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * List payout wallets
     * @param param the request object
     */
    public list_3(param: PayoutWalletsApiList0Request = {}, options?: Configuration): Promise<PayoutWalletListResponse> {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * Retrieve payout wallet
     * @param param the request object
     */
    public retrieve(param: PayoutWalletsApiRetrieveRequest, options?: Configuration): Promise<IPayoutWallet> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve payout wallet
     * @param param the request object
     */
    public retrieve_4(param: PayoutWalletsApiRetrieve0Request, options?: Configuration): Promise<IPayoutWallet> {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Update payout wallet
     * @param param the request object
     */
    public update(param: PayoutWalletsApiUpdateRequest, options?: Configuration): Promise<IPayoutWallet> {
        return this.api.update(param.id, param.pluto_account, param.payout_wallet_update_request,  options).toPromise();
    }

    /**
     * Update payout wallet
     * @param param the request object
     */
    public update_5(param: PayoutWalletsApiUpdate0Request, options?: Configuration): Promise<IPayoutWallet> {
        return this.api.update_5(param.id, param.pluto_account, param.payout_wallet_update_request,  options).toPromise();
    }

}

import { ObservablePricesApi } from "./ObservableAPI";
import { PricesApiRequestFactory, PricesApiResponseProcessor} from "../apis/PricesApi";

export interface PricesApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof PricesApi_delete
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PricesApi_delete
     */
    pluto_account?: string
}

export interface PricesApiDelete0Request {
    /**
     * 
     * @type string
     * @memberof PricesApi_delete_1
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PricesApi_delete_1
     */
    pluto_account?: string
}

export interface PricesApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof PricesApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type PriceCreateRequest
     * @memberof PricesApicreate
     */
    price_create_request?: PriceCreateRequest
}

export interface PricesApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof PricesApicreate_2
     */
    pluto_account?: string
    /**
     * 
     * @type PriceCreateRequest
     * @memberof PricesApicreate_2
     */
    price_create_request?: PriceCreateRequest
}

export interface PricesApiListRequest {
    /**
     * 
     * @type string
     * @memberof PricesApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof PricesApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PricesApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof PricesApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof PricesApilist
     */
    expand?: string
}

export interface PricesApiList0Request {
    /**
     * 
     * @type string
     * @memberof PricesApilist_3
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof PricesApilist_3
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof PricesApilist_3
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof PricesApilist_3
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof PricesApilist_3
     */
    expand?: string
}

export interface PricesApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof PricesApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PricesApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof PricesApiretrieve
     */
    expand?: string
}

export interface PricesApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof PricesApiretrieve_4
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PricesApiretrieve_4
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof PricesApiretrieve_4
     */
    expand?: string
}

export interface PricesApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof PricesApiupdate
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PricesApiupdate
     */
    pluto_account?: string
    /**
     * 
     * @type PriceUpdateRequest
     * @memberof PricesApiupdate
     */
    price_update_request?: PriceUpdateRequest
}

export interface PricesApiUpdate0Request {
    /**
     * 
     * @type string
     * @memberof PricesApiupdate_5
     */
    id: string
    /**
     * 
     * @type string
     * @memberof PricesApiupdate_5
     */
    pluto_account?: string
    /**
     * 
     * @type PriceUpdateRequest
     * @memberof PricesApiupdate_5
     */
    price_update_request?: PriceUpdateRequest
}

export class ObjectPricesApi {
    private api: ObservablePricesApi

    public constructor(configuration: Configuration, requestFactory?: PricesApiRequestFactory, responseProcessor?: PricesApiResponseProcessor) {
        this.api = new ObservablePricesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete price
     * @param param the request object
     */
    public _delete(param: PricesApiDeleteRequest, options?: Configuration): Promise<IPrice> {
        return this.api._delete(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Delete price
     * @param param the request object
     */
    public _delete_1(param: PricesApiDelete0Request, options?: Configuration): Promise<IPrice> {
        return this.api._delete_1(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Create price
     * @param param the request object
     */
    public create(param: PricesApiCreateRequest = {}, options?: Configuration): Promise<IPrice> {
        return this.api.create(param.pluto_account, param.price_create_request,  options).toPromise();
    }

    /**
     * Create price
     * @param param the request object
     */
    public create_2(param: PricesApiCreate0Request = {}, options?: Configuration): Promise<IPrice> {
        return this.api.create_2(param.pluto_account, param.price_create_request,  options).toPromise();
    }

    /**
     * List prices
     * @param param the request object
     */
    public list(param: PricesApiListRequest = {}, options?: Configuration): Promise<PriceListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * List prices
     * @param param the request object
     */
    public list_3(param: PricesApiList0Request = {}, options?: Configuration): Promise<PriceListResponse> {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * Retrieve price
     * @param param the request object
     */
    public retrieve(param: PricesApiRetrieveRequest, options?: Configuration): Promise<IPrice> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve price
     * @param param the request object
     */
    public retrieve_4(param: PricesApiRetrieve0Request, options?: Configuration): Promise<IPrice> {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Update price
     * @param param the request object
     */
    public update(param: PricesApiUpdateRequest, options?: Configuration): Promise<IPrice> {
        return this.api.update(param.id, param.pluto_account, param.price_update_request,  options).toPromise();
    }

    /**
     * Update price
     * @param param the request object
     */
    public update_5(param: PricesApiUpdate0Request, options?: Configuration): Promise<IPrice> {
        return this.api.update_5(param.id, param.pluto_account, param.price_update_request,  options).toPromise();
    }

}

import { ObservableProductsApi } from "./ObservableAPI";
import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";

export interface ProductsApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApi_delete
     */
    id: string
    /**
     * 
     * @type string
     * @memberof ProductsApi_delete
     */
    pluto_account?: string
}

export interface ProductsApiDelete0Request {
    /**
     * 
     * @type string
     * @memberof ProductsApi_delete_1
     */
    id: string
    /**
     * 
     * @type string
     * @memberof ProductsApi_delete_1
     */
    pluto_account?: string
}

export interface ProductsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type ProductCreateRequest
     * @memberof ProductsApicreate
     */
    product_create_request?: ProductCreateRequest
}

export interface ProductsApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof ProductsApicreate_2
     */
    pluto_account?: string
    /**
     * 
     * @type ProductCreateRequest
     * @memberof ProductsApicreate_2
     */
    product_create_request?: ProductCreateRequest
}

export interface ProductsApiListRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof ProductsApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ProductsApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof ProductsApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof ProductsApilist
     */
    expand?: string
}

export interface ProductsApiList0Request {
    /**
     * 
     * @type string
     * @memberof ProductsApilist_3
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof ProductsApilist_3
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof ProductsApilist_3
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof ProductsApilist_3
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof ProductsApilist_3
     */
    expand?: string
}

export interface ProductsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof ProductsApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof ProductsApiretrieve
     */
    expand?: string
}

export interface ProductsApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof ProductsApiretrieve_4
     */
    id: string
    /**
     * 
     * @type string
     * @memberof ProductsApiretrieve_4
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof ProductsApiretrieve_4
     */
    expand?: string
}

export interface ProductsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApiupdate
     */
    id: string
    /**
     * 
     * @type string
     * @memberof ProductsApiupdate
     */
    pluto_account?: string
    /**
     * 
     * @type ProductUpdateRequest
     * @memberof ProductsApiupdate
     */
    product_update_request?: ProductUpdateRequest
}

export interface ProductsApiUpdate0Request {
    /**
     * 
     * @type string
     * @memberof ProductsApiupdate_5
     */
    id: string
    /**
     * 
     * @type string
     * @memberof ProductsApiupdate_5
     */
    pluto_account?: string
    /**
     * 
     * @type ProductUpdateRequest
     * @memberof ProductsApiupdate_5
     */
    product_update_request?: ProductUpdateRequest
}

export class ObjectProductsApi {
    private api: ObservableProductsApi

    public constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete product
     * @param param the request object
     */
    public _delete(param: ProductsApiDeleteRequest, options?: Configuration): Promise<IProduct> {
        return this.api._delete(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Delete product
     * @param param the request object
     */
    public _delete_1(param: ProductsApiDelete0Request, options?: Configuration): Promise<IProduct> {
        return this.api._delete_1(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Create product
     * @param param the request object
     */
    public create(param: ProductsApiCreateRequest = {}, options?: Configuration): Promise<IProduct> {
        return this.api.create(param.pluto_account, param.product_create_request,  options).toPromise();
    }

    /**
     * Create product
     * @param param the request object
     */
    public create_2(param: ProductsApiCreate0Request = {}, options?: Configuration): Promise<IProduct> {
        return this.api.create_2(param.pluto_account, param.product_create_request,  options).toPromise();
    }

    /**
     * List products
     * @param param the request object
     */
    public list(param: ProductsApiListRequest = {}, options?: Configuration): Promise<ProductListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * List products
     * @param param the request object
     */
    public list_3(param: ProductsApiList0Request = {}, options?: Configuration): Promise<ProductListResponse> {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * Retrieve product
     * @param param the request object
     */
    public retrieve(param: ProductsApiRetrieveRequest, options?: Configuration): Promise<IProduct> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve product
     * @param param the request object
     */
    public retrieve_4(param: ProductsApiRetrieve0Request, options?: Configuration): Promise<IProduct> {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Update product
     * @param param the request object
     */
    public update(param: ProductsApiUpdateRequest, options?: Configuration): Promise<IProduct> {
        return this.api.update(param.id, param.pluto_account, param.product_update_request,  options).toPromise();
    }

    /**
     * Update product
     * @param param the request object
     */
    public update_5(param: ProductsApiUpdate0Request, options?: Configuration): Promise<IProduct> {
        return this.api.update_5(param.id, param.pluto_account, param.product_update_request,  options).toPromise();
    }

}

import { ObservableSubscriptionsApi } from "./ObservableAPI";
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";

export interface SubscriptionsApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApi_delete
     */
    id: string
    /**
     * 
     * @type string
     * @memberof SubscriptionsApi_delete
     */
    pluto_account?: string
}

export interface SubscriptionsApiDelete0Request {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApi_delete_1
     */
    id: string
    /**
     * 
     * @type string
     * @memberof SubscriptionsApi_delete_1
     */
    pluto_account?: string
}

export interface SubscriptionsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type SubscriptionCreateRequest
     * @memberof SubscriptionsApicreate
     */
    subscription_create_request?: SubscriptionCreateRequest
}

export interface SubscriptionsApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApicreate_2
     */
    pluto_account?: string
    /**
     * 
     * @type SubscriptionCreateRequest
     * @memberof SubscriptionsApicreate_2
     */
    subscription_create_request?: SubscriptionCreateRequest
}

export interface SubscriptionsApiListRequest {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof SubscriptionsApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof SubscriptionsApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof SubscriptionsApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof SubscriptionsApilist
     */
    expand?: string
}

export interface SubscriptionsApiList0Request {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApilist_3
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof SubscriptionsApilist_3
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof SubscriptionsApilist_3
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof SubscriptionsApilist_3
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof SubscriptionsApilist_3
     */
    expand?: string
}

export interface SubscriptionsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof SubscriptionsApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof SubscriptionsApiretrieve
     */
    expand?: string
}

export interface SubscriptionsApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApiretrieve_4
     */
    id: string
    /**
     * 
     * @type string
     * @memberof SubscriptionsApiretrieve_4
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof SubscriptionsApiretrieve_4
     */
    expand?: string
}

export interface SubscriptionsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApiupdate
     */
    id: string
    /**
     * 
     * @type string
     * @memberof SubscriptionsApiupdate
     */
    pluto_account?: string
    /**
     * 
     * @type SubscriptionUpdateRequest
     * @memberof SubscriptionsApiupdate
     */
    subscription_update_request?: SubscriptionUpdateRequest
}

export interface SubscriptionsApiUpdate0Request {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApiupdate_5
     */
    id: string
    /**
     * 
     * @type string
     * @memberof SubscriptionsApiupdate_5
     */
    pluto_account?: string
    /**
     * 
     * @type SubscriptionUpdateRequest
     * @memberof SubscriptionsApiupdate_5
     */
    subscription_update_request?: SubscriptionUpdateRequest
}

export class ObjectSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete subscription
     * @param param the request object
     */
    public _delete(param: SubscriptionsApiDeleteRequest, options?: Configuration): Promise<ISubscription> {
        return this.api._delete(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Delete subscription
     * @param param the request object
     */
    public _delete_1(param: SubscriptionsApiDelete0Request, options?: Configuration): Promise<ISubscription> {
        return this.api._delete_1(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Create subscription
     * @param param the request object
     */
    public create(param: SubscriptionsApiCreateRequest = {}, options?: Configuration): Promise<ISubscription> {
        return this.api.create(param.pluto_account, param.subscription_create_request,  options).toPromise();
    }

    /**
     * Create subscription
     * @param param the request object
     */
    public create_2(param: SubscriptionsApiCreate0Request = {}, options?: Configuration): Promise<ISubscription> {
        return this.api.create_2(param.pluto_account, param.subscription_create_request,  options).toPromise();
    }

    /**
     * List subscriptions
     * @param param the request object
     */
    public list(param: SubscriptionsApiListRequest = {}, options?: Configuration): Promise<SubscriptionListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * List subscriptions
     * @param param the request object
     */
    public list_3(param: SubscriptionsApiList0Request = {}, options?: Configuration): Promise<SubscriptionListResponse> {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * Retrieve subscription
     * @param param the request object
     */
    public retrieve(param: SubscriptionsApiRetrieveRequest, options?: Configuration): Promise<ISubscription> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve subscription
     * @param param the request object
     */
    public retrieve_4(param: SubscriptionsApiRetrieve0Request, options?: Configuration): Promise<ISubscription> {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Update subscription
     * @param param the request object
     */
    public update(param: SubscriptionsApiUpdateRequest, options?: Configuration): Promise<ISubscription> {
        return this.api.update(param.id, param.pluto_account, param.subscription_update_request,  options).toPromise();
    }

    /**
     * Update subscription
     * @param param the request object
     */
    public update_5(param: SubscriptionsApiUpdate0Request, options?: Configuration): Promise<ISubscription> {
        return this.api.update_5(param.id, param.pluto_account, param.subscription_update_request,  options).toPromise();
    }

}

import { ObservableTransfersApi } from "./ObservableAPI";
import { TransfersApiRequestFactory, TransfersApiResponseProcessor} from "../apis/TransfersApi";

export interface TransfersApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof TransfersApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type TransferCreateRequest
     * @memberof TransfersApicreate
     */
    transfer_create_request?: TransferCreateRequest
}

export interface TransfersApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof TransfersApicreate_1
     */
    pluto_account?: string
    /**
     * 
     * @type TransferCreateRequest
     * @memberof TransfersApicreate_1
     */
    transfer_create_request?: TransferCreateRequest
}

export interface TransfersApiListRequest {
    /**
     * 
     * @type string
     * @memberof TransfersApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof TransfersApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof TransfersApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof TransfersApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof TransfersApilist
     */
    expand?: string
}

export interface TransfersApiList0Request {
    /**
     * 
     * @type string
     * @memberof TransfersApilist_2
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof TransfersApilist_2
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof TransfersApilist_2
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof TransfersApilist_2
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof TransfersApilist_2
     */
    expand?: string
}

export interface TransfersApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof TransfersApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof TransfersApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof TransfersApiretrieve
     */
    expand?: string
}

export interface TransfersApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof TransfersApiretrieve_3
     */
    id: string
    /**
     * 
     * @type string
     * @memberof TransfersApiretrieve_3
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof TransfersApiretrieve_3
     */
    expand?: string
}

export class ObjectTransfersApi {
    private api: ObservableTransfersApi

    public constructor(configuration: Configuration, requestFactory?: TransfersApiRequestFactory, responseProcessor?: TransfersApiResponseProcessor) {
        this.api = new ObservableTransfersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create transfer
     * @param param the request object
     */
    public create(param: TransfersApiCreateRequest = {}, options?: Configuration): Promise<ITransfer> {
        return this.api.create(param.pluto_account, param.transfer_create_request,  options).toPromise();
    }

    /**
     * Create transfer
     * @param param the request object
     */
    public create_1(param: TransfersApiCreate0Request = {}, options?: Configuration): Promise<ITransfer> {
        return this.api.create_1(param.pluto_account, param.transfer_create_request,  options).toPromise();
    }

    /**
     * List transfers
     * @param param the request object
     */
    public list(param: TransfersApiListRequest = {}, options?: Configuration): Promise<TransferListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * List transfers
     * @param param the request object
     */
    public list_2(param: TransfersApiList0Request = {}, options?: Configuration): Promise<TransferListResponse> {
        return this.api.list_2(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * Retrieve transfer
     * @param param the request object
     */
    public retrieve(param: TransfersApiRetrieveRequest, options?: Configuration): Promise<ITransfer> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve transfer
     * @param param the request object
     */
    public retrieve_3(param: TransfersApiRetrieve0Request, options?: Configuration): Promise<ITransfer> {
        return this.api.retrieve_3(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

}

import { ObservableWalletsApi } from "./ObservableAPI";
import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";

export interface WalletsApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApi_delete
     */
    id: string
    /**
     * 
     * @type string
     * @memberof WalletsApi_delete
     */
    pluto_account?: string
}

export interface WalletsApiDelete0Request {
    /**
     * 
     * @type string
     * @memberof WalletsApi_delete_1
     */
    id: string
    /**
     * 
     * @type string
     * @memberof WalletsApi_delete_1
     */
    pluto_account?: string
}

export interface WalletsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type WalletCreateRequest
     * @memberof WalletsApicreate
     */
    wallet_create_request?: WalletCreateRequest
}

export interface WalletsApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof WalletsApicreate_2
     */
    pluto_account?: string
    /**
     * 
     * @type WalletCreateRequest
     * @memberof WalletsApicreate_2
     */
    wallet_create_request?: WalletCreateRequest
}

export interface WalletsApiListRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof WalletsApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof WalletsApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof WalletsApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof WalletsApilist
     */
    expand?: string
}

export interface WalletsApiList0Request {
    /**
     * 
     * @type string
     * @memberof WalletsApilist_3
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof WalletsApilist_3
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof WalletsApilist_3
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof WalletsApilist_3
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof WalletsApilist_3
     */
    expand?: string
}

export interface WalletsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof WalletsApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof WalletsApiretrieve
     */
    expand?: string
}

export interface WalletsApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof WalletsApiretrieve_4
     */
    id: string
    /**
     * 
     * @type string
     * @memberof WalletsApiretrieve_4
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof WalletsApiretrieve_4
     */
    expand?: string
}

export interface WalletsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApiupdate
     */
    id: string
    /**
     * 
     * @type string
     * @memberof WalletsApiupdate
     */
    pluto_account?: string
    /**
     * 
     * @type WalletUpdateRequest
     * @memberof WalletsApiupdate
     */
    wallet_update_request?: WalletUpdateRequest
}

export interface WalletsApiUpdate0Request {
    /**
     * 
     * @type string
     * @memberof WalletsApiupdate_5
     */
    id: string
    /**
     * 
     * @type string
     * @memberof WalletsApiupdate_5
     */
    pluto_account?: string
    /**
     * 
     * @type WalletUpdateRequest
     * @memberof WalletsApiupdate_5
     */
    wallet_update_request?: WalletUpdateRequest
}

export class ObjectWalletsApi {
    private api: ObservableWalletsApi

    public constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor) {
        this.api = new ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete wallet
     * @param param the request object
     */
    public _delete(param: WalletsApiDeleteRequest, options?: Configuration): Promise<IWallet> {
        return this.api._delete(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Delete wallet
     * @param param the request object
     */
    public _delete_1(param: WalletsApiDelete0Request, options?: Configuration): Promise<IWallet> {
        return this.api._delete_1(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Create wallet
     * @param param the request object
     */
    public create(param: WalletsApiCreateRequest = {}, options?: Configuration): Promise<IWallet> {
        return this.api.create(param.pluto_account, param.wallet_create_request,  options).toPromise();
    }

    /**
     * Create wallet
     * @param param the request object
     */
    public create_2(param: WalletsApiCreate0Request = {}, options?: Configuration): Promise<IWallet> {
        return this.api.create_2(param.pluto_account, param.wallet_create_request,  options).toPromise();
    }

    /**
     * List wallets
     * @param param the request object
     */
    public list(param: WalletsApiListRequest = {}, options?: Configuration): Promise<WalletListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * List wallets
     * @param param the request object
     */
    public list_3(param: WalletsApiList0Request = {}, options?: Configuration): Promise<WalletListResponse> {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * Retrieve wallet
     * @param param the request object
     */
    public retrieve(param: WalletsApiRetrieveRequest, options?: Configuration): Promise<IWallet> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve wallet
     * @param param the request object
     */
    public retrieve_4(param: WalletsApiRetrieve0Request, options?: Configuration): Promise<IWallet> {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Update wallet
     * @param param the request object
     */
    public update(param: WalletsApiUpdateRequest, options?: Configuration): Promise<IWallet> {
        return this.api.update(param.id, param.pluto_account, param.wallet_update_request,  options).toPromise();
    }

    /**
     * Update wallet
     * @param param the request object
     */
    public update_5(param: WalletsApiUpdate0Request, options?: Configuration): Promise<IWallet> {
        return this.api.update_5(param.id, param.pluto_account, param.wallet_update_request,  options).toPromise();
    }

}

import { ObservableWebhooksApi } from "./ObservableAPI";
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";

export interface WebhooksApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof WebhooksApi_delete
     */
    id: string
    /**
     * 
     * @type string
     * @memberof WebhooksApi_delete
     */
    pluto_account?: string
}

export interface WebhooksApiDelete0Request {
    /**
     * 
     * @type string
     * @memberof WebhooksApi_delete_1
     */
    id: string
    /**
     * 
     * @type string
     * @memberof WebhooksApi_delete_1
     */
    pluto_account?: string
}

export interface WebhooksApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof WebhooksApicreate
     */
    pluto_account?: string
    /**
     * 
     * @type WebhookCreateRequest
     * @memberof WebhooksApicreate
     */
    webhook_create_request?: WebhookCreateRequest
}

export interface WebhooksApiCreate0Request {
    /**
     * 
     * @type string
     * @memberof WebhooksApicreate_2
     */
    pluto_account?: string
    /**
     * 
     * @type WebhookCreateRequest
     * @memberof WebhooksApicreate_2
     */
    webhook_create_request?: WebhookCreateRequest
}

export interface WebhooksApiListRequest {
    /**
     * 
     * @type string
     * @memberof WebhooksApilist
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof WebhooksApilist
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof WebhooksApilist
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof WebhooksApilist
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof WebhooksApilist
     */
    expand?: string
}

export interface WebhooksApiList0Request {
    /**
     * 
     * @type string
     * @memberof WebhooksApilist_3
     */
    pluto_account?: string
    /**
     * 
     * @type number
     * @memberof WebhooksApilist_3
     */
    limit?: number
    /**
     * 
     * @type number
     * @memberof WebhooksApilist_3
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof WebhooksApilist_3
     */
    sort?: number
    /**
     * 
     * @type string
     * @memberof WebhooksApilist_3
     */
    expand?: string
}

export interface WebhooksApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof WebhooksApiretrieve
     */
    id: string
    /**
     * 
     * @type string
     * @memberof WebhooksApiretrieve
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof WebhooksApiretrieve
     */
    expand?: string
}

export interface WebhooksApiRetrieve0Request {
    /**
     * 
     * @type string
     * @memberof WebhooksApiretrieve_4
     */
    id: string
    /**
     * 
     * @type string
     * @memberof WebhooksApiretrieve_4
     */
    pluto_account?: string
    /**
     * 
     * @type string
     * @memberof WebhooksApiretrieve_4
     */
    expand?: string
}

export interface WebhooksApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof WebhooksApiupdate
     */
    id: string
    /**
     * 
     * @type string
     * @memberof WebhooksApiupdate
     */
    pluto_account?: string
    /**
     * 
     * @type WebhookUpdateRequest
     * @memberof WebhooksApiupdate
     */
    webhook_update_request?: WebhookUpdateRequest
}

export interface WebhooksApiUpdate0Request {
    /**
     * 
     * @type string
     * @memberof WebhooksApiupdate_5
     */
    id: string
    /**
     * 
     * @type string
     * @memberof WebhooksApiupdate_5
     */
    pluto_account?: string
    /**
     * 
     * @type WebhookUpdateRequest
     * @memberof WebhooksApiupdate_5
     */
    webhook_update_request?: WebhookUpdateRequest
}

export class ObjectWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete webhook
     * @param param the request object
     */
    public _delete(param: WebhooksApiDeleteRequest, options?: Configuration): Promise<IWebhook> {
        return this.api._delete(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Delete webhook
     * @param param the request object
     */
    public _delete_1(param: WebhooksApiDelete0Request, options?: Configuration): Promise<IWebhook> {
        return this.api._delete_1(param.id, param.pluto_account,  options).toPromise();
    }

    /**
     * Create webhook
     * @param param the request object
     */
    public create(param: WebhooksApiCreateRequest = {}, options?: Configuration): Promise<IWebhook> {
        return this.api.create(param.pluto_account, param.webhook_create_request,  options).toPromise();
    }

    /**
     * Create webhook
     * @param param the request object
     */
    public create_2(param: WebhooksApiCreate0Request = {}, options?: Configuration): Promise<IWebhook> {
        return this.api.create_2(param.pluto_account, param.webhook_create_request,  options).toPromise();
    }

    /**
     * List webhooks
     * @param param the request object
     */
    public list(param: WebhooksApiListRequest = {}, options?: Configuration): Promise<WebhookListResponse> {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * List webhooks
     * @param param the request object
     */
    public list_3(param: WebhooksApiList0Request = {}, options?: Configuration): Promise<WebhookListResponse> {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand,  options).toPromise();
    }

    /**
     * Retrieve webhook
     * @param param the request object
     */
    public retrieve(param: WebhooksApiRetrieveRequest, options?: Configuration): Promise<IWebhook> {
        return this.api.retrieve(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve webhook
     * @param param the request object
     */
    public retrieve_4(param: WebhooksApiRetrieve0Request, options?: Configuration): Promise<IWebhook> {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand,  options).toPromise();
    }

    /**
     * Update webhook
     * @param param the request object
     */
    public update(param: WebhooksApiUpdateRequest, options?: Configuration): Promise<IWebhook> {
        return this.api.update(param.id, param.pluto_account, param.webhook_update_request,  options).toPromise();
    }

    /**
     * Update webhook
     * @param param the request object
     */
    public update_5(param: WebhooksApiUpdate0Request, options?: Configuration): Promise<IWebhook> {
        return this.api.update_5(param.id, param.pluto_account, param.webhook_update_request,  options).toPromise();
    }

}
