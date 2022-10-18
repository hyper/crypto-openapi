import { Configuration } from '../configuration';
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
export declare class PromiseAccountsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor);
    connect(id: string, pluto_account?: string, account_connect_request?: AccountConnectRequest, _options?: Configuration): Promise<IAccount>;
    connect_1(id: string, pluto_account?: string, account_connect_request?: AccountConnectRequest, _options?: Configuration): Promise<IAccount>;
    create(pluto_account?: string, account_create_request?: AccountCreateRequest, _options?: Configuration): Promise<IAccount>;
    create_2(pluto_account?: string, account_create_request?: AccountCreateRequest, _options?: Configuration): Promise<IAccount>;
    dashboardAccess(id: string, pluto_account?: string, expand?: string, account_dashboard_access_request?: AccountDashboardAccessRequest, _options?: Configuration): Promise<AccountDashboardAccessResponse>;
    dashboardAccess_3(id: string, pluto_account?: string, expand?: string, account_dashboard_access_request?: AccountDashboardAccessRequest, _options?: Configuration): Promise<AccountDashboardAccessResponse>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<AccountListResponse>;
    list_4(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<AccountListResponse>;
    patch(id: string, pluto_account?: string, account_update_request?: AccountUpdateRequest, _options?: Configuration): Promise<IAccount>;
    patch_5(id: string, pluto_account?: string, account_update_request?: AccountUpdateRequest, _options?: Configuration): Promise<IAccount>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IAccount>;
    retrieve_6(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IAccount>;
}
import { CheckoutsApiRequestFactory, CheckoutsApiResponseProcessor } from "../apis/CheckoutsApi";
export declare class PromiseCheckoutsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CheckoutsApiRequestFactory, responseProcessor?: CheckoutsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<ICheckout>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<ICheckout>;
    create(pluto_account?: string, checkout_create_request?: CheckoutCreateRequest, _options?: Configuration): Promise<ICheckout>;
    create_2(pluto_account?: string, checkout_create_request?: CheckoutCreateRequest, _options?: Configuration): Promise<ICheckout>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<CheckoutListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<CheckoutListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ICheckout>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ICheckout>;
}
import { CustomersApiRequestFactory, CustomersApiResponseProcessor } from "../apis/CustomersApi";
export declare class PromiseCustomersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor);
    create(pluto_account?: string, customer_create_request?: CustomerCreateRequest, _options?: Configuration): Promise<ICustomer>;
    create_1(pluto_account?: string, customer_create_request?: CustomerCreateRequest, _options?: Configuration): Promise<ICustomer>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, email?: string, _options?: Configuration): Promise<CustomerListResponse>;
    list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, email?: string, _options?: Configuration): Promise<CustomerListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ICustomer>;
    retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ICustomer>;
    update(id: string, pluto_account?: string, customer_update_request?: CustomerUpdateRequest, _options?: Configuration): Promise<ICustomer>;
    update_4(id: string, pluto_account?: string, customer_update_request?: CustomerUpdateRequest, _options?: Configuration): Promise<ICustomer>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export declare class PromiseFeesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor);
    create(pluto_account?: string, fee_create_request?: FeeCreateRequest, _options?: Configuration): Promise<IFee>;
    create_1(pluto_account?: string, fee_create_request?: FeeCreateRequest, _options?: Configuration): Promise<IFee>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<FeeListResponse>;
    list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<FeeListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IFee>;
    retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IFee>;
}
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor } from "../apis/InvoicesApi";
export declare class PromiseInvoicesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<IInvoice>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<IInvoice>;
    create(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Promise<IInvoice>;
    create_2(pluto_account?: string, invoice_create_request?: InvoiceCreateRequest, _options?: Configuration): Promise<IInvoice>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<InvoiceListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<InvoiceListResponse>;
    pay(id: string, pluto_account?: string, _options?: Configuration): Promise<IPaymentIntent>;
    pay_4(id: string, pluto_account?: string, _options?: Configuration): Promise<IPaymentIntent>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IInvoice>;
    retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IInvoice>;
    update(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Promise<IInvoice>;
    update_6(id: string, pluto_account?: string, invoice_update_request?: InvoiceUpdateRequest, _options?: Configuration): Promise<IInvoice>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export declare class PromiseLogsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    list(pluto_account?: string, _options?: Configuration): Promise<LogListResponse>;
    list_1(pluto_account?: string, _options?: Configuration): Promise<LogListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ILog>;
    retrieve_2(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ILog>;
}
import { PaymentIntentsApiRequestFactory, PaymentIntentsApiResponseProcessor } from "../apis/PaymentIntentsApi";
export declare class PromisePaymentIntentsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentIntentsApiRequestFactory, responseProcessor?: PaymentIntentsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<IPaymentIntent>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<IPaymentIntent>;
    create(pluto_account?: string, payment_intent_create_request?: PaymentIntentCreateRequest, _options?: Configuration): Promise<IPaymentIntent>;
    create_2(pluto_account?: string, payment_intent_create_request?: PaymentIntentCreateRequest, _options?: Configuration): Promise<IPaymentIntent>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, status?: string, customer?: string, _options?: Configuration): Promise<PaymentIntentListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, status?: string, customer?: string, _options?: Configuration): Promise<PaymentIntentListResponse>;
    poll(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IPaymentIntent>;
    poll_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IPaymentIntent>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IPaymentIntent>;
    retrieve_5(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IPaymentIntent>;
    sendReceipt(id: string, pluto_account?: string, _options?: Configuration): Promise<IPaymentIntent>;
    sendReceipt_6(id: string, pluto_account?: string, _options?: Configuration): Promise<IPaymentIntent>;
    update(id: string, pluto_account?: string, payment_intent_update_request?: PaymentIntentUpdateRequest, _options?: Configuration): Promise<IPaymentIntent>;
    update_7(id: string, pluto_account?: string, payment_intent_update_request?: PaymentIntentUpdateRequest, _options?: Configuration): Promise<IPaymentIntent>;
}
import { PaymentLinksApiRequestFactory, PaymentLinksApiResponseProcessor } from "../apis/PaymentLinksApi";
export declare class PromisePaymentLinksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentLinksApiRequestFactory, responseProcessor?: PaymentLinksApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<IPaymentLink>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<IPaymentLink>;
    create(pluto_account?: string, payment_link_create_request?: PaymentLinkCreateRequest, _options?: Configuration): Promise<IPaymentLink>;
    create_2(pluto_account?: string, payment_link_create_request?: PaymentLinkCreateRequest, _options?: Configuration): Promise<IPaymentLink>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<PaymentLinkListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<PaymentLinkListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IPaymentLink>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IPaymentLink>;
    update(id: string, pluto_account?: string, payment_link_update_request?: PaymentLinkUpdateRequest, _options?: Configuration): Promise<IPaymentLink>;
    update_5(id: string, pluto_account?: string, payment_link_update_request?: PaymentLinkUpdateRequest, _options?: Configuration): Promise<IPaymentLink>;
}
import { PayoutWalletsApiRequestFactory, PayoutWalletsApiResponseProcessor } from "../apis/PayoutWalletsApi";
export declare class PromisePayoutWalletsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PayoutWalletsApiRequestFactory, responseProcessor?: PayoutWalletsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<IPayoutWallet>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<IPayoutWallet>;
    create(pluto_account?: string, payout_wallet_create_request?: PayoutWalletCreateRequest, _options?: Configuration): Promise<IPayoutWallet>;
    create_2(pluto_account?: string, payout_wallet_create_request?: PayoutWalletCreateRequest, _options?: Configuration): Promise<IPayoutWallet>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<PayoutWalletListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<PayoutWalletListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IPayoutWallet>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IPayoutWallet>;
    update(id: string, pluto_account?: string, payout_wallet_update_request?: PayoutWalletUpdateRequest, _options?: Configuration): Promise<IPayoutWallet>;
    update_5(id: string, pluto_account?: string, payout_wallet_update_request?: PayoutWalletUpdateRequest, _options?: Configuration): Promise<IPayoutWallet>;
}
import { PricesApiRequestFactory, PricesApiResponseProcessor } from "../apis/PricesApi";
export declare class PromisePricesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PricesApiRequestFactory, responseProcessor?: PricesApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<IPrice>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<IPrice>;
    create(pluto_account?: string, price_create_request?: PriceCreateRequest, _options?: Configuration): Promise<IPrice>;
    create_2(pluto_account?: string, price_create_request?: PriceCreateRequest, _options?: Configuration): Promise<IPrice>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<PriceListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<PriceListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IPrice>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IPrice>;
    update(id: string, pluto_account?: string, price_update_request?: PriceUpdateRequest, _options?: Configuration): Promise<IPrice>;
    update_5(id: string, pluto_account?: string, price_update_request?: PriceUpdateRequest, _options?: Configuration): Promise<IPrice>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export declare class PromiseProductsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<IProduct>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<IProduct>;
    create(pluto_account?: string, product_create_request?: ProductCreateRequest, _options?: Configuration): Promise<IProduct>;
    create_2(pluto_account?: string, product_create_request?: ProductCreateRequest, _options?: Configuration): Promise<IProduct>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<ProductListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<ProductListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IProduct>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IProduct>;
    update(id: string, pluto_account?: string, product_update_request?: ProductUpdateRequest, _options?: Configuration): Promise<IProduct>;
    update_5(id: string, pluto_account?: string, product_update_request?: ProductUpdateRequest, _options?: Configuration): Promise<IProduct>;
}
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor } from "../apis/SubscriptionsApi";
export declare class PromiseSubscriptionsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<ISubscription>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<ISubscription>;
    create(pluto_account?: string, subscription_create_request?: SubscriptionCreateRequest, _options?: Configuration): Promise<ISubscription>;
    create_2(pluto_account?: string, subscription_create_request?: SubscriptionCreateRequest, _options?: Configuration): Promise<ISubscription>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<SubscriptionListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<SubscriptionListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ISubscription>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ISubscription>;
    update(id: string, pluto_account?: string, subscription_update_request?: SubscriptionUpdateRequest, _options?: Configuration): Promise<ISubscription>;
    update_5(id: string, pluto_account?: string, subscription_update_request?: SubscriptionUpdateRequest, _options?: Configuration): Promise<ISubscription>;
}
import { TransfersApiRequestFactory, TransfersApiResponseProcessor } from "../apis/TransfersApi";
export declare class PromiseTransfersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TransfersApiRequestFactory, responseProcessor?: TransfersApiResponseProcessor);
    create(pluto_account?: string, transfer_create_request?: TransferCreateRequest, _options?: Configuration): Promise<ITransfer>;
    create_1(pluto_account?: string, transfer_create_request?: TransferCreateRequest, _options?: Configuration): Promise<ITransfer>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<TransferListResponse>;
    list_2(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<TransferListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ITransfer>;
    retrieve_3(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<ITransfer>;
}
import { WalletsApiRequestFactory, WalletsApiResponseProcessor } from "../apis/WalletsApi";
export declare class PromiseWalletsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<IWallet>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<IWallet>;
    create(pluto_account?: string, wallet_create_request?: WalletCreateRequest, _options?: Configuration): Promise<IWallet>;
    create_2(pluto_account?: string, wallet_create_request?: WalletCreateRequest, _options?: Configuration): Promise<IWallet>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<WalletListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<WalletListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IWallet>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IWallet>;
    update(id: string, pluto_account?: string, wallet_update_request?: WalletUpdateRequest, _options?: Configuration): Promise<IWallet>;
    update_5(id: string, pluto_account?: string, wallet_update_request?: WalletUpdateRequest, _options?: Configuration): Promise<IWallet>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export declare class PromiseWebhooksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(id: string, pluto_account?: string, _options?: Configuration): Promise<IWebhook>;
    _delete_1(id: string, pluto_account?: string, _options?: Configuration): Promise<IWebhook>;
    create(pluto_account?: string, webhook_create_request?: WebhookCreateRequest, _options?: Configuration): Promise<IWebhook>;
    create_2(pluto_account?: string, webhook_create_request?: WebhookCreateRequest, _options?: Configuration): Promise<IWebhook>;
    list(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<WebhookListResponse>;
    list_3(pluto_account?: string, limit?: number, page?: number, sort?: number, expand?: string, _options?: Configuration): Promise<WebhookListResponse>;
    retrieve(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IWebhook>;
    retrieve_4(id: string, pluto_account?: string, expand?: string, _options?: Configuration): Promise<IWebhook>;
    update(id: string, pluto_account?: string, webhook_update_request?: WebhookUpdateRequest, _options?: Configuration): Promise<IWebhook>;
    update_5(id: string, pluto_account?: string, webhook_update_request?: WebhookUpdateRequest, _options?: Configuration): Promise<IWebhook>;
}
