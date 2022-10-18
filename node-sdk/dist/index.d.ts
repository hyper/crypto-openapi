import { Configuration, CustomersApiRetrieveRequest, CustomersApiCreateRequest, FeesApiCreateRequest, FeesApiRetrieveRequest, InvoicesApiCreateRequest, InvoicesApiRetrieveRequest, InvoicesApiListRequest, LogsApiRetrieveRequest, LogsApiListRequest, FeesApiListRequest, CustomersApiListRequest, ProductsApiCreateRequest, ProductsApiRetrieveRequest, ProductsApiListRequest, WalletsApiCreateRequest, WalletsApiRetrieveRequest, WalletsApiListRequest, WebhooksApiCreateRequest, WebhooksApiRetrieveRequest, WebhooksApiListRequest, WalletsApiUpdateRequest, WebhooksApiUpdateRequest, CustomersApiUpdateRequest, InvoicesApiUpdateRequest, ProductsApiUpdateRequest, TransfersApiCreateRequest, TransfersApiRetrieveRequest, TransfersApiListRequest, PayoutWalletsApiCreateRequest, PayoutWalletsApiRetrieveRequest, PayoutWalletsApiUpdateRequest, PayoutWalletsApiListRequest, AccountsApiRetrieveRequest, AccountsApiCreateRequest, AccountsApiListRequest, PaymentIntentsApiCreateRequest, PricesApiCreateRequest, PricesApiRetrieveRequest, PricesApiListRequest, SubscriptionsApiCreateRequest, SubscriptionsApiRetrieveRequest, SubscriptionsApiUpdateRequest, SubscriptionsApiListRequest, PayoutWalletsApiDeleteRequest, ProductsApiDeleteRequest, WalletsApiDeleteRequest, WebhooksApiDeleteRequest, PricesApiDeleteRequest, PricesApiUpdateRequest, PaymentIntentsApiRetrieveRequest, PaymentIntentsApiListRequest, PaymentIntentsApiPollRequest, PaymentIntentsApiUpdateRequest, InvoicesApiPayRequest, IAccount, AccountListResponse, AccountsApiPatchRequest, ICustomer, CustomerListResponse, IFee, FeeListResponse, IInvoice, InvoiceListResponse, IPaymentIntent, ILog, LogListResponse, IPrice, PriceListResponse, ProductListResponse, IProduct, IPayoutWallet, PayoutWalletListResponse, ISubscription, SubscriptionListResponse, PaymentIntentListResponse, PaymentIntentsApiDeleteRequest, ITransfer, TransferListResponse, IWallet, WalletListResponse, IWebhook, WebhookListResponse, SubscriptionsApiDeleteRequest } from './openapi/index';
export * from './openapi/models/all';
export * from './openapi/apis/exception';
export interface PlutoOptions {
    env?: string;
    serverUrl?: string;
}
export declare class Pluto {
    readonly accounts: AccountsApiLayer;
    readonly customers: CustomersApiLayer;
    readonly fees: FeesApiLayer;
    readonly invoices: InvoicesApiLayer;
    readonly logs: LogsApiLayer;
    readonly payoutWallets: PayoutWalletsApiLayer;
    readonly prices: PricesApiLayer;
    readonly products: ProductsApiLayer;
    readonly subscriptions: SubscriptionsApiLayer;
    readonly paymentIntents: PaymentIntentsApiLayer;
    readonly transfers: TransfersApiLayer;
    readonly wallets: WalletsApiLayer;
    readonly webhooks: WebhooksApiLayer;
    constructor(token: string, options?: PlutoOptions);
}
declare class AccountsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: AccountsApiCreateRequest['account_create_request'], options?: {
        plutoAccount?: string;
    }): Promise<IAccount>;
    retrieve(id: string, params?: Omit<AccountsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<IAccount>;
    update(id: string, data: AccountsApiPatchRequest['account_update_request'], options?: {
        plutoAccount?: string;
    }): Promise<IAccount>;
    list(params?: Omit<AccountsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<AccountListResponse>;
}
declare class CustomersApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: CustomersApiCreateRequest['customer_create_request'], options?: {
        plutoAccount?: string;
    }): Promise<ICustomer>;
    retrieve(id: string, params?: Omit<CustomersApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<ICustomer>;
    update(id: string, data: CustomersApiUpdateRequest['customer_update_request'], options?: {
        plutoAccount?: string;
    }): Promise<ICustomer>;
    list(params?: Omit<CustomersApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<CustomerListResponse>;
}
declare class FeesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: FeesApiCreateRequest['fee_create_request'], options?: {
        plutoAccount?: string;
    }): Promise<IFee>;
    retrieve(id: string, params?: Omit<FeesApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<IFee>;
    list(params?: Omit<FeesApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<FeeListResponse>;
}
declare class InvoicesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: InvoicesApiCreateRequest['invoice_create_request'], options?: {
        plutoAccount?: string;
    }): Promise<IInvoice>;
    retrieve(id: string, params?: Omit<InvoicesApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<IInvoice>;
    update(id: string, data: InvoicesApiUpdateRequest['invoice_update_request'], options?: {
        plutoAccount?: string;
    }): Promise<IInvoice>;
    list(params?: Omit<InvoicesApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<InvoiceListResponse>;
    pay(id: string, params?: Omit<InvoicesApiPayRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<IPaymentIntent>;
}
declare class LogsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    retrieve(id: string, params?: Omit<LogsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<ILog>;
    list(params?: Omit<LogsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<LogListResponse>;
}
declare class PricesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: PricesApiCreateRequest['price_create_request'], options?: {
        plutoAccount?: string;
    }): Promise<IPrice>;
    retrieve(id: string, params?: Omit<PricesApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<IPrice>;
    update(id: string, data: PricesApiUpdateRequest['price_update_request'], options?: {
        plutoAccount?: string;
    }): Promise<IPrice>;
    list(params?: Omit<PricesApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<PriceListResponse>;
    delete(id: string, params: Omit<PricesApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<IPrice>;
}
declare class ProductsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: ProductsApiCreateRequest['product_create_request'], options?: {
        plutoAccount?: string;
    }): Promise<IProduct>;
    retrieve(id: string, params?: Omit<ProductsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<IProduct>;
    update(id: string, data: ProductsApiUpdateRequest['product_update_request'], options?: {
        plutoAccount?: string;
    }): Promise<IProduct>;
    list(params?: Omit<ProductsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<ProductListResponse>;
    delete(id: string, params: Omit<ProductsApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<IProduct>;
}
declare class PayoutWalletsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: PayoutWalletsApiCreateRequest['payout_wallet_create_request'], options?: {
        plutoAccount?: string;
    }): Promise<IPayoutWallet>;
    retrieve(id: string, params?: Omit<PayoutWalletsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<IPayoutWallet>;
    update(id: string, data: PayoutWalletsApiUpdateRequest['payout_wallet_update_request'], options?: {
        plutoAccount?: string;
    }): Promise<IPayoutWallet>;
    list(params?: Omit<PayoutWalletsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<PayoutWalletListResponse>;
    delete(id: string, params: Omit<PayoutWalletsApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<IPayoutWallet>;
}
declare class SubscriptionsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: SubscriptionsApiCreateRequest['subscription_create_request'], options?: {
        plutoAccount?: string;
    }): Promise<ISubscription>;
    retrieve(id: string, params?: Omit<SubscriptionsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<ISubscription>;
    update(id: string, data: SubscriptionsApiUpdateRequest['subscription_update_request'], options?: {
        plutoAccount?: string;
    }): Promise<ISubscription>;
    list(params?: Omit<SubscriptionsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<SubscriptionListResponse>;
    cancel(id: string, params: Omit<SubscriptionsApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<ISubscription>;
}
declare class PaymentIntentsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: PaymentIntentsApiCreateRequest['payment_intent_create_request'], options?: {
        plutoAccount?: string;
    }): Promise<IPaymentIntent>;
    retrieve(id: string, params?: Omit<PaymentIntentsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<IPaymentIntent>;
    update(id: string, data: PaymentIntentsApiUpdateRequest['payment_intent_update_request'], options?: {
        plutoAccount?: string;
    }): Promise<IPaymentIntent>;
    list(params?: Omit<PaymentIntentsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<PaymentIntentListResponse>;
    poll(id: string, params?: Omit<PaymentIntentsApiPollRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<IPaymentIntent>;
    cancel(id: string, params: Omit<PaymentIntentsApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<IPaymentIntent>;
}
declare class TransfersApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: TransfersApiCreateRequest['transfer_create_request'], options?: {
        plutoAccount?: string;
    }): Promise<ITransfer>;
    retrieve(id: string, params?: Omit<TransfersApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<ITransfer>;
    list(params?: Omit<TransfersApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<TransferListResponse>;
}
declare class WalletsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: WalletsApiCreateRequest['wallet_create_request'], options?: {
        plutoAccount?: string;
    }): Promise<IWallet>;
    retrieve(id: string, params?: Omit<WalletsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<IWallet>;
    update(id: string, data: WalletsApiUpdateRequest['wallet_update_request'], options?: {
        plutoAccount?: string;
    }): Promise<IWallet>;
    list(params?: Omit<WalletsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<WalletListResponse>;
    delete(id: string, params: Omit<WalletsApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<IWallet>;
}
declare class WebhooksApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: WebhooksApiCreateRequest['webhook_create_request'], options?: {
        plutoAccount?: string;
    }): Promise<IWebhook>;
    retrieve(id: string, params?: Omit<WebhooksApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount?: string;
    }): Promise<IWebhook>;
    update(id: string, data: WebhooksApiUpdateRequest['webhook_update_request'], options?: {
        plutoAccount?: string;
    }): Promise<IWebhook>;
    list(params?: Omit<WebhooksApiListRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<WebhookListResponse>;
    delete(id: string, params: Omit<WebhooksApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount?: string;
    }): Promise<IWebhook>;
}
