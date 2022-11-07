import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { AccountConnectRequest } from '../models/AccountConnectRequest';
import { AccountCreateRequest } from '../models/AccountCreateRequest';
import { AccountDashboardAccessRequest } from '../models/AccountDashboardAccessRequest';
import { AccountListResponse } from '../models/AccountListResponse';
import { AccountUpdateRequest } from '../models/AccountUpdateRequest';
import { CheckoutCreateRequest } from '../models/CheckoutCreateRequest';
import { CheckoutListResponse } from '../models/CheckoutListResponse';
import { CouponCreateRequest } from '../models/CouponCreateRequest';
import { CouponListResponse } from '../models/CouponListResponse';
import { CouponUpdateRequest } from '../models/CouponUpdateRequest';
import { CustomerCreateRequest } from '../models/CustomerCreateRequest';
import { CustomerListResponse } from '../models/CustomerListResponse';
import { CustomerUpdateRequest } from '../models/CustomerUpdateRequest';
import { FeeCreateRequest } from '../models/FeeCreateRequest';
import { FeeListResponse } from '../models/FeeListResponse';
import { IAccount } from '../models/IAccount';
import { ICheckout } from '../models/ICheckout';
import { ICoupon } from '../models/ICoupon';
import { ICustomer } from '../models/ICustomer';
import { IFee } from '../models/IFee';
import { IInvoice } from '../models/IInvoice';
import { ILog } from '../models/ILog';
import { IPaymentIntent } from '../models/IPaymentIntent';
import { IPaymentLink } from '../models/IPaymentLink';
import { IPayoutWallet } from '../models/IPayoutWallet';
import { IPrice } from '../models/IPrice';
import { IProduct } from '../models/IProduct';
import { ISubscription } from '../models/ISubscription';
import { ITransfer } from '../models/ITransfer';
import { IWallet } from '../models/IWallet';
import { IWebhook } from '../models/IWebhook';
import { InvoiceCreateRequest } from '../models/InvoiceCreateRequest';
import { InvoiceListResponse } from '../models/InvoiceListResponse';
import { InvoicePayRequest } from '../models/InvoicePayRequest';
import { InvoiceUpdateRequest } from '../models/InvoiceUpdateRequest';
import { LogListResponse } from '../models/LogListResponse';
import { PaymentIntentCreateRequest } from '../models/PaymentIntentCreateRequest';
import { PaymentIntentListResponse } from '../models/PaymentIntentListResponse';
import { PaymentIntentUpdateRequest } from '../models/PaymentIntentUpdateRequest';
import { PaymentLinkCreateRequest } from '../models/PaymentLinkCreateRequest';
import { PaymentLinkListResponse } from '../models/PaymentLinkListResponse';
import { PaymentLinkUpdateRequest } from '../models/PaymentLinkUpdateRequest';
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
import { SubscriptionUpdateRequest } from '../models/SubscriptionUpdateRequest';
import { TransferCreateRequest } from '../models/TransferCreateRequest';
import { TransferListResponse } from '../models/TransferListResponse';
import { WalletCreateRequest } from '../models/WalletCreateRequest';
import { WalletListResponse } from '../models/WalletListResponse';
import { WalletUpdateRequest } from '../models/WalletUpdateRequest';
import { WebhookCreateRequest } from '../models/WebhookCreateRequest';
import { WebhookListResponse } from '../models/WebhookListResponse';
import { WebhookUpdateRequest } from '../models/WebhookUpdateRequest';
import { AccountsApiRequestFactory, AccountsApiResponseProcessor } from "../apis/AccountsApi";
export declare class ObservableAccountsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor);
    connect(id: string, pluto_account?: string, account_connect_request?: AccountConnectRequest, _options?: Configuration): Observable<void | IAccount>;
    connect_1(id: string, pluto_account?: string, account_connect_request?: AccountConnectRequest, _options?: Configuration): Observable<void | IAccount>;
    create(pluto_account?: string, account_create_request?: AccountCreateRequest, _options?: Configuration): Observable<void | IAccount>;
    create_2(pluto_account?: string, account_create_request?: AccountCreateRequest, _options?: Configuration): Observable<void | IAccount>;
    dashboardAccess(id: string, pluto_account?: string, expand?: string, account_dashboard_access_request?: AccountDashboardAccessRequest, _options?: Configuration): Observable<void | IAccount>;
    dashboardAccess_3(id: string, pluto_account?: string, expand?: string, account_dashboard_access_request?: AccountDashboardAccessRequest, _options?: Configuration): Observable<void | IAccount>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<AccountListResponse | void>;
    list_4(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<AccountListResponse | void>;
    patch(id: string, pluto_account?: string, account_update_request?: AccountUpdateRequest, _options?: Configuration): Observable<void | IAccount>;
    patch_5(id: string, pluto_account?: string, account_update_request?: AccountUpdateRequest, _options?: Configuration): Observable<void | IAccount>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IAccount>;
    retrieve_6(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IAccount>;
}
import { CheckoutsApiRequestFactory, CheckoutsApiResponseProcessor } from "../apis/CheckoutsApi";
export declare class ObservableCheckoutsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CheckoutsApiRequestFactory, responseProcessor?: CheckoutsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | ICheckout>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | ICheckout>;
    create(pluto_account?: string, checkout_create_request?: CheckoutCreateRequest, _options?: Configuration): Observable<void | ICheckout>;
    create_2(pluto_account?: string, checkout_create_request?: CheckoutCreateRequest, _options?: Configuration): Observable<void | ICheckout>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<CheckoutListResponse | void>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<CheckoutListResponse | void>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ICheckout>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ICheckout>;
}
import { CouponsApiRequestFactory, CouponsApiResponseProcessor } from "../apis/CouponsApi";
export declare class ObservableCouponsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CouponsApiRequestFactory, responseProcessor?: CouponsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<ICoupon | void>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<ICoupon | void>;
    create(pluto_account?: string, coupon_create_request?: CouponCreateRequest, _options?: Configuration): Observable<ICoupon | void>;
    create_2(pluto_account?: string, coupon_create_request?: CouponCreateRequest, _options?: Configuration): Observable<ICoupon | void>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | CouponListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | CouponListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ICoupon | void>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ICoupon | void>;
    update(id: string, pluto_account?: string, coupon_update_request?: CouponUpdateRequest, _options?: Configuration): Observable<ICoupon | void>;
    update_5(id: string, pluto_account?: string, coupon_update_request?: CouponUpdateRequest, _options?: Configuration): Observable<ICoupon | void>;
}
import { CustomersApiRequestFactory, CustomersApiResponseProcessor } from "../apis/CustomersApi";
export declare class ObservableCustomersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor);
    create(pluto_account?: string, customer_create_request?: CustomerCreateRequest, _options?: Configuration): Observable<void | ICustomer>;
    create_1(pluto_account?: string, customer_create_request?: CustomerCreateRequest, _options?: Configuration): Observable<void | ICustomer>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, email?: string, _options?: Configuration): Observable<void | CustomerListResponse>;
    list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, email?: string, _options?: Configuration): Observable<void | CustomerListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ICustomer>;
    retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ICustomer>;
    update(id: string, pluto_account?: string, customer_update_request?: CustomerUpdateRequest, _options?: Configuration): Observable<void | ICustomer>;
    update_4(id: string, pluto_account?: string, customer_update_request?: CustomerUpdateRequest, _options?: Configuration): Observable<void | ICustomer>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export declare class ObservableFeesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor);
    create(pluto_account?: string, fee_create_request?: FeeCreateRequest, _options?: Configuration): Observable<void | IFee>;
    create_1(pluto_account?: string, fee_create_request?: FeeCreateRequest, _options?: Configuration): Observable<void | IFee>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | FeeListResponse>;
    list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | FeeListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IFee>;
    retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IFee>;
}
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor } from "../apis/InvoicesApi";
export declare class ObservableInvoicesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<IInvoice | void>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<IInvoice | void>;
    create(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Observable<IInvoice | void>;
    create_2(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Observable<IInvoice | void>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | InvoiceListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | InvoiceListResponse>;
    pay(id: string, pluto_account?: string, invoice_pay_request?: InvoicePayRequest, _options?: Configuration): Observable<void | IPaymentIntent>;
    pay_4(id: string, pluto_account?: string, invoice_pay_request?: InvoicePayRequest, _options?: Configuration): Observable<void | IPaymentIntent>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IInvoice | void>;
    retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IInvoice | void>;
    update(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Observable<IInvoice | void>;
    update_6(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Observable<IInvoice | void>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export declare class ObservableLogsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    list(pluto_account?: string, _options?: Configuration): Observable<LogListResponse | void>;
    list_1(pluto_account?: string, _options?: Configuration): Observable<LogListResponse | void>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ILog>;
    retrieve_2(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ILog>;
}
import { PaymentIntentsApiRequestFactory, PaymentIntentsApiResponseProcessor } from "../apis/PaymentIntentsApi";
export declare class ObservablePaymentIntentsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PaymentIntentsApiRequestFactory, responseProcessor?: PaymentIntentsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPaymentIntent>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPaymentIntent>;
    create(pluto_account?: string, payment_intent_create_request?: PaymentIntentCreateRequest, _options?: Configuration): Observable<void | IPaymentIntent>;
    create_2(pluto_account?: string, payment_intent_create_request?: PaymentIntentCreateRequest, _options?: Configuration): Observable<void | IPaymentIntent>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, status?: string, customer?: string, _options?: Configuration): Observable<PaymentIntentListResponse | void>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, status?: string, customer?: string, _options?: Configuration): Observable<PaymentIntentListResponse | void>;
    poll(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPaymentIntent>;
    poll_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPaymentIntent>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPaymentIntent>;
    retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPaymentIntent>;
    sendReceipt(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPaymentIntent>;
    sendReceipt_6(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPaymentIntent>;
    update(id: string, pluto_account?: string, payment_intent_update_request?: PaymentIntentUpdateRequest, _options?: Configuration): Observable<void | IPaymentIntent>;
    update_7(id: string, pluto_account?: string, payment_intent_update_request?: PaymentIntentUpdateRequest, _options?: Configuration): Observable<void | IPaymentIntent>;
}
import { PaymentLinksApiRequestFactory, PaymentLinksApiResponseProcessor } from "../apis/PaymentLinksApi";
export declare class ObservablePaymentLinksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PaymentLinksApiRequestFactory, responseProcessor?: PaymentLinksApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPaymentLink>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPaymentLink>;
    create(pluto_account?: string, payment_link_create_request?: PaymentLinkCreateRequest, _options?: Configuration): Observable<void | IPaymentLink>;
    create_2(pluto_account?: string, payment_link_create_request?: PaymentLinkCreateRequest, _options?: Configuration): Observable<void | IPaymentLink>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | PaymentLinkListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | PaymentLinkListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPaymentLink>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPaymentLink>;
    update(id: string, pluto_account?: string, payment_link_update_request?: PaymentLinkUpdateRequest, _options?: Configuration): Observable<void | IPaymentLink>;
    update_5(id: string, pluto_account?: string, payment_link_update_request?: PaymentLinkUpdateRequest, _options?: Configuration): Observable<void | IPaymentLink>;
}
import { PayoutWalletsApiRequestFactory, PayoutWalletsApiResponseProcessor } from "../apis/PayoutWalletsApi";
export declare class ObservablePayoutWalletsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PayoutWalletsApiRequestFactory, responseProcessor?: PayoutWalletsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPayoutWallet>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPayoutWallet>;
    create(pluto_account?: string, payout_wallet_create_request?: PayoutWalletCreateRequest, _options?: Configuration): Observable<void | IPayoutWallet>;
    create_2(pluto_account?: string, payout_wallet_create_request?: PayoutWalletCreateRequest, _options?: Configuration): Observable<void | IPayoutWallet>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | PayoutWalletListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | PayoutWalletListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPayoutWallet>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPayoutWallet>;
    update(id: string, pluto_account?: string, payout_wallet_update_request?: PayoutWalletUpdateRequest, _options?: Configuration): Observable<IPayoutWallet>;
    update_5(id: string, pluto_account?: string, payout_wallet_update_request?: PayoutWalletUpdateRequest, _options?: Configuration): Observable<IPayoutWallet>;
}
import { PricesApiRequestFactory, PricesApiResponseProcessor } from "../apis/PricesApi";
export declare class ObservablePricesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PricesApiRequestFactory, responseProcessor?: PricesApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPrice>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IPrice>;
    create(pluto_account?: string, price_create_request?: PriceCreateRequest, _options?: Configuration): Observable<void | IPrice>;
    create_2(pluto_account?: string, price_create_request?: PriceCreateRequest, _options?: Configuration): Observable<void | IPrice>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<PriceListResponse | void>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<PriceListResponse | void>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPrice>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IPrice>;
    update(id: string, pluto_account?: string, price_update_request?: PriceUpdateRequest, _options?: Configuration): Observable<void | IPrice>;
    update_5(id: string, pluto_account?: string, price_update_request?: PriceUpdateRequest, _options?: Configuration): Observable<void | IPrice>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export declare class ObservableProductsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IProduct>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IProduct>;
    create(pluto_account?: string, product_create_request?: ProductCreateRequest, _options?: Configuration): Observable<void | IProduct>;
    create_2(pluto_account?: string, product_create_request?: ProductCreateRequest, _options?: Configuration): Observable<void | IProduct>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<ProductListResponse | void>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<ProductListResponse | void>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IProduct>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IProduct>;
    update(id: string, pluto_account?: string, product_update_request?: ProductUpdateRequest, _options?: Configuration): Observable<void | IProduct>;
    update_5(id: string, pluto_account?: string, product_update_request?: ProductUpdateRequest, _options?: Configuration): Observable<void | IProduct>;
}
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor } from "../apis/SubscriptionsApi";
export declare class ObservableSubscriptionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | ISubscription>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | ISubscription>;
    create(pluto_account?: string, subscription_create_request?: SubscriptionCreateRequest, _options?: Configuration): Observable<void | ISubscription>;
    create_2(pluto_account?: string, subscription_create_request?: SubscriptionCreateRequest, _options?: Configuration): Observable<void | ISubscription>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | SubscriptionListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | SubscriptionListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ISubscription>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | ISubscription>;
    update(id: string, pluto_account?: string, subscription_update_request?: SubscriptionUpdateRequest, _options?: Configuration): Observable<void | ISubscription>;
    update_5(id: string, pluto_account?: string, subscription_update_request?: SubscriptionUpdateRequest, _options?: Configuration): Observable<void | ISubscription>;
}
import { TransfersApiRequestFactory, TransfersApiResponseProcessor } from "../apis/TransfersApi";
export declare class ObservableTransfersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TransfersApiRequestFactory, responseProcessor?: TransfersApiResponseProcessor);
    create(pluto_account?: string, transfer_create_request?: TransferCreateRequest, _options?: Configuration): Observable<ITransfer | void>;
    create_1(pluto_account?: string, transfer_create_request?: TransferCreateRequest, _options?: Configuration): Observable<ITransfer | void>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | TransferListResponse>;
    list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | TransferListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ITransfer | void>;
    retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ITransfer | void>;
}
import { WalletsApiRequestFactory, WalletsApiResponseProcessor } from "../apis/WalletsApi";
export declare class ObservableWalletsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IWallet>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IWallet>;
    create(pluto_account?: string, wallet_create_request?: WalletCreateRequest, _options?: Configuration): Observable<void | IWallet>;
    create_2(pluto_account?: string, wallet_create_request?: WalletCreateRequest, _options?: Configuration): Observable<void | IWallet>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | WalletListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | WalletListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IWallet>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IWallet>;
    update(id: string, pluto_account?: string, wallet_update_request?: WalletUpdateRequest, _options?: Configuration): Observable<void | IWallet>;
    update_5(id: string, pluto_account?: string, wallet_update_request?: WalletUpdateRequest, _options?: Configuration): Observable<void | IWallet>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export declare class ObservableWebhooksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IWebhook>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<void | IWebhook>;
    create(pluto_account?: string, webhook_create_request?: WebhookCreateRequest, _options?: Configuration): Observable<void | IWebhook>;
    create_2(pluto_account?: string, webhook_create_request?: WebhookCreateRequest, _options?: Configuration): Observable<void | IWebhook>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | WebhookListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<void | WebhookListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IWebhook>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<void | IWebhook>;
    update(id: string, pluto_account?: string, webhook_update_request?: WebhookUpdateRequest, _options?: Configuration): Observable<void | IWebhook>;
    update_5(id: string, pluto_account?: string, webhook_update_request?: WebhookUpdateRequest, _options?: Configuration): Observable<void | IWebhook>;
}
