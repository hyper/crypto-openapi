import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class ObservableAccountsApi {
    private requestFactory: AccountsApiRequestFactory;
    private responseProcessor: AccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountsApiResponseProcessor();
    }

    /**
     * Connect account
     * @param id 
     * @param pluto_account 
     * @param account_connect_request 
     */
    public connect(id: string, pluto_account?: string, account_connect_request?: AccountConnectRequest, _options?: Configuration): Observable<void | IAccount> {
        const requestContextPromise = this.requestFactory.connect(id, pluto_account, account_connect_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.connect(rsp)));
            }));
    }

    /**
     * Connect account
     * @param id 
     * @param pluto_account 
     * @param account_connect_request 
     */
    public connect_1(id: string, pluto_account?: string, account_connect_request?: AccountConnectRequest, _options?: Configuration): Observable<void | IAccount> {
        const requestContextPromise = this.requestFactory.connect_1(id, pluto_account, account_connect_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.connect_1(rsp)));
            }));
    }

    /**
     * Create account
     * @param pluto_account 
     * @param account_create_request 
     */
    public create(pluto_account?: string, account_create_request?: AccountCreateRequest, _options?: Configuration): Observable<void | IAccount> {
        const requestContextPromise = this.requestFactory.create(pluto_account, account_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create account
     * @param pluto_account 
     * @param account_create_request 
     */
    public create_2(pluto_account?: string, account_create_request?: AccountCreateRequest, _options?: Configuration): Observable<void | IAccount> {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, account_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2(rsp)));
            }));
    }

    /**
     * Get dashboard access to account
     * @param id 
     * @param pluto_account 
     * @param expand 
     * @param account_dashboard_access_request 
     */
    public dashboardAccess(id: string, pluto_account?: string, expand?: string, account_dashboard_access_request?: AccountDashboardAccessRequest, _options?: Configuration): Observable<void | AccountDashboardAccessResponse> {
        const requestContextPromise = this.requestFactory.dashboardAccess(id, pluto_account, expand, account_dashboard_access_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dashboardAccess(rsp)));
            }));
    }

    /**
     * Get dashboard access to account
     * @param id 
     * @param pluto_account 
     * @param expand 
     * @param account_dashboard_access_request 
     */
    public dashboardAccess_3(id: string, pluto_account?: string, expand?: string, account_dashboard_access_request?: AccountDashboardAccessRequest, _options?: Configuration): Observable<void | AccountDashboardAccessResponse> {
        const requestContextPromise = this.requestFactory.dashboardAccess_3(id, pluto_account, expand, account_dashboard_access_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dashboardAccess_3(rsp)));
            }));
    }

    /**
     * List accounts
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<AccountListResponse | void> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List accounts
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_4(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<AccountListResponse | void> {
        const requestContextPromise = this.requestFactory.list_4(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_4(rsp)));
            }));
    }

    /**
     * Update account
     * @param id 
     * @param pluto_account 
     * @param account_update_request 
     */
    public patch(id: string, pluto_account?: string, account_update_request?: AccountUpdateRequest, _options?: Configuration): Observable<void | IAccount> {
        const requestContextPromise = this.requestFactory.patch(id, pluto_account, account_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patch(rsp)));
            }));
    }

    /**
     * Update account
     * @param id 
     * @param pluto_account 
     * @param account_update_request 
     */
    public patch_5(id: string, pluto_account?: string, account_update_request?: AccountUpdateRequest, _options?: Configuration): Observable<void | IAccount> {
        const requestContextPromise = this.requestFactory.patch_5(id, pluto_account, account_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.patch_5(rsp)));
            }));
    }

    /**
     * Retrieve account
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IAccount> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve account
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_6(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IAccount> {
        const requestContextPromise = this.requestFactory.retrieve_6(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_6(rsp)));
            }));
    }

}

import { CheckoutsApiRequestFactory, CheckoutsApiResponseProcessor} from "../apis/CheckoutsApi";
export class ObservableCheckoutsApi {
    private requestFactory: CheckoutsApiRequestFactory;
    private responseProcessor: CheckoutsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CheckoutsApiRequestFactory,
        responseProcessor?: CheckoutsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CheckoutsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CheckoutsApiResponseProcessor();
    }

    /**
     * Fail checkout
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | ICheckout> {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete(rsp)));
            }));
    }

    /**
     * Fail checkout
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | ICheckout> {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete_1(rsp)));
            }));
    }

    /**
     * Create checkout
     * @param pluto_account 
     * @param checkout_create_request 
     */
    public create(pluto_account?: string, checkout_create_request?: CheckoutCreateRequest, _options?: Configuration): Observable<void | ICheckout> {
        const requestContextPromise = this.requestFactory.create(pluto_account, checkout_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create checkout
     * @param pluto_account 
     * @param checkout_create_request 
     */
    public create_2(pluto_account?: string, checkout_create_request?: CheckoutCreateRequest, _options?: Configuration): Observable<void | ICheckout> {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, checkout_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2(rsp)));
            }));
    }

    /**
     * List checkouts
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<CheckoutListResponse | void> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List checkouts
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<CheckoutListResponse | void> {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_3(rsp)));
            }));
    }

    /**
     * Retrieve checkout
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ICheckout> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve checkout
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ICheckout> {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_4(rsp)));
            }));
    }

}

import { CouponsApiRequestFactory, CouponsApiResponseProcessor} from "../apis/CouponsApi";
export class ObservableCouponsApi {
    private requestFactory: CouponsApiRequestFactory;
    private responseProcessor: CouponsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CouponsApiRequestFactory,
        responseProcessor?: CouponsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CouponsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CouponsApiResponseProcessor();
    }

    /**
     * Delete coupon
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<ICoupon | void> {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete(rsp)));
            }));
    }

    /**
     * Delete coupon
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<ICoupon | void> {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete_1(rsp)));
            }));
    }

    /**
     * Create coupon
     * @param pluto_account 
     * @param coupon_create_request 
     */
    public create(pluto_account?: string, coupon_create_request?: CouponCreateRequest, _options?: Configuration): Observable<ICoupon | void> {
        const requestContextPromise = this.requestFactory.create(pluto_account, coupon_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create coupon
     * @param pluto_account 
     * @param coupon_create_request 
     */
    public create_2(pluto_account?: string, coupon_create_request?: CouponCreateRequest, _options?: Configuration): Observable<ICoupon | void> {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, coupon_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2(rsp)));
            }));
    }

    /**
     * List coupons
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | CouponListResponse> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List coupons
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | CouponListResponse> {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_3(rsp)));
            }));
    }

    /**
     * Retrieve coupon
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ICoupon | void> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve coupon
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ICoupon | void> {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_4(rsp)));
            }));
    }

    /**
     * Update coupon
     * @param id 
     * @param pluto_account 
     * @param coupon_update_request 
     */
    public update(id: string, pluto_account?: string, coupon_update_request?: CouponUpdateRequest, _options?: Configuration): Observable<ICoupon | void> {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, coupon_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

    /**
     * Update coupon
     * @param id 
     * @param pluto_account 
     * @param coupon_update_request 
     */
    public update_5(id: string, pluto_account?: string, coupon_update_request?: CouponUpdateRequest, _options?: Configuration): Observable<ICoupon | void> {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, coupon_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update_5(rsp)));
            }));
    }

}

import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";
export class ObservableCustomersApi {
    private requestFactory: CustomersApiRequestFactory;
    private responseProcessor: CustomersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomersApiRequestFactory,
        responseProcessor?: CustomersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomersApiResponseProcessor();
    }

    /**
     * Create customer
     * @param pluto_account 
     * @param customer_create_request 
     */
    public create(pluto_account?: string, customer_create_request?: CustomerCreateRequest, _options?: Configuration): Observable<void | ICustomer> {
        const requestContextPromise = this.requestFactory.create(pluto_account, customer_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create customer
     * @param pluto_account 
     * @param customer_create_request 
     */
    public create_1(pluto_account?: string, customer_create_request?: CustomerCreateRequest, _options?: Configuration): Observable<void | ICustomer> {
        const requestContextPromise = this.requestFactory.create_1(pluto_account, customer_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_1(rsp)));
            }));
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
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, email?: string, _options?: Configuration): Observable<void | CustomerListResponse> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, email, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
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
    public list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, email?: string, _options?: Configuration): Observable<void | CustomerListResponse> {
        const requestContextPromise = this.requestFactory.list_2(pluto_account, limit, page, sort, expand, email, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_2(rsp)));
            }));
    }

    /**
     * Retrieve customer
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ICustomer> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve customer
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ICustomer> {
        const requestContextPromise = this.requestFactory.retrieve_3(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_3(rsp)));
            }));
    }

    /**
     * Update customer
     * @param id 
     * @param pluto_account 
     * @param customer_update_request 
     */
    public update(id: string, pluto_account?: string, customer_update_request?: CustomerUpdateRequest, _options?: Configuration): Observable<void | ICustomer> {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, customer_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

    /**
     * Update customer
     * @param id 
     * @param pluto_account 
     * @param customer_update_request 
     */
    public update_4(id: string, pluto_account?: string, customer_update_request?: CustomerUpdateRequest, _options?: Configuration): Observable<void | ICustomer> {
        const requestContextPromise = this.requestFactory.update_4(id, pluto_account, customer_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update_4(rsp)));
            }));
    }

}

import { FeesApiRequestFactory, FeesApiResponseProcessor} from "../apis/FeesApi";
export class ObservableFeesApi {
    private requestFactory: FeesApiRequestFactory;
    private responseProcessor: FeesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FeesApiRequestFactory,
        responseProcessor?: FeesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FeesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FeesApiResponseProcessor();
    }

    /**
     * Create fee
     * @param pluto_account 
     * @param fee_create_request 
     */
    public create(pluto_account?: string, fee_create_request?: FeeCreateRequest, _options?: Configuration): Observable<void | IFee> {
        const requestContextPromise = this.requestFactory.create(pluto_account, fee_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create fee
     * @param pluto_account 
     * @param fee_create_request 
     */
    public create_1(pluto_account?: string, fee_create_request?: FeeCreateRequest, _options?: Configuration): Observable<void | IFee> {
        const requestContextPromise = this.requestFactory.create_1(pluto_account, fee_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_1(rsp)));
            }));
    }

    /**
     * List fees
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | FeeListResponse> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List fees
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | FeeListResponse> {
        const requestContextPromise = this.requestFactory.list_2(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_2(rsp)));
            }));
    }

    /**
     * Retrieve fee
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IFee> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve fee
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IFee> {
        const requestContextPromise = this.requestFactory.retrieve_3(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_3(rsp)));
            }));
    }

}

import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";
export class ObservableInvoicesApi {
    private requestFactory: InvoicesApiRequestFactory;
    private responseProcessor: InvoicesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoicesApiRequestFactory,
        responseProcessor?: InvoicesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InvoicesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InvoicesApiResponseProcessor();
    }

    /**
     * Delete invoice
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<IInvoice | void> {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete(rsp)));
            }));
    }

    /**
     * Delete invoice
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<IInvoice | void> {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete_1(rsp)));
            }));
    }

    /**
     * Create invoice
     * @param pluto_account 
     * @param invoice_create_request 
     */
    public create(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Observable<IInvoice | void> {
        const requestContextPromise = this.requestFactory.create(pluto_account, invoice_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create invoice
     * @param pluto_account 
     * @param invoice_create_request 
     */
    public create_2(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Observable<IInvoice | void> {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, invoice_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2(rsp)));
            }));
    }

    /**
     * List invoices
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | InvoiceListResponse> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List invoices
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | InvoiceListResponse> {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_3(rsp)));
            }));
    }

    /**
     * Pay invoice
     * @param id 
     * @param pluto_account 
     * @param invoice_pay_request 
     */
    public pay(id: string, pluto_account?: string, invoice_pay_request?: InvoicePayRequest, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory.pay(id, pluto_account, invoice_pay_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pay(rsp)));
            }));
    }

    /**
     * Pay invoice
     * @param id 
     * @param pluto_account 
     * @param invoice_pay_request 
     */
    public pay_4(id: string, pluto_account?: string, invoice_pay_request?: InvoicePayRequest, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory.pay_4(id, pluto_account, invoice_pay_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pay_4(rsp)));
            }));
    }

    /**
     * Retrieve invoice
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IInvoice | void> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve invoice
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IInvoice | void> {
        const requestContextPromise = this.requestFactory.retrieve_5(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_5(rsp)));
            }));
    }

    /**
     * Update invoice
     * @param id 
     * @param pluto_account 
     * @param invoice_update_request 
     */
    public update(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Observable<IInvoice | void> {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, invoice_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

    /**
     * Update invoice
     * @param id 
     * @param pluto_account 
     * @param invoice_update_request 
     */
    public update_6(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Observable<IInvoice | void> {
        const requestContextPromise = this.requestFactory.update_6(id, pluto_account, invoice_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update_6(rsp)));
            }));
    }

}

import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";
export class ObservableLogsApi {
    private requestFactory: LogsApiRequestFactory;
    private responseProcessor: LogsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LogsApiRequestFactory,
        responseProcessor?: LogsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogsApiResponseProcessor();
    }

    /**
     * List logs
     * @param pluto_account 
     */
    public list(pluto_account?: string, _options?: Configuration): Observable<LogListResponse | void> {
        const requestContextPromise = this.requestFactory.list(pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List logs
     * @param pluto_account 
     */
    public list_1(pluto_account?: string, _options?: Configuration): Observable<LogListResponse | void> {
        const requestContextPromise = this.requestFactory.list_1(pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_1(rsp)));
            }));
    }

    /**
     * Retrieve log
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ILog> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve log
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_2(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ILog> {
        const requestContextPromise = this.requestFactory.retrieve_2(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_2(rsp)));
            }));
    }

}

import { PaymentIntentsApiRequestFactory, PaymentIntentsApiResponseProcessor} from "../apis/PaymentIntentsApi";
export class ObservablePaymentIntentsApi {
    private requestFactory: PaymentIntentsApiRequestFactory;
    private responseProcessor: PaymentIntentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentIntentsApiRequestFactory,
        responseProcessor?: PaymentIntentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentIntentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentIntentsApiResponseProcessor();
    }

    /**
     * Delete payment intent
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete(rsp)));
            }));
    }

    /**
     * Delete payment intent
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete_1(rsp)));
            }));
    }

    /**
     * Create payment intent
     * @param pluto_account 
     * @param payment_intent_create_request 
     */
    public create(pluto_account?: string, payment_intent_create_request?: PaymentIntentCreateRequest, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory.create(pluto_account, payment_intent_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create payment intent
     * @param pluto_account 
     * @param payment_intent_create_request 
     */
    public create_2(pluto_account?: string, payment_intent_create_request?: PaymentIntentCreateRequest, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, payment_intent_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2(rsp)));
            }));
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
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, status?: string, customer?: string, _options?: Configuration): Observable<PaymentIntentListResponse | void> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, status, customer, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
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
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, status?: string, customer?: string, _options?: Configuration): Observable<PaymentIntentListResponse | void> {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, status, customer, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_3(rsp)));
            }));
    }

    /**
     * Poll payment intent
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public poll(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory.poll(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.poll(rsp)));
            }));
    }

    /**
     * Poll payment intent
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public poll_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory.poll_4(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.poll_4(rsp)));
            }));
    }

    /**
     * Retrieve payment intent
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve payment intent
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory.retrieve_5(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_5(rsp)));
            }));
    }

    /**
     * Send payment intent receipt
     * @param id 
     * @param pluto_account 
     */
    public sendReceipt(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory.sendReceipt(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendReceipt(rsp)));
            }));
    }

    /**
     * Send payment intent receipt
     * @param id 
     * @param pluto_account 
     */
    public sendReceipt_6(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory.sendReceipt_6(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendReceipt_6(rsp)));
            }));
    }

    /**
     * Update payment intent
     * @param id 
     * @param pluto_account 
     * @param payment_intent_update_request 
     */
    public update(id: string, pluto_account?: string, payment_intent_update_request?: PaymentIntentUpdateRequest, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, payment_intent_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

    /**
     * Update payment intent
     * @param id 
     * @param pluto_account 
     * @param payment_intent_update_request 
     */
    public update_7(id: string, pluto_account?: string, payment_intent_update_request?: PaymentIntentUpdateRequest, _options?: Configuration): Observable<void | IPaymentIntent> {
        const requestContextPromise = this.requestFactory.update_7(id, pluto_account, payment_intent_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update_7(rsp)));
            }));
    }

}

import { PaymentLinksApiRequestFactory, PaymentLinksApiResponseProcessor} from "../apis/PaymentLinksApi";
export class ObservablePaymentLinksApi {
    private requestFactory: PaymentLinksApiRequestFactory;
    private responseProcessor: PaymentLinksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentLinksApiRequestFactory,
        responseProcessor?: PaymentLinksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentLinksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentLinksApiResponseProcessor();
    }

    /**
     * Delete payment link
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPaymentLink> {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete(rsp)));
            }));
    }

    /**
     * Delete payment link
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPaymentLink> {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete_1(rsp)));
            }));
    }

    /**
     * Create payment link
     * @param pluto_account 
     * @param payment_link_create_request 
     */
    public create(pluto_account?: string, payment_link_create_request?: PaymentLinkCreateRequest, _options?: Configuration): Observable<void | IPaymentLink> {
        const requestContextPromise = this.requestFactory.create(pluto_account, payment_link_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create payment link
     * @param pluto_account 
     * @param payment_link_create_request 
     */
    public create_2(pluto_account?: string, payment_link_create_request?: PaymentLinkCreateRequest, _options?: Configuration): Observable<void | IPaymentLink> {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, payment_link_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2(rsp)));
            }));
    }

    /**
     * List payment links
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | PaymentLinkListResponse> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List payment links
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | PaymentLinkListResponse> {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_3(rsp)));
            }));
    }

    /**
     * Retrieve payment link
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPaymentLink> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve payment link
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPaymentLink> {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_4(rsp)));
            }));
    }

    /**
     * Update payment link
     * @param id 
     * @param pluto_account 
     * @param payment_link_update_request 
     */
    public update(id: string, pluto_account?: string, payment_link_update_request?: PaymentLinkUpdateRequest, _options?: Configuration): Observable<void | IPaymentLink> {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, payment_link_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

    /**
     * Update payment link
     * @param id 
     * @param pluto_account 
     * @param payment_link_update_request 
     */
    public update_5(id: string, pluto_account?: string, payment_link_update_request?: PaymentLinkUpdateRequest, _options?: Configuration): Observable<void | IPaymentLink> {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, payment_link_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update_5(rsp)));
            }));
    }

}

import { PayoutWalletsApiRequestFactory, PayoutWalletsApiResponseProcessor} from "../apis/PayoutWalletsApi";
export class ObservablePayoutWalletsApi {
    private requestFactory: PayoutWalletsApiRequestFactory;
    private responseProcessor: PayoutWalletsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PayoutWalletsApiRequestFactory,
        responseProcessor?: PayoutWalletsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PayoutWalletsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PayoutWalletsApiResponseProcessor();
    }

    /**
     * Delete payout wallet
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPayoutWallet> {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete(rsp)));
            }));
    }

    /**
     * Delete payout wallet
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPayoutWallet> {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete_1(rsp)));
            }));
    }

    /**
     * Create payout wallet
     * @param pluto_account 
     * @param payout_wallet_create_request 
     */
    public create(pluto_account?: string, payout_wallet_create_request?: PayoutWalletCreateRequest, _options?: Configuration): Observable<void | IPayoutWallet> {
        const requestContextPromise = this.requestFactory.create(pluto_account, payout_wallet_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create payout wallet
     * @param pluto_account 
     * @param payout_wallet_create_request 
     */
    public create_2(pluto_account?: string, payout_wallet_create_request?: PayoutWalletCreateRequest, _options?: Configuration): Observable<void | IPayoutWallet> {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, payout_wallet_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2(rsp)));
            }));
    }

    /**
     * List payout wallets
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | PayoutWalletListResponse> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List payout wallets
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | PayoutWalletListResponse> {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_3(rsp)));
            }));
    }

    /**
     * Retrieve payout wallet
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPayoutWallet> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve payout wallet
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPayoutWallet> {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_4(rsp)));
            }));
    }

    /**
     * Update payout wallet
     * @param id 
     * @param pluto_account 
     * @param payout_wallet_update_request 
     */
    public update(id: string, pluto_account?: string, payout_wallet_update_request?: PayoutWalletUpdateRequest, _options?: Configuration): Observable<IPayoutWallet> {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, payout_wallet_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

    /**
     * Update payout wallet
     * @param id 
     * @param pluto_account 
     * @param payout_wallet_update_request 
     */
    public update_5(id: string, pluto_account?: string, payout_wallet_update_request?: PayoutWalletUpdateRequest, _options?: Configuration): Observable<IPayoutWallet> {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, payout_wallet_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update_5(rsp)));
            }));
    }

}

import { PricesApiRequestFactory, PricesApiResponseProcessor} from "../apis/PricesApi";
export class ObservablePricesApi {
    private requestFactory: PricesApiRequestFactory;
    private responseProcessor: PricesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PricesApiRequestFactory,
        responseProcessor?: PricesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PricesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PricesApiResponseProcessor();
    }

    /**
     * Delete price
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPrice> {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete(rsp)));
            }));
    }

    /**
     * Delete price
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPrice> {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete_1(rsp)));
            }));
    }

    /**
     * Create price
     * @param pluto_account 
     * @param price_create_request 
     */
    public create(pluto_account?: string, price_create_request?: PriceCreateRequest, _options?: Configuration): Observable<void | IPrice> {
        const requestContextPromise = this.requestFactory.create(pluto_account, price_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create price
     * @param pluto_account 
     * @param price_create_request 
     */
    public create_2(pluto_account?: string, price_create_request?: PriceCreateRequest, _options?: Configuration): Observable<void | IPrice> {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, price_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2(rsp)));
            }));
    }

    /**
     * List prices
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<PriceListResponse | void> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List prices
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<PriceListResponse | void> {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_3(rsp)));
            }));
    }

    /**
     * Retrieve price
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPrice> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve price
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPrice> {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_4(rsp)));
            }));
    }

    /**
     * Update price
     * @param id 
     * @param pluto_account 
     * @param price_update_request 
     */
    public update(id: string, pluto_account?: string, price_update_request?: PriceUpdateRequest, _options?: Configuration): Observable<void | IPrice> {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, price_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

    /**
     * Update price
     * @param id 
     * @param pluto_account 
     * @param price_update_request 
     */
    public update_5(id: string, pluto_account?: string, price_update_request?: PriceUpdateRequest, _options?: Configuration): Observable<void | IPrice> {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, price_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update_5(rsp)));
            }));
    }

}

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class ObservableProductsApi {
    private requestFactory: ProductsApiRequestFactory;
    private responseProcessor: ProductsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsApiResponseProcessor();
    }

    /**
     * Delete product
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IProduct> {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete(rsp)));
            }));
    }

    /**
     * Delete product
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IProduct> {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete_1(rsp)));
            }));
    }

    /**
     * Create product
     * @param pluto_account 
     * @param product_create_request 
     */
    public create(pluto_account?: string, product_create_request?: ProductCreateRequest, _options?: Configuration): Observable<void | IProduct> {
        const requestContextPromise = this.requestFactory.create(pluto_account, product_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create product
     * @param pluto_account 
     * @param product_create_request 
     */
    public create_2(pluto_account?: string, product_create_request?: ProductCreateRequest, _options?: Configuration): Observable<void | IProduct> {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, product_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2(rsp)));
            }));
    }

    /**
     * List products
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<ProductListResponse | void> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List products
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<ProductListResponse | void> {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_3(rsp)));
            }));
    }

    /**
     * Retrieve product
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IProduct> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve product
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IProduct> {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_4(rsp)));
            }));
    }

    /**
     * Update product
     * @param id 
     * @param pluto_account 
     * @param product_update_request 
     */
    public update(id: string, pluto_account?: string, product_update_request?: ProductUpdateRequest, _options?: Configuration): Observable<void | IProduct> {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, product_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

    /**
     * Update product
     * @param id 
     * @param pluto_account 
     * @param product_update_request 
     */
    public update_5(id: string, pluto_account?: string, product_update_request?: ProductUpdateRequest, _options?: Configuration): Observable<void | IProduct> {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, product_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update_5(rsp)));
            }));
    }

}

import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";
export class ObservableSubscriptionsApi {
    private requestFactory: SubscriptionsApiRequestFactory;
    private responseProcessor: SubscriptionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriptionsApiRequestFactory,
        responseProcessor?: SubscriptionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriptionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriptionsApiResponseProcessor();
    }

    /**
     * Delete subscription
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | ISubscription> {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete(rsp)));
            }));
    }

    /**
     * Delete subscription
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | ISubscription> {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete_1(rsp)));
            }));
    }

    /**
     * Create subscription
     * @param pluto_account 
     * @param subscription_create_request 
     */
    public create(pluto_account?: string, subscription_create_request?: SubscriptionCreateRequest, _options?: Configuration): Observable<void | ISubscription> {
        const requestContextPromise = this.requestFactory.create(pluto_account, subscription_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create subscription
     * @param pluto_account 
     * @param subscription_create_request 
     */
    public create_2(pluto_account?: string, subscription_create_request?: SubscriptionCreateRequest, _options?: Configuration): Observable<void | ISubscription> {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, subscription_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2(rsp)));
            }));
    }

    /**
     * List subscriptions
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | SubscriptionListResponse> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List subscriptions
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | SubscriptionListResponse> {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_3(rsp)));
            }));
    }

    /**
     * Retrieve subscription
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ISubscription> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve subscription
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ISubscription> {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_4(rsp)));
            }));
    }

    /**
     * Update subscription
     * @param id 
     * @param pluto_account 
     * @param subscription_update_request 
     */
    public update(id: string, pluto_account?: string, subscription_update_request?: SubscriptionUpdateRequest, _options?: Configuration): Observable<void | ISubscription> {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, subscription_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

    /**
     * Update subscription
     * @param id 
     * @param pluto_account 
     * @param subscription_update_request 
     */
    public update_5(id: string, pluto_account?: string, subscription_update_request?: SubscriptionUpdateRequest, _options?: Configuration): Observable<void | ISubscription> {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, subscription_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update_5(rsp)));
            }));
    }

}

import { TransfersApiRequestFactory, TransfersApiResponseProcessor} from "../apis/TransfersApi";
export class ObservableTransfersApi {
    private requestFactory: TransfersApiRequestFactory;
    private responseProcessor: TransfersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransfersApiRequestFactory,
        responseProcessor?: TransfersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransfersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransfersApiResponseProcessor();
    }

    /**
     * Create transfer
     * @param pluto_account 
     * @param transfer_create_request 
     */
    public create(pluto_account?: string, transfer_create_request?: TransferCreateRequest, _options?: Configuration): Observable<ITransfer | void> {
        const requestContextPromise = this.requestFactory.create(pluto_account, transfer_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create transfer
     * @param pluto_account 
     * @param transfer_create_request 
     */
    public create_1(pluto_account?: string, transfer_create_request?: TransferCreateRequest, _options?: Configuration): Observable<ITransfer | void> {
        const requestContextPromise = this.requestFactory.create_1(pluto_account, transfer_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_1(rsp)));
            }));
    }

    /**
     * List transfers
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | TransferListResponse> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List transfers
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | TransferListResponse> {
        const requestContextPromise = this.requestFactory.list_2(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_2(rsp)));
            }));
    }

    /**
     * Retrieve transfer
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ITransfer | void> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve transfer
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ITransfer | void> {
        const requestContextPromise = this.requestFactory.retrieve_3(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_3(rsp)));
            }));
    }

}

import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";
export class ObservableWalletsApi {
    private requestFactory: WalletsApiRequestFactory;
    private responseProcessor: WalletsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletsApiRequestFactory,
        responseProcessor?: WalletsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WalletsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WalletsApiResponseProcessor();
    }

    /**
     * Delete wallet
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IWallet> {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete(rsp)));
            }));
    }

    /**
     * Delete wallet
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IWallet> {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete_1(rsp)));
            }));
    }

    /**
     * Create wallet
     * @param pluto_account 
     * @param wallet_create_request 
     */
    public create(pluto_account?: string, wallet_create_request?: WalletCreateRequest, _options?: Configuration): Observable<void | IWallet> {
        const requestContextPromise = this.requestFactory.create(pluto_account, wallet_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create wallet
     * @param pluto_account 
     * @param wallet_create_request 
     */
    public create_2(pluto_account?: string, wallet_create_request?: WalletCreateRequest, _options?: Configuration): Observable<void | IWallet> {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, wallet_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2(rsp)));
            }));
    }

    /**
     * List wallets
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | WalletListResponse> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List wallets
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | WalletListResponse> {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_3(rsp)));
            }));
    }

    /**
     * Retrieve wallet
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IWallet> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve wallet
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IWallet> {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_4(rsp)));
            }));
    }

    /**
     * Update wallet
     * @param id 
     * @param pluto_account 
     * @param wallet_update_request 
     */
    public update(id: string, pluto_account?: string, wallet_update_request?: WalletUpdateRequest, _options?: Configuration): Observable<void | IWallet> {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, wallet_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

    /**
     * Update wallet
     * @param id 
     * @param pluto_account 
     * @param wallet_update_request 
     */
    public update_5(id: string, pluto_account?: string, wallet_update_request?: WalletUpdateRequest, _options?: Configuration): Observable<void | IWallet> {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, wallet_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update_5(rsp)));
            }));
    }

}

import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";
export class ObservableWebhooksApi {
    private requestFactory: WebhooksApiRequestFactory;
    private responseProcessor: WebhooksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhooksApiRequestFactory,
        responseProcessor?: WebhooksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhooksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhooksApiResponseProcessor();
    }

    /**
     * Delete webhook
     * @param id 
     * @param pluto_account 
     */
    public _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IWebhook> {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete(rsp)));
            }));
    }

    /**
     * Delete webhook
     * @param id 
     * @param pluto_account 
     */
    public _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IWebhook> {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor._delete_1(rsp)));
            }));
    }

    /**
     * Create webhook
     * @param pluto_account 
     * @param webhook_create_request 
     */
    public create(pluto_account?: string, webhook_create_request?: WebhookCreateRequest, _options?: Configuration): Observable<void | IWebhook> {
        const requestContextPromise = this.requestFactory.create(pluto_account, webhook_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Create webhook
     * @param pluto_account 
     * @param webhook_create_request 
     */
    public create_2(pluto_account?: string, webhook_create_request?: WebhookCreateRequest, _options?: Configuration): Observable<void | IWebhook> {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, webhook_create_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2(rsp)));
            }));
    }

    /**
     * List webhooks
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | WebhookListResponse> {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list(rsp)));
            }));
    }

    /**
     * List webhooks
     * @param pluto_account 
     * @param limit 
     * @param page 
     * @param sort 
     * @param expand 
     */
    public list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | WebhookListResponse> {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.list_3(rsp)));
            }));
    }

    /**
     * Retrieve webhook
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IWebhook> {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve(rsp)));
            }));
    }

    /**
     * Retrieve webhook
     * @param id 
     * @param pluto_account 
     * @param expand 
     */
    public retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IWebhook> {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrieve_4(rsp)));
            }));
    }

    /**
     * Update webhook
     * @param id 
     * @param pluto_account 
     * @param webhook_update_request 
     */
    public update(id: string, pluto_account?: string, webhook_update_request?: WebhookUpdateRequest, _options?: Configuration): Observable<void | IWebhook> {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, webhook_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

    /**
     * Update webhook
     * @param id 
     * @param pluto_account 
     * @param webhook_update_request 
     */
    public update_5(id: string, pluto_account?: string, webhook_update_request?: WebhookUpdateRequest, _options?: Configuration): Observable<void | IWebhook> {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, webhook_update_request, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update_5(rsp)));
            }));
    }

}
