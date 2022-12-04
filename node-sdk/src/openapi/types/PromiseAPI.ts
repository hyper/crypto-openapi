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
import { CouponCreateRequest } from '../models/CouponCreateRequest';
import { CouponDuration } from '../models/CouponDuration';
import { CouponListResponse } from '../models/CouponListResponse';
import { CouponUpdateRequest } from '../models/CouponUpdateRequest';
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
import { ICoupon } from '../models/ICoupon';
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
import { InvoicePayRequest } from '../models/InvoicePayRequest';
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
import { ObservableAccountsApi } from './ObservableAPI';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class PromiseAccountsApi {
    private api: ObservableAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Connect account
     * @param id 
     * @param pluto_account 
     * @param account_connect_request 
     */
    public connect(id: string, pluto_account?: string, account_connect_request?: AccountConnectRequest, _options?: Configuration): Promise<void | IAccount> {
        const result = this.api.connect(id, pluto_account, account_connect_request, _options);
        return result.toPromise();
    }

    /**
     * Connect account
     * @param id 
     * @param pluto_account 
     * @param account_connect_request 
     */
    public connect_1(id: string, pluto_account?: string, account_connect_request?: AccountConnectRequest, _options?: Configuration): Promise<void | IAccount> {
        const result = this.api.connect_1(id, pluto_account, account_connect_request, _options);
        return result.toPromise();
    }

    /**
     * Create account
     * @param pluto_account 
     * @param account_create_request 
     */
    public create(pluto_account?: string, account_create_request?: AccountCreateRequest, _options?: Configuration): Promise<void | IAccount> {
        const result = this.api.create(pluto_account, account_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create account
     * @param pluto_account 
     * @param account_create_request 
     */
    public create_2(pluto_account?: string, account_create_request?: AccountCreateRequest, _options?: Configuration): Promise<void | IAccount> {
        const result = this.api.create_2(pluto_account, account_create_request, _options);
        return result.toPromise();
    }

    /**
     * Get dashboard access to account
     * @param id 
     * @param pluto_account 
     * @param expand 
     * @param account_dashboard_access_request 
     */
    public dashboardAccess(id: string, pluto_account?: string, expand?: string, account_dashboard_access_request?: AccountDashboardAccessRequest, _options?: Configuration): Promise<void | AccountDashboardAccessResponse> {
        const result = this.api.dashboardAccess(id, pluto_account, expand, account_dashboard_access_request, _options);
        return result.toPromise();
    }

    /**
     * Get dashboard access to account
     * @param id 
     * @param pluto_account 
     * @param expand 
     * @param account_dashboard_access_request 
     */
    public dashboardAccess_3(id: string, pluto_account?: string, expand?: string, account_dashboard_access_request?: AccountDashboardAccessRequest, _options?: Configuration): Promise<void | AccountDashboardAccessResponse> {
        const result = this.api.dashboardAccess_3(id, pluto_account, expand, account_dashboard_access_request, _options);
        return result.toPromise();
    }

    /**
     * List accounts
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<AccountListResponse | void> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List accounts
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_4(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<AccountListResponse | void> {
        const result = this.api.list_4(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Update account
     * @param id 
     * @param pluto_account 
     * @param account_update_request 
     */
    public patch(id: string, pluto_account?: string, account_update_request?: AccountUpdateRequest, _options?: Configuration): Promise<void | IAccount> {
        const result = this.api.patch(id, pluto_account, account_update_request, _options);
        return result.toPromise();
    }

    /**
     * Update account
     * @param id 
     * @param pluto_account 
     * @param account_update_request 
     */
    public patch_5(id: string, pluto_account?: string, account_update_request?: AccountUpdateRequest, _options?: Configuration): Promise<void | IAccount> {
        const result = this.api.patch_5(id, pluto_account, account_update_request, _options);
        return result.toPromise();
    }

    /**
     * Retrieve account
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IAccount> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve account
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_6(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IAccount> {
        const result = this.api.retrieve_6(id, pluto_account, expand, _options);
        return result.toPromise();
    }


}



import { ObservableCheckoutsApi } from './ObservableAPI';

import { CheckoutsApiRequestFactory, CheckoutsApiResponseProcessor} from "../apis/CheckoutsApi";
export class PromiseCheckoutsApi {
    private api: ObservableCheckoutsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CheckoutsApiRequestFactory,
        responseProcessor?: CheckoutsApiResponseProcessor
    ) {
        this.api = new ObservableCheckoutsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fail checkout
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<void | ICheckout> {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Fail checkout
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<void | ICheckout> {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Create checkout
     * @param pluto_account 
     * @param checkout_create_request 
     */
    public create(pluto_account?: string, checkout_create_request?: CheckoutCreateRequest, _options?: Configuration): Promise<void | ICheckout> {
        const result = this.api.create(pluto_account, checkout_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create checkout
     * @param pluto_account 
     * @param checkout_create_request 
     */
    public create_2(pluto_account?: string, checkout_create_request?: CheckoutCreateRequest, _options?: Configuration): Promise<void | ICheckout> {
        const result = this.api.create_2(pluto_account, checkout_create_request, _options);
        return result.toPromise();
    }

    /**
     * List checkouts
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<CheckoutListResponse | void> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List checkouts
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<CheckoutListResponse | void> {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve checkout
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | ICheckout> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve checkout
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | ICheckout> {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }


}



import { ObservableCouponsApi } from './ObservableAPI';

import { CouponsApiRequestFactory, CouponsApiResponseProcessor} from "../apis/CouponsApi";
export class PromiseCouponsApi {
    private api: ObservableCouponsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CouponsApiRequestFactory,
        responseProcessor?: CouponsApiResponseProcessor
    ) {
        this.api = new ObservableCouponsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete coupon
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<ICoupon | void> {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Delete coupon
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<ICoupon | void> {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Create coupon
     * @param pluto_account 
     * @param coupon_create_request 
     */
    public create(pluto_account?: string, coupon_create_request?: CouponCreateRequest, _options?: Configuration): Promise<ICoupon | void> {
        const result = this.api.create(pluto_account, coupon_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create coupon
     * @param pluto_account 
     * @param coupon_create_request 
     */
    public create_2(pluto_account?: string, coupon_create_request?: CouponCreateRequest, _options?: Configuration): Promise<ICoupon | void> {
        const result = this.api.create_2(pluto_account, coupon_create_request, _options);
        return result.toPromise();
    }

    /**
     * List coupons
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | CouponListResponse> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List coupons
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | CouponListResponse> {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve coupon
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ICoupon | void> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve coupon
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ICoupon | void> {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Update coupon
     * @param id 
     * @param pluto_account 
     * @param coupon_update_request 
     */
    public update(id: string, pluto_account?: string, coupon_update_request?: CouponUpdateRequest, _options?: Configuration): Promise<ICoupon | void> {
        const result = this.api.update(id, pluto_account, coupon_update_request, _options);
        return result.toPromise();
    }

    /**
     * Update coupon
     * @param id 
     * @param pluto_account 
     * @param coupon_update_request 
     */
    public update_5(id: string, pluto_account?: string, coupon_update_request?: CouponUpdateRequest, _options?: Configuration): Promise<ICoupon | void> {
        const result = this.api.update_5(id, pluto_account, coupon_update_request, _options);
        return result.toPromise();
    }


}



import { ObservableCustomersApi } from './ObservableAPI';

import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";
export class PromiseCustomersApi {
    private api: ObservableCustomersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomersApiRequestFactory,
        responseProcessor?: CustomersApiResponseProcessor
    ) {
        this.api = new ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create customer
     * @param pluto_account 
     * @param customer_create_request 
     */
    public create(pluto_account?: string, customer_create_request?: CustomerCreateRequest, _options?: Configuration): Promise<void | ICustomer> {
        const result = this.api.create(pluto_account, customer_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create customer
     * @param pluto_account 
     * @param customer_create_request 
     */
    public create_1(pluto_account?: string, customer_create_request?: CustomerCreateRequest, _options?: Configuration): Promise<void | ICustomer> {
        const result = this.api.create_1(pluto_account, customer_create_request, _options);
        return result.toPromise();
    }

    /**
     * List customers
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     * @param email 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, email?: string, _options?: Configuration): Promise<void | CustomerListResponse> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, email, _options);
        return result.toPromise();
    }

    /**
     * List customers
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     * @param email 
     */
    public list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, email?: string, _options?: Configuration): Promise<void | CustomerListResponse> {
        const result = this.api.list_2(pluto_account, limit, page, sort, expand, email, _options);
        return result.toPromise();
    }

    /**
     * Retrieve customer
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | ICustomer> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve customer
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | ICustomer> {
        const result = this.api.retrieve_3(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Update customer
     * @param id 
     * @param pluto_account 
     * @param customer_update_request 
     */
    public update(id: string, pluto_account?: string, customer_update_request?: CustomerUpdateRequest, _options?: Configuration): Promise<void | ICustomer> {
        const result = this.api.update(id, pluto_account, customer_update_request, _options);
        return result.toPromise();
    }

    /**
     * Update customer
     * @param id 
     * @param pluto_account 
     * @param customer_update_request 
     */
    public update_4(id: string, pluto_account?: string, customer_update_request?: CustomerUpdateRequest, _options?: Configuration): Promise<void | ICustomer> {
        const result = this.api.update_4(id, pluto_account, customer_update_request, _options);
        return result.toPromise();
    }


}



import { ObservableFeesApi } from './ObservableAPI';

import { FeesApiRequestFactory, FeesApiResponseProcessor} from "../apis/FeesApi";
export class PromiseFeesApi {
    private api: ObservableFeesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FeesApiRequestFactory,
        responseProcessor?: FeesApiResponseProcessor
    ) {
        this.api = new ObservableFeesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create fee
     * @param pluto_account 
     * @param fee_create_request 
     */
    public create(pluto_account?: string, fee_create_request?: FeeCreateRequest, _options?: Configuration): Promise<void | IFee> {
        const result = this.api.create(pluto_account, fee_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create fee
     * @param pluto_account 
     * @param fee_create_request 
     */
    public create_1(pluto_account?: string, fee_create_request?: FeeCreateRequest, _options?: Configuration): Promise<void | IFee> {
        const result = this.api.create_1(pluto_account, fee_create_request, _options);
        return result.toPromise();
    }

    /**
     * List fees
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | FeeListResponse> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List fees
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | FeeListResponse> {
        const result = this.api.list_2(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve fee
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IFee> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve fee
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IFee> {
        const result = this.api.retrieve_3(id, pluto_account, expand, _options);
        return result.toPromise();
    }


}



import { ObservableInvoicesApi } from './ObservableAPI';

import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";
export class PromiseInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoicesApiRequestFactory,
        responseProcessor?: InvoicesApiResponseProcessor
    ) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete invoice
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<IInvoice | void> {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Delete invoice
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<IInvoice | void> {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Create invoice
     * @param pluto_account 
     * @param invoice_create_request 
     */
    public create(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Promise<IInvoice | void> {
        const result = this.api.create(pluto_account, invoice_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create invoice
     * @param pluto_account 
     * @param invoice_create_request 
     */
    public create_2(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Promise<IInvoice | void> {
        const result = this.api.create_2(pluto_account, invoice_create_request, _options);
        return result.toPromise();
    }

    /**
     * List invoices
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | InvoiceListResponse> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List invoices
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | InvoiceListResponse> {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Pay invoice
     * @param id 
     * @param pluto_account 
     * @param invoice_pay_request 
     */
    public pay(id: string, pluto_account?: string, invoice_pay_request?: InvoicePayRequest, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api.pay(id, pluto_account, invoice_pay_request, _options);
        return result.toPromise();
    }

    /**
     * Pay invoice
     * @param id 
     * @param pluto_account 
     * @param invoice_pay_request 
     */
    public pay_4(id: string, pluto_account?: string, invoice_pay_request?: InvoicePayRequest, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api.pay_4(id, pluto_account, invoice_pay_request, _options);
        return result.toPromise();
    }

    /**
     * Retrieve invoice
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IInvoice | void> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve invoice
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IInvoice | void> {
        const result = this.api.retrieve_5(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Update invoice
     * @param id 
     * @param pluto_account 
     * @param invoice_update_request 
     */
    public update(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Promise<IInvoice | void> {
        const result = this.api.update(id, pluto_account, invoice_update_request, _options);
        return result.toPromise();
    }

    /**
     * Update invoice
     * @param id 
     * @param pluto_account 
     * @param invoice_update_request 
     */
    public update_6(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Promise<IInvoice | void> {
        const result = this.api.update_6(id, pluto_account, invoice_update_request, _options);
        return result.toPromise();
    }


}



import { ObservableLogsApi } from './ObservableAPI';

import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";
export class PromiseLogsApi {
    private api: ObservableLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LogsApiRequestFactory,
        responseProcessor?: LogsApiResponseProcessor
    ) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List logs
     * @param pluto_account 
     */
    public list(pluto_account?: string, _options?: Configuration): Promise<LogListResponse | void> {
        const result = this.api.list(pluto_account, _options);
        return result.toPromise();
    }

    /**
     * List logs
     * @param pluto_account 
     */
    public list_1(pluto_account?: string, _options?: Configuration): Promise<LogListResponse | void> {
        const result = this.api.list_1(pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve log
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | ILog> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve log
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_2(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | ILog> {
        const result = this.api.retrieve_2(id, pluto_account, expand, _options);
        return result.toPromise();
    }


}



import { ObservablePaymentIntentsApi } from './ObservableAPI';

import { PaymentIntentsApiRequestFactory, PaymentIntentsApiResponseProcessor} from "../apis/PaymentIntentsApi";
export class PromisePaymentIntentsApi {
    private api: ObservablePaymentIntentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentIntentsApiRequestFactory,
        responseProcessor?: PaymentIntentsApiResponseProcessor
    ) {
        this.api = new ObservablePaymentIntentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete payment intent
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Delete payment intent
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Create payment intent
     * @param pluto_account 
     * @param payment_intent_create_request 
     */
    public create(pluto_account?: string, payment_intent_create_request?: PaymentIntentCreateRequest, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api.create(pluto_account, payment_intent_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create payment intent
     * @param pluto_account 
     * @param payment_intent_create_request 
     */
    public create_2(pluto_account?: string, payment_intent_create_request?: PaymentIntentCreateRequest, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api.create_2(pluto_account, payment_intent_create_request, _options);
        return result.toPromise();
    }

    /**
     * List payment intents
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     * @param status 
     * @param customer 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, status?: string, customer?: string, _options?: Configuration): Promise<PaymentIntentListResponse | void> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, status, customer, _options);
        return result.toPromise();
    }

    /**
     * List payment intents
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     * @param status 
     * @param customer 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, status?: string, customer?: string, _options?: Configuration): Promise<PaymentIntentListResponse | void> {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, status, customer, _options);
        return result.toPromise();
    }

    /**
     * Poll payment intent
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public poll(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api.poll(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Poll payment intent
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public poll_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api.poll_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve payment intent
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve payment intent
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api.retrieve_5(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Send payment intent receipt
     * @param id 
     * @param pluto_account 
     */
    public sendReceipt(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api.sendReceipt(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Send payment intent receipt
     * @param id 
     * @param pluto_account 
     */
    public sendReceipt_6(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api.sendReceipt_6(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Update payment intent
     * @param id 
     * @param pluto_account 
     * @param payment_intent_update_request 
     */
    public update(id: string, pluto_account?: string, payment_intent_update_request?: PaymentIntentUpdateRequest, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api.update(id, pluto_account, payment_intent_update_request, _options);
        return result.toPromise();
    }

    /**
     * Update payment intent
     * @param id 
     * @param pluto_account 
     * @param payment_intent_update_request 
     */
    public update_7(id: string, pluto_account?: string, payment_intent_update_request?: PaymentIntentUpdateRequest, _options?: Configuration): Promise<void | IPaymentIntent> {
        const result = this.api.update_7(id, pluto_account, payment_intent_update_request, _options);
        return result.toPromise();
    }


}



import { ObservablePaymentLinksApi } from './ObservableAPI';

import { PaymentLinksApiRequestFactory, PaymentLinksApiResponseProcessor} from "../apis/PaymentLinksApi";
export class PromisePaymentLinksApi {
    private api: ObservablePaymentLinksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentLinksApiRequestFactory,
        responseProcessor?: PaymentLinksApiResponseProcessor
    ) {
        this.api = new ObservablePaymentLinksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete payment link
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IPaymentLink> {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Delete payment link
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IPaymentLink> {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Create payment link
     * @param pluto_account 
     * @param payment_link_create_request 
     */
    public create(pluto_account?: string, payment_link_create_request?: PaymentLinkCreateRequest, _options?: Configuration): Promise<void | IPaymentLink> {
        const result = this.api.create(pluto_account, payment_link_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create payment link
     * @param pluto_account 
     * @param payment_link_create_request 
     */
    public create_2(pluto_account?: string, payment_link_create_request?: PaymentLinkCreateRequest, _options?: Configuration): Promise<void | IPaymentLink> {
        const result = this.api.create_2(pluto_account, payment_link_create_request, _options);
        return result.toPromise();
    }

    /**
     * List payment links
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | PaymentLinkListResponse> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List payment links
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | PaymentLinkListResponse> {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve payment link
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IPaymentLink> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve payment link
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IPaymentLink> {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Update payment link
     * @param id 
     * @param pluto_account 
     * @param payment_link_update_request 
     */
    public update(id: string, pluto_account?: string, payment_link_update_request?: PaymentLinkUpdateRequest, _options?: Configuration): Promise<void | IPaymentLink> {
        const result = this.api.update(id, pluto_account, payment_link_update_request, _options);
        return result.toPromise();
    }

    /**
     * Update payment link
     * @param id 
     * @param pluto_account 
     * @param payment_link_update_request 
     */
    public update_5(id: string, pluto_account?: string, payment_link_update_request?: PaymentLinkUpdateRequest, _options?: Configuration): Promise<void | IPaymentLink> {
        const result = this.api.update_5(id, pluto_account, payment_link_update_request, _options);
        return result.toPromise();
    }


}



import { ObservablePayoutWalletsApi } from './ObservableAPI';

import { PayoutWalletsApiRequestFactory, PayoutWalletsApiResponseProcessor} from "../apis/PayoutWalletsApi";
export class PromisePayoutWalletsApi {
    private api: ObservablePayoutWalletsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PayoutWalletsApiRequestFactory,
        responseProcessor?: PayoutWalletsApiResponseProcessor
    ) {
        this.api = new ObservablePayoutWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete payout wallet
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IPayoutWallet> {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Delete payout wallet
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IPayoutWallet> {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Create payout wallet
     * @param pluto_account 
     * @param payout_wallet_create_request 
     */
    public create(pluto_account?: string, payout_wallet_create_request?: PayoutWalletCreateRequest, _options?: Configuration): Promise<void | IPayoutWallet> {
        const result = this.api.create(pluto_account, payout_wallet_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create payout wallet
     * @param pluto_account 
     * @param payout_wallet_create_request 
     */
    public create_2(pluto_account?: string, payout_wallet_create_request?: PayoutWalletCreateRequest, _options?: Configuration): Promise<void | IPayoutWallet> {
        const result = this.api.create_2(pluto_account, payout_wallet_create_request, _options);
        return result.toPromise();
    }

    /**
     * List payout wallets
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | PayoutWalletListResponse> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List payout wallets
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | PayoutWalletListResponse> {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve payout wallet
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IPayoutWallet> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve payout wallet
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IPayoutWallet> {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Update payout wallet
     * @param id 
     * @param pluto_account 
     * @param payout_wallet_update_request 
     */
    public update(id: string, pluto_account?: string, payout_wallet_update_request?: PayoutWalletUpdateRequest, _options?: Configuration): Promise<IPayoutWallet> {
        const result = this.api.update(id, pluto_account, payout_wallet_update_request, _options);
        return result.toPromise();
    }

    /**
     * Update payout wallet
     * @param id 
     * @param pluto_account 
     * @param payout_wallet_update_request 
     */
    public update_5(id: string, pluto_account?: string, payout_wallet_update_request?: PayoutWalletUpdateRequest, _options?: Configuration): Promise<IPayoutWallet> {
        const result = this.api.update_5(id, pluto_account, payout_wallet_update_request, _options);
        return result.toPromise();
    }


}



import { ObservablePricesApi } from './ObservableAPI';

import { PricesApiRequestFactory, PricesApiResponseProcessor} from "../apis/PricesApi";
export class PromisePricesApi {
    private api: ObservablePricesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PricesApiRequestFactory,
        responseProcessor?: PricesApiResponseProcessor
    ) {
        this.api = new ObservablePricesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete price
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IPrice> {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Delete price
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IPrice> {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Create price
     * @param pluto_account 
     * @param price_create_request 
     */
    public create(pluto_account?: string, price_create_request?: PriceCreateRequest, _options?: Configuration): Promise<void | IPrice> {
        const result = this.api.create(pluto_account, price_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create price
     * @param pluto_account 
     * @param price_create_request 
     */
    public create_2(pluto_account?: string, price_create_request?: PriceCreateRequest, _options?: Configuration): Promise<void | IPrice> {
        const result = this.api.create_2(pluto_account, price_create_request, _options);
        return result.toPromise();
    }

    /**
     * List prices
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<PriceListResponse | void> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List prices
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<PriceListResponse | void> {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve price
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IPrice> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve price
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IPrice> {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Update price
     * @param id 
     * @param pluto_account 
     * @param price_update_request 
     */
    public update(id: string, pluto_account?: string, price_update_request?: PriceUpdateRequest, _options?: Configuration): Promise<void | IPrice> {
        const result = this.api.update(id, pluto_account, price_update_request, _options);
        return result.toPromise();
    }

    /**
     * Update price
     * @param id 
     * @param pluto_account 
     * @param price_update_request 
     */
    public update_5(id: string, pluto_account?: string, price_update_request?: PriceUpdateRequest, _options?: Configuration): Promise<void | IPrice> {
        const result = this.api.update_5(id, pluto_account, price_update_request, _options);
        return result.toPromise();
    }


}



import { ObservableProductsApi } from './ObservableAPI';

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class PromiseProductsApi {
    private api: ObservableProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete product
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IProduct> {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Delete product
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IProduct> {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Create product
     * @param pluto_account 
     * @param product_create_request 
     */
    public create(pluto_account?: string, product_create_request?: ProductCreateRequest, _options?: Configuration): Promise<void | IProduct> {
        const result = this.api.create(pluto_account, product_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create product
     * @param pluto_account 
     * @param product_create_request 
     */
    public create_2(pluto_account?: string, product_create_request?: ProductCreateRequest, _options?: Configuration): Promise<void | IProduct> {
        const result = this.api.create_2(pluto_account, product_create_request, _options);
        return result.toPromise();
    }

    /**
     * List products
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<ProductListResponse | void> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List products
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<ProductListResponse | void> {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve product
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IProduct> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve product
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IProduct> {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Update product
     * @param id 
     * @param pluto_account 
     * @param product_update_request 
     */
    public update(id: string, pluto_account?: string, product_update_request?: ProductUpdateRequest, _options?: Configuration): Promise<void | IProduct> {
        const result = this.api.update(id, pluto_account, product_update_request, _options);
        return result.toPromise();
    }

    /**
     * Update product
     * @param id 
     * @param pluto_account 
     * @param product_update_request 
     */
    public update_5(id: string, pluto_account?: string, product_update_request?: ProductUpdateRequest, _options?: Configuration): Promise<void | IProduct> {
        const result = this.api.update_5(id, pluto_account, product_update_request, _options);
        return result.toPromise();
    }


}



import { ObservableSubscriptionsApi } from './ObservableAPI';

import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";
export class PromiseSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionsApiRequestFactory,
        responseProcessor?: SubscriptionsApiResponseProcessor
    ) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete subscription
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<void | ISubscription> {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Delete subscription
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<void | ISubscription> {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Create subscription
     * @param pluto_account 
     * @param subscription_create_request 
     */
    public create(pluto_account?: string, subscription_create_request?: SubscriptionCreateRequest, _options?: Configuration): Promise<void | ISubscription> {
        const result = this.api.create(pluto_account, subscription_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create subscription
     * @param pluto_account 
     * @param subscription_create_request 
     */
    public create_2(pluto_account?: string, subscription_create_request?: SubscriptionCreateRequest, _options?: Configuration): Promise<void | ISubscription> {
        const result = this.api.create_2(pluto_account, subscription_create_request, _options);
        return result.toPromise();
    }

    /**
     * List subscriptions
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | SubscriptionListResponse> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List subscriptions
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | SubscriptionListResponse> {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve subscription
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | ISubscription> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve subscription
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | ISubscription> {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Update subscription
     * @param id 
     * @param pluto_account 
     * @param subscription_update_request 
     */
    public update(id: string, pluto_account?: string, subscription_update_request?: SubscriptionUpdateRequest, _options?: Configuration): Promise<void | ISubscription> {
        const result = this.api.update(id, pluto_account, subscription_update_request, _options);
        return result.toPromise();
    }

    /**
     * Update subscription
     * @param id 
     * @param pluto_account 
     * @param subscription_update_request 
     */
    public update_5(id: string, pluto_account?: string, subscription_update_request?: SubscriptionUpdateRequest, _options?: Configuration): Promise<void | ISubscription> {
        const result = this.api.update_5(id, pluto_account, subscription_update_request, _options);
        return result.toPromise();
    }


}



import { ObservableTransfersApi } from './ObservableAPI';

import { TransfersApiRequestFactory, TransfersApiResponseProcessor} from "../apis/TransfersApi";
export class PromiseTransfersApi {
    private api: ObservableTransfersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransfersApiRequestFactory,
        responseProcessor?: TransfersApiResponseProcessor
    ) {
        this.api = new ObservableTransfersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create transfer
     * @param pluto_account 
     * @param transfer_create_request 
     */
    public create(pluto_account?: string, transfer_create_request?: TransferCreateRequest, _options?: Configuration): Promise<ITransfer | void> {
        const result = this.api.create(pluto_account, transfer_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create transfer
     * @param pluto_account 
     * @param transfer_create_request 
     */
    public create_1(pluto_account?: string, transfer_create_request?: TransferCreateRequest, _options?: Configuration): Promise<ITransfer | void> {
        const result = this.api.create_1(pluto_account, transfer_create_request, _options);
        return result.toPromise();
    }

    /**
     * List transfers
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | TransferListResponse> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List transfers
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | TransferListResponse> {
        const result = this.api.list_2(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve transfer
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ITransfer | void> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve transfer
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ITransfer | void> {
        const result = this.api.retrieve_3(id, pluto_account, expand, _options);
        return result.toPromise();
    }


}



import { ObservableWalletsApi } from './ObservableAPI';

import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";
export class PromiseWalletsApi {
    private api: ObservableWalletsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletsApiRequestFactory,
        responseProcessor?: WalletsApiResponseProcessor
    ) {
        this.api = new ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete wallet
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IWallet> {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Delete wallet
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IWallet> {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Create wallet
     * @param pluto_account 
     * @param wallet_create_request 
     */
    public create(pluto_account?: string, wallet_create_request?: WalletCreateRequest, _options?: Configuration): Promise<void | IWallet> {
        const result = this.api.create(pluto_account, wallet_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create wallet
     * @param pluto_account 
     * @param wallet_create_request 
     */
    public create_2(pluto_account?: string, wallet_create_request?: WalletCreateRequest, _options?: Configuration): Promise<void | IWallet> {
        const result = this.api.create_2(pluto_account, wallet_create_request, _options);
        return result.toPromise();
    }

    /**
     * List wallets
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | WalletListResponse> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List wallets
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | WalletListResponse> {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve wallet
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IWallet> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve wallet
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IWallet> {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Update wallet
     * @param id 
     * @param pluto_account 
     * @param wallet_update_request 
     */
    public update(id: string, pluto_account?: string, wallet_update_request?: WalletUpdateRequest, _options?: Configuration): Promise<void | IWallet> {
        const result = this.api.update(id, pluto_account, wallet_update_request, _options);
        return result.toPromise();
    }

    /**
     * Update wallet
     * @param id 
     * @param pluto_account 
     * @param wallet_update_request 
     */
    public update_5(id: string, pluto_account?: string, wallet_update_request?: WalletUpdateRequest, _options?: Configuration): Promise<void | IWallet> {
        const result = this.api.update_5(id, pluto_account, wallet_update_request, _options);
        return result.toPromise();
    }


}



import { ObservableWebhooksApi } from './ObservableAPI';

import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";
export class PromiseWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhooksApiRequestFactory,
        responseProcessor?: WebhooksApiResponseProcessor
    ) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete webhook
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IWebhook> {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Delete webhook
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<void | IWebhook> {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }

    /**
     * Create webhook
     * @param pluto_account 
     * @param webhook_create_request 
     */
    public create(pluto_account?: string, webhook_create_request?: WebhookCreateRequest, _options?: Configuration): Promise<void | IWebhook> {
        const result = this.api.create(pluto_account, webhook_create_request, _options);
        return result.toPromise();
    }

    /**
     * Create webhook
     * @param pluto_account 
     * @param webhook_create_request 
     */
    public create_2(pluto_account?: string, webhook_create_request?: WebhookCreateRequest, _options?: Configuration): Promise<void | IWebhook> {
        const result = this.api.create_2(pluto_account, webhook_create_request, _options);
        return result.toPromise();
    }

    /**
     * List webhooks
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | WebhookListResponse> {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * List webhooks
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<void | WebhookListResponse> {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve webhook
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IWebhook> {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve webhook
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<void | IWebhook> {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }

    /**
     * Update webhook
     * @param id 
     * @param pluto_account 
     * @param webhook_update_request 
     */
    public update(id: string, pluto_account?: string, webhook_update_request?: WebhookUpdateRequest, _options?: Configuration): Promise<void | IWebhook> {
        const result = this.api.update(id, pluto_account, webhook_update_request, _options);
        return result.toPromise();
    }

    /**
     * Update webhook
     * @param id 
     * @param pluto_account 
     * @param webhook_update_request 
     */
    public update_5(id: string, pluto_account?: string, webhook_update_request?: WebhookUpdateRequest, _options?: Configuration): Promise<void | IWebhook> {
        const result = this.api.update_5(id, pluto_account, webhook_update_request, _options);
        return result.toPromise();
    }


}



