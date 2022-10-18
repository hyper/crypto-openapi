import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { AccountConnectRequest } from '../models/AccountConnectRequest';
import { AccountCreateRequest } from '../models/AccountCreateRequest';
import { AccountDashboardAccessRequest } from '../models/AccountDashboardAccessRequest';
import { AccountDashboardAccessResponse } from '../models/AccountDashboardAccessResponse';
import { AccountListResponse } from '../models/AccountListResponse';
import { AccountUpdateRequest } from '../models/AccountUpdateRequest';
import { CheckoutCreateRequest } from '../models/CheckoutCreateRequest';
import { CheckoutListResponse } from '../models/CheckoutListResponse';
import { CustomerCreateRequest } from '../models/CustomerCreateRequest';
import { CustomerListResponse } from '../models/CustomerListResponse';
import { CustomerUpdateRequest } from '../models/CustomerUpdateRequest';
import { FeeCreateRequest } from '../models/FeeCreateRequest';
import { FeeListResponse } from '../models/FeeListResponse';
import { IAccount } from '../models/IAccount';
import { ICheckout } from '../models/ICheckout';
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
    connect(id: string, pluto_account?: string, account_connect_request?: AccountConnectRequest, _options?: Configuration): Observable<IAccount>;
    connect_1(id: string, pluto_account?: string, account_connect_request?: AccountConnectRequest, _options?: Configuration): Observable<IAccount>;
    create(pluto_account?: string, account_create_request?: AccountCreateRequest, _options?: Configuration): Observable<IAccount>;
    create_2(pluto_account?: string, account_create_request?: AccountCreateRequest, _options?: Configuration): Observable<IAccount>;
    dashboardAccess(id: string, pluto_account?: string, expand?: string, account_dashboard_access_request?: AccountDashboardAccessRequest, _options?: Configuration): Observable<AccountDashboardAccessResponse>;
    dashboardAccess_3(id: string, pluto_account?: string, expand?: string, account_dashboard_access_request?: AccountDashboardAccessRequest, _options?: Configuration): Observable<AccountDashboardAccessResponse>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<AccountListResponse>;
    list_4(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<AccountListResponse>;
    patch(id: string, pluto_account?: string, account_update_request?: AccountUpdateRequest, _options?: Configuration): Observable<IAccount>;
    patch_5(id: string, pluto_account?: string, account_update_request?: AccountUpdateRequest, _options?: Configuration): Observable<IAccount>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IAccount>;
    retrieve_6(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IAccount>;
}
import { CheckoutsApiRequestFactory, CheckoutsApiResponseProcessor } from "../apis/CheckoutsApi";
export declare class ObservableCheckoutsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CheckoutsApiRequestFactory, responseProcessor?: CheckoutsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<ICheckout>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<ICheckout>;
    create(pluto_account?: string, checkout_create_request?: CheckoutCreateRequest, _options?: Configuration): Observable<ICheckout>;
    create_2(pluto_account?: string, checkout_create_request?: CheckoutCreateRequest, _options?: Configuration): Observable<ICheckout>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<CheckoutListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<CheckoutListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ICheckout>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ICheckout>;
}
import { CustomersApiRequestFactory, CustomersApiResponseProcessor } from "../apis/CustomersApi";
export declare class ObservableCustomersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor);
    create(pluto_account?: string, customer_create_request?: CustomerCreateRequest, _options?: Configuration): Observable<ICustomer>;
    create_1(pluto_account?: string, customer_create_request?: CustomerCreateRequest, _options?: Configuration): Observable<ICustomer>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, email?: string, _options?: Configuration): Observable<CustomerListResponse>;
    list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, email?: string, _options?: Configuration): Observable<CustomerListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ICustomer>;
    retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ICustomer>;
    update(id: string, pluto_account?: string, customer_update_request?: CustomerUpdateRequest, _options?: Configuration): Observable<ICustomer>;
    update_4(id: string, pluto_account?: string, customer_update_request?: CustomerUpdateRequest, _options?: Configuration): Observable<ICustomer>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export declare class ObservableFeesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor);
    create(pluto_account?: string, fee_create_request?: FeeCreateRequest, _options?: Configuration): Observable<IFee>;
    create_1(pluto_account?: string, fee_create_request?: FeeCreateRequest, _options?: Configuration): Observable<IFee>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<FeeListResponse>;
    list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<FeeListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IFee>;
    retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IFee>;
}
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor } from "../apis/InvoicesApi";
export declare class ObservableInvoicesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<IInvoice>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<IInvoice>;
    create(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Observable<IInvoice>;
    create_2(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Observable<IInvoice>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<InvoiceListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<InvoiceListResponse>;
    pay(id: string, pluto_account?: string, _options?: Configuration): Observable<IPaymentIntent>;
    pay_4(id: string, pluto_account?: string, _options?: Configuration): Observable<IPaymentIntent>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IInvoice>;
    retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IInvoice>;
    update(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Observable<IInvoice>;
    update_6(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Observable<IInvoice>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export declare class ObservableLogsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    list(pluto_account?: string, _options?: Configuration): Observable<LogListResponse>;
    list_1(pluto_account?: string, _options?: Configuration): Observable<LogListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ILog>;
    retrieve_2(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ILog>;
}
import { PaymentIntentsApiRequestFactory, PaymentIntentsApiResponseProcessor } from "../apis/PaymentIntentsApi";
export declare class ObservablePaymentIntentsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PaymentIntentsApiRequestFactory, responseProcessor?: PaymentIntentsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<IPaymentIntent>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<IPaymentIntent>;
    create(pluto_account?: string, payment_intent_create_request?: PaymentIntentCreateRequest, _options?: Configuration): Observable<IPaymentIntent>;
    create_2(pluto_account?: string, payment_intent_create_request?: PaymentIntentCreateRequest, _options?: Configuration): Observable<IPaymentIntent>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, status?: string, customer?: string, _options?: Configuration): Observable<PaymentIntentListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, status?: string, customer?: string, _options?: Configuration): Observable<PaymentIntentListResponse>;
    poll(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IPaymentIntent>;
    poll_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IPaymentIntent>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IPaymentIntent>;
    retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IPaymentIntent>;
    sendReceipt(id: string, pluto_account?: string, _options?: Configuration): Observable<IPaymentIntent>;
    sendReceipt_6(id: string, pluto_account?: string, _options?: Configuration): Observable<IPaymentIntent>;
    update(id: string, pluto_account?: string, payment_intent_update_request?: PaymentIntentUpdateRequest, _options?: Configuration): Observable<IPaymentIntent>;
    update_7(id: string, pluto_account?: string, payment_intent_update_request?: PaymentIntentUpdateRequest, _options?: Configuration): Observable<IPaymentIntent>;
}
import { PaymentLinksApiRequestFactory, PaymentLinksApiResponseProcessor } from "../apis/PaymentLinksApi";
export declare class ObservablePaymentLinksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PaymentLinksApiRequestFactory, responseProcessor?: PaymentLinksApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<IPaymentLink>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<IPaymentLink>;
    create(pluto_account?: string, payment_link_create_request?: PaymentLinkCreateRequest, _options?: Configuration): Observable<IPaymentLink>;
    create_2(pluto_account?: string, payment_link_create_request?: PaymentLinkCreateRequest, _options?: Configuration): Observable<IPaymentLink>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<PaymentLinkListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<PaymentLinkListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IPaymentLink>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IPaymentLink>;
    update(id: string, pluto_account?: string, payment_link_update_request?: PaymentLinkUpdateRequest, _options?: Configuration): Observable<IPaymentLink>;
    update_5(id: string, pluto_account?: string, payment_link_update_request?: PaymentLinkUpdateRequest, _options?: Configuration): Observable<IPaymentLink>;
}
import { PayoutWalletsApiRequestFactory, PayoutWalletsApiResponseProcessor } from "../apis/PayoutWalletsApi";
export declare class ObservablePayoutWalletsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PayoutWalletsApiRequestFactory, responseProcessor?: PayoutWalletsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<IPayoutWallet>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<IPayoutWallet>;
    create(pluto_account?: string, payout_wallet_create_request?: PayoutWalletCreateRequest, _options?: Configuration): Observable<IPayoutWallet>;
    create_2(pluto_account?: string, payout_wallet_create_request?: PayoutWalletCreateRequest, _options?: Configuration): Observable<IPayoutWallet>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<PayoutWalletListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<PayoutWalletListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IPayoutWallet>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IPayoutWallet>;
    update(id: string, pluto_account?: string, payout_wallet_update_request?: PayoutWalletUpdateRequest, _options?: Configuration): Observable<IPayoutWallet>;
    update_5(id: string, pluto_account?: string, payout_wallet_update_request?: PayoutWalletUpdateRequest, _options?: Configuration): Observable<IPayoutWallet>;
}
import { PricesApiRequestFactory, PricesApiResponseProcessor } from "../apis/PricesApi";
export declare class ObservablePricesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PricesApiRequestFactory, responseProcessor?: PricesApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<IPrice>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<IPrice>;
    create(pluto_account?: string, price_create_request?: PriceCreateRequest, _options?: Configuration): Observable<IPrice>;
    create_2(pluto_account?: string, price_create_request?: PriceCreateRequest, _options?: Configuration): Observable<IPrice>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<PriceListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<PriceListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IPrice>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IPrice>;
    update(id: string, pluto_account?: string, price_update_request?: PriceUpdateRequest, _options?: Configuration): Observable<IPrice>;
    update_5(id: string, pluto_account?: string, price_update_request?: PriceUpdateRequest, _options?: Configuration): Observable<IPrice>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export declare class ObservableProductsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<IProduct>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<IProduct>;
    create(pluto_account?: string, product_create_request?: ProductCreateRequest, _options?: Configuration): Observable<IProduct>;
    create_2(pluto_account?: string, product_create_request?: ProductCreateRequest, _options?: Configuration): Observable<IProduct>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<ProductListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<ProductListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IProduct>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IProduct>;
    update(id: string, pluto_account?: string, product_update_request?: ProductUpdateRequest, _options?: Configuration): Observable<IProduct>;
    update_5(id: string, pluto_account?: string, product_update_request?: ProductUpdateRequest, _options?: Configuration): Observable<IProduct>;
}
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor } from "../apis/SubscriptionsApi";
export declare class ObservableSubscriptionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<ISubscription>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<ISubscription>;
    create(pluto_account?: string, subscription_create_request?: SubscriptionCreateRequest, _options?: Configuration): Observable<ISubscription>;
    create_2(pluto_account?: string, subscription_create_request?: SubscriptionCreateRequest, _options?: Configuration): Observable<ISubscription>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<SubscriptionListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<SubscriptionListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ISubscription>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ISubscription>;
    update(id: string, pluto_account?: string, subscription_update_request?: SubscriptionUpdateRequest, _options?: Configuration): Observable<ISubscription>;
    update_5(id: string, pluto_account?: string, subscription_update_request?: SubscriptionUpdateRequest, _options?: Configuration): Observable<ISubscription>;
}
import { TransfersApiRequestFactory, TransfersApiResponseProcessor } from "../apis/TransfersApi";
export declare class ObservableTransfersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TransfersApiRequestFactory, responseProcessor?: TransfersApiResponseProcessor);
    create(pluto_account?: string, transfer_create_request?: TransferCreateRequest, _options?: Configuration): Observable<ITransfer>;
    create_1(pluto_account?: string, transfer_create_request?: TransferCreateRequest, _options?: Configuration): Observable<ITransfer>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<TransferListResponse>;
    list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<TransferListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ITransfer>;
    retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<ITransfer>;
}
import { WalletsApiRequestFactory, WalletsApiResponseProcessor } from "../apis/WalletsApi";
export declare class ObservableWalletsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<IWallet>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<IWallet>;
    create(pluto_account?: string, wallet_create_request?: WalletCreateRequest, _options?: Configuration): Observable<IWallet>;
    create_2(pluto_account?: string, wallet_create_request?: WalletCreateRequest, _options?: Configuration): Observable<IWallet>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<WalletListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<WalletListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IWallet>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IWallet>;
    update(id: string, pluto_account?: string, wallet_update_request?: WalletUpdateRequest, _options?: Configuration): Observable<IWallet>;
    update_5(id: string, pluto_account?: string, wallet_update_request?: WalletUpdateRequest, _options?: Configuration): Observable<IWallet>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export declare class ObservableWebhooksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Observable<IWebhook>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Observable<IWebhook>;
    create(pluto_account?: string, webhook_create_request?: WebhookCreateRequest, _options?: Configuration): Observable<IWebhook>;
    create_2(pluto_account?: string, webhook_create_request?: WebhookCreateRequest, _options?: Configuration): Observable<IWebhook>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<WebhookListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Observable<WebhookListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IWebhook>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Observable<IWebhook>;
    update(id: string, pluto_account?: string, webhook_update_request?: WebhookUpdateRequest, _options?: Configuration): Observable<IWebhook>;
    update_5(id: string, pluto_account?: string, webhook_update_request?: WebhookUpdateRequest, _options?: Configuration): Observable<IWebhook>;
}
