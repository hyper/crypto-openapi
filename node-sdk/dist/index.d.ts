import { Configuration, Customer, CustomersApiRetrieveRequest, CustomersApiCreateRequest, Fee, FeesApiCreateRequest, FeesApiRetrieveRequest, InvoicesApiCreateRequest, Invoice, InvoicesApiRetrieveRequest, InvoicesApiListRequest, LogsApiRetrieveRequest, ListProductsResponse, LogsApiListRequest, FeesApiListRequest, CustomersApiListRequest, Log, ProductsApiCreateRequest, ProductsApiRetrieveRequest, Product, ProductsApiListRequest, WalletsApiCreateRequest, WalletsApiRetrieveRequest, WalletsApiListRequest, WebhooksApiCreateRequest, WebhooksApiRetrieveRequest, WebhooksApiListRequest, Wallet, ListCustomersResponse, ListInvoicesResponse, ListLogsResponse, ListWebhooksResponse, ListWalletsResponse, ListFeesResponse, WalletsApiUpdateRequest, WebhooksApiUpdateRequest, CustomersApiUpdateRequest, InvoicesApiUpdateRequest, ProductsApiUpdateRequest, TransfersApiCreateRequest, Transfer, TransfersApiRetrieveRequest, TransfersApiListRequest, ListTransfersResponse, PayoutWalletsApiCreateRequest, PayoutWallet, PayoutWalletsApiRetrieveRequest, PayoutWalletsApiUpdateRequest, PayoutWalletsApiListRequest, AccountsApiRetrieveRequest, AccountsApiCreateRequest, Account, ListAccountsResponse, AccountsApiListRequest, AccountsApiUpdateRequest, PaymentIntentsApiCreateRequest, Price, PricesApiCreateRequest, PricesApiRetrieveRequest, PricesApiListRequest, ListPricesResponse, Subscription, SubscriptionsApiCreateRequest, SubscriptionsApiRetrieveRequest, SubscriptionsApiUpdateRequest, SubscriptionsApiListRequest, ListSubscriptionsResponse, FeesApiDeleteRequest, PayoutWalletsApiDeleteRequest, ProductsApiDeleteRequest, WalletsApiDeleteRequest, WebhooksApiDeleteRequest, PricesApiDeleteRequest, PricesApiUpdateRequest, PaymentIntentsApiRetrieveRequest, ListPaymentIntentsResponse, PaymentIntentsApiListRequest, PaymentIntent, PaymentIntentsApiPollRequest, SubscriptionsApiCancelRequest, PaymentIntentsApiCancelRequest, PaymentIntentsApiUpdateRequest, InvoicesApiPayRequest } from './openapi/index';
import { ListPayoutWalletsResponse } from './openapi';
export * from './openapi/models/all';
export * from './openapi/apis/exception';
export interface PlutoOptions {
    env?: string;
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
    create(data: AccountsApiCreateRequest['create_account_body'], options?: {
        plutoAccount: string;
    }): Promise<Account>;
    retrieve(id: string, params?: Omit<AccountsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<Account>;
    update(id: string, data: AccountsApiUpdateRequest['update_account_body'], options?: {
        plutoAccount: string;
    }): Promise<Account>;
    list(params?: Omit<AccountsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListAccountsResponse>;
}
declare class CustomersApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: CustomersApiCreateRequest['create_customer_body'], options?: {
        plutoAccount: string;
    }): Promise<Customer>;
    retrieve(id: string, params?: Omit<CustomersApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<Customer>;
    update(id: string, data: CustomersApiUpdateRequest['update_customer_body'], options?: {
        plutoAccount: string;
    }): Promise<Customer>;
    list(params?: Omit<CustomersApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListCustomersResponse>;
}
declare class FeesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: FeesApiCreateRequest['create_fee_body'], options?: {
        plutoAccount: string;
    }): Promise<Fee>;
    retrieve(id: string, params?: Omit<FeesApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<Fee>;
    list(params?: Omit<FeesApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListFeesResponse>;
    delete(id: string, params: Omit<FeesApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<void>;
}
declare class InvoicesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: InvoicesApiCreateRequest['invoice'], options?: {
        plutoAccount: string;
    }): Promise<Invoice>;
    retrieve(id: string, params?: Omit<InvoicesApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<Invoice>;
    update(id: string, data: InvoicesApiUpdateRequest['update_invoice_body'], options?: {
        plutoAccount: string;
    }): Promise<Invoice>;
    list(params?: Omit<InvoicesApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListInvoicesResponse>;
    pay(id: string, params?: Omit<InvoicesApiPayRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<PaymentIntent>;
}
declare class LogsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    retrieve(id: string, params?: Omit<LogsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<Log>;
    list(params?: Omit<LogsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListLogsResponse>;
}
declare class PricesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: PricesApiCreateRequest['price'], options?: {
        plutoAccount: string;
    }): Promise<Price>;
    retrieve(id: string, params?: Omit<PricesApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<Price>;
    update(id: string, data: PricesApiUpdateRequest['update_price_body'], options?: {
        plutoAccount: string;
    }): Promise<Price>;
    list(params?: Omit<PricesApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListPricesResponse>;
    delete(id: string, params: Omit<PricesApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<void>;
}
declare class ProductsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: ProductsApiCreateRequest['create_product_body'], options?: {
        plutoAccount: string;
    }): Promise<Product>;
    retrieve(id: string, params?: Omit<ProductsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<Product>;
    update(id: string, data: ProductsApiUpdateRequest['update_product_body'], options?: {
        plutoAccount: string;
    }): Promise<Product>;
    list(params?: Omit<ProductsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListProductsResponse>;
    delete(id: string, params: Omit<ProductsApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<void>;
}
declare class PayoutWalletsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: PayoutWalletsApiCreateRequest['create_payout_wallet_body'], options?: {
        plutoAccount: string;
    }): Promise<PayoutWallet>;
    retrieve(id: string, params?: Omit<PayoutWalletsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<PayoutWallet>;
    update(id: string, data: PayoutWalletsApiUpdateRequest['payout_wallet'], options?: {
        plutoAccount: string;
    }): Promise<PayoutWallet>;
    list(params?: Omit<PayoutWalletsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListPayoutWalletsResponse>;
    delete(id: string, params: Omit<PayoutWalletsApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<void>;
}
declare class SubscriptionsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: SubscriptionsApiCreateRequest['subscription'], options?: {
        plutoAccount: string;
    }): Promise<Subscription>;
    retrieve(id: string, params?: Omit<SubscriptionsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<Subscription>;
    update(id: string, data: SubscriptionsApiUpdateRequest['subscription'], options?: {
        plutoAccount: string;
    }): Promise<Subscription>;
    list(params?: Omit<SubscriptionsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListSubscriptionsResponse>;
    cancel(id: string, params: Omit<SubscriptionsApiCancelRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<Subscription>;
}
declare class PaymentIntentsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: PaymentIntentsApiCreateRequest['payment_intent'], options?: {
        plutoAccount: string;
    }): Promise<PaymentIntent>;
    retrieve(id: string, params?: Omit<PaymentIntentsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<PaymentIntent>;
    update(id: string, data: PaymentIntentsApiUpdateRequest['update_payment_intent_body'], options?: {
        plutoAccount: string;
    }): Promise<PaymentIntent>;
    list(params?: Omit<PaymentIntentsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListPaymentIntentsResponse>;
    poll(id: string, params?: Omit<PaymentIntentsApiPollRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<PaymentIntent>;
    cancel(id: string, params: Omit<PaymentIntentsApiCancelRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<PaymentIntent>;
}
declare class TransfersApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: TransfersApiCreateRequest['create_transfer_body'], options?: {
        plutoAccount: string;
    }): Promise<Transfer>;
    retrieve(id: string, params?: Omit<TransfersApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<Transfer>;
    list(params?: Omit<TransfersApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListTransfersResponse>;
}
declare class WalletsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: WalletsApiCreateRequest['create_wallet_body'], options?: {
        plutoAccount: string;
    }): Promise<Wallet>;
    retrieve(id: string, params?: Omit<WalletsApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<Wallet>;
    update(id: string, data: WalletsApiUpdateRequest['update_wallet_body'], options?: {
        plutoAccount: string;
    }): Promise<Wallet>;
    list(params?: Omit<WalletsApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListWalletsResponse>;
    delete(id: string, params: Omit<WalletsApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<void>;
}
declare class WebhooksApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: WebhooksApiCreateRequest['create_webhook_body'], options?: {
        plutoAccount: string;
    }): Promise<Customer>;
    retrieve(id: string, params?: Omit<WebhooksApiRetrieveRequest, 'pluto_account' | 'id'>, options?: {
        plutoAccount: string;
    }): Promise<Customer>;
    update(id: string, data: WebhooksApiUpdateRequest['update_webhook_body'], options?: {
        plutoAccount: string;
    }): Promise<Customer>;
    list(params?: Omit<WebhooksApiListRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<ListWebhooksResponse>;
    delete(id: string, params: Omit<WebhooksApiDeleteRequest, 'pluto_account'>, options?: {
        plutoAccount: string;
    }): Promise<void>;
}
