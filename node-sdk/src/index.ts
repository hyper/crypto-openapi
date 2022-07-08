import {
  Configuration,
  createConfiguration,
  CustomersApi,
  FeesApi,
  InvoicesApi,
  LogsApi,
  ProductsApi,
  WalletsApi,
  WebhooksApi,
  Middleware,
  RequestContext,
  ResponseContext,
  Customer,
  CustomersApiRetrieveRequest,
  CustomersApiCreateRequest,
  Fee,
  FeesApiCreateRequest,
  FeesApiRetrieveRequest,
  InvoicesApiCreateRequest,
  Invoice,
  InvoicesApiRetrieveRequest,
  InvoicesApiListRequest,
  LogsApiRetrieveRequest,
  ListProductsResponse,
  LogsApiListRequest,
  FeesApiListRequest,
  CustomersApiListRequest,
  Log,
  ProductsApiCreateRequest,
  ProductsApiRetrieveRequest,
  Product,
  ProductsApiListRequest,
  WalletsApiCreateRequest,
  WalletsApiRetrieveRequest,
  WalletsApiListRequest,
  WebhooksApiCreateRequest,
  WebhooksApiRetrieveRequest,
  WebhooksApiListRequest,
  Wallet,
  servers,
  ListCustomersResponse,
  ListInvoicesResponse,
  ListLogsResponse,
  ListWebhooksResponse,
  ListWalletsResponse,
  ListFeesResponse,
  WalletsApiUpdateRequest,
  WebhooksApiUpdateRequest,
  CustomersApiUpdateRequest,
  InvoicesApiUpdateRequest,
  ProductsApiUpdateRequest,
  TransfersApi,
  TransfersApiCreateRequest,
  Transfer,
  TransfersApiRetrieveRequest,
  TransfersApiListRequest,
  ListTransfersResponse,
  PayoutWalletsApi,
  PayoutWalletsApiCreateRequest,
  PayoutWallet,
  PayoutWalletsApiRetrieveRequest,
  PayoutWalletsApiUpdateRequest,
  PayoutWalletsApiListRequest,
  AccountsApi,
  AccountsApiRetrieveRequest,
  AccountsApiCreateRequest,
  Account,
  ListAccountsResponse,
  AccountsApiListRequest,
  AccountsApiUpdateRequest,
  PaymentIntentsApiCreateRequest,
  Price,
  PricesApi,
  PricesApiCreateRequest,
  PricesApiRetrieveRequest,
  PricesApiListRequest,
  ListPricesResponse,
  Subscription,
  SubscriptionsApi,
  SubscriptionsApiCreateRequest,
  SubscriptionsApiRetrieveRequest,
  SubscriptionsApiUpdateRequest,
  SubscriptionsApiListRequest,
  ListSubscriptionsResponse,
  FeesApiDeleteRequest,
  PayoutWalletsApiDeleteRequest,
  ProductsApiDeleteRequest,
  WalletsApiDeleteRequest,
  WebhooksApiDeleteRequest,
  PricesApiDeleteRequest,
  PricesApiUpdateRequest,
  PaymentIntentsApi,
  PaymentIntentsApiRetrieveRequest,
  ListPaymentIntentsResponse,
  PaymentIntentsApiListRequest,
  PaymentIntent,
  PaymentIntentsApiPollRequest,
  SubscriptionsApiCancelRequest,
  PaymentIntentsApiCancelRequest,
  PaymentIntentsApiUpdateRequest,
  InvoicesApiPayRequest,
} from './openapi/index';
import convertCasing from './helpers/convertCasing';
import { ListPayoutWalletsResponse } from './openapi';
export * from './openapi/models/all';
export * from './openapi/apis/exception';

const VERSION = '0.0.0';

class UserAgentMiddleware implements Middleware {
  public pre(context: RequestContext): Promise<RequestContext> {
    context.setHeaderParam('User-Agent', `pluto-node/${VERSION}/javascript`);
    return Promise.resolve(context);
  }

  public post(context: ResponseContext): Promise<ResponseContext> {
    return Promise.resolve(context);
  }
}

export interface PlutoOptions {
  env?: string;
}

export class Pluto {
  public readonly accounts: AccountsApiLayer;
  public readonly customers: CustomersApiLayer;
  public readonly fees: FeesApiLayer;
  public readonly invoices: InvoicesApiLayer;
  public readonly logs: LogsApiLayer;
  public readonly payoutWallets: PayoutWalletsApiLayer;
  public readonly prices: PricesApiLayer;
  public readonly products: ProductsApiLayer;
  public readonly subscriptions: SubscriptionsApiLayer;
  public readonly paymentIntents: PaymentIntentsApiLayer;
  public readonly transfers: TransfersApiLayer;
  public readonly wallets: WalletsApiLayer;
  public readonly webhooks: WebhooksApiLayer;

  public constructor(token: string, options?: PlutoOptions) {
    const envs = ['dev', 'stg', 'prd'];

    const baseServer = options?.env ? servers[envs.indexOf(options.env)] : servers[2];

    const config = createConfiguration({
      baseServer,
      promiseMiddleware: [new UserAgentMiddleware()],
      authMethods: {
        default: {
          getName: () => 'ApiKey',
          applySecurityAuthentication: (context: RequestContext) =>
            context.setHeaderParam('Authorization', `Bearer ${token}`),
        },
      },
    });

    this.accounts = new AccountsApiLayer(config);
    this.customers = new CustomersApiLayer(config);
    this.fees = new FeesApiLayer(config);
    this.invoices = new InvoicesApiLayer(config);
    this.logs = new LogsApiLayer(config);
    this.payoutWallets = new PayoutWalletsApiLayer(config);
    this.prices = new PricesApiLayer(config);
    this.products = new ProductsApiLayer(config);
    this.subscriptions = new SubscriptionsApiLayer(config);
    this.paymentIntents = new PaymentIntentsApiLayer(config);
    this.transfers = new TransfersApiLayer(config);
    this.wallets = new WalletsApiLayer(config);
    this.webhooks = new WebhooksApiLayer(config);
  }
}

class AccountsApiLayer {
  private readonly api: AccountsApi;

  constructor(config: Configuration) {
    this.api = new AccountsApi(config);
  }

  public async create(
    data: AccountsApiCreateRequest['create_account_body'],
    options?: { plutoAccount: string }
  ): Promise<Account> {
    return this.api.create({ ...convertCasing(options), create_account_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<AccountsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<Account> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: AccountsApiUpdateRequest['update_account_body'],
    options?: { plutoAccount: string }
  ): Promise<Account> {
    return this.api.update({ id, ...convertCasing(options), update_account_body: data });
  }

  public async list(
    params?: Omit<AccountsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListAccountsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class CustomersApiLayer {
  private readonly api: CustomersApi;

  constructor(config: Configuration) {
    this.api = new CustomersApi(config);
  }

  public async create(
    data: CustomersApiCreateRequest['create_customer_body'],
    options?: { plutoAccount: string }
  ): Promise<Customer> {
    return this.api.create({ ...convertCasing(options), create_customer_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<CustomersApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<Customer> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: CustomersApiUpdateRequest['update_customer_body'],
    options?: { plutoAccount: string }
  ): Promise<Customer> {
    return this.api.update({ id, ...convertCasing(options), update_customer_body: data });
  }

  public async list(
    params?: Omit<CustomersApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListCustomersResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class FeesApiLayer {
  private readonly api: FeesApi;

  constructor(config: Configuration) {
    this.api = new FeesApi(config);
  }

  public async create(
    data: FeesApiCreateRequest['create_fee_body'],
    options?: { plutoAccount: string }
  ): Promise<Fee> {
    return this.api.create({ ...convertCasing(options), create_fee_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<FeesApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<Fee> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<FeesApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListFeesResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    id: string,
    params: Omit<FeesApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<void> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}

class InvoicesApiLayer {
  private readonly api: InvoicesApi;

  constructor(config: Configuration) {
    this.api = new InvoicesApi(config);
  }

  public async create(
    data: InvoicesApiCreateRequest['invoice'],
    options?: { plutoAccount: string }
  ): Promise<Invoice> {
    return this.api.create({ ...convertCasing(options), invoice: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<InvoicesApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<Invoice> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: InvoicesApiUpdateRequest['update_invoice_body'],
    options?: { plutoAccount: string }
  ): Promise<Invoice> {
    return this.api.update({ id, ...convertCasing(options), update_invoice_body: data });
  }

  public async list(
    params?: Omit<InvoicesApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListInvoicesResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async pay(
    id: string,
    params?: Omit<InvoicesApiPayRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<PaymentIntent> {
    return this.api.pay({ id, ...convertCasing(options), ...params });
  }
}

class LogsApiLayer {
  private readonly api: LogsApi;

  constructor(config: Configuration) {
    this.api = new LogsApi(config);
  }

  public async retrieve(
    id: string,
    params?: Omit<LogsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<Log> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<LogsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListLogsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class PricesApiLayer {
  private readonly api: PricesApi;

  constructor(config: Configuration) {
    this.api = new PricesApi(config);
  }

  public async create(
    data: PricesApiCreateRequest['price'],
    options?: { plutoAccount: string }
  ): Promise<Price> {
    return this.api.create({ ...convertCasing(options), price: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<PricesApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<Price> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: PricesApiUpdateRequest['update_price_body'],
    options?: { plutoAccount: string }
  ): Promise<Price> {
    return this.api.update({ id, ...convertCasing(options), update_price_body: data });
  }

  public async list(
    params?: Omit<PricesApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListPricesResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    id: string,
    params: Omit<PricesApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<void> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}

class ProductsApiLayer {
  private readonly api: ProductsApi;

  constructor(config: Configuration) {
    this.api = new ProductsApi(config);
  }

  public async create(
    data: ProductsApiCreateRequest['create_product_body'],
    options?: { plutoAccount: string }
  ): Promise<Product> {
    return this.api.create({ ...convertCasing(options), create_product_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<ProductsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<Product> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: ProductsApiUpdateRequest['update_product_body'],
    options?: { plutoAccount: string }
  ): Promise<Product> {
    return this.api.update({ id, ...convertCasing(options), update_product_body: data });
  }

  public async list(
    params?: Omit<ProductsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListProductsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    id: string,
    params: Omit<ProductsApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<void> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}

class PayoutWalletsApiLayer {
  private readonly api: PayoutWalletsApi;

  constructor(config: Configuration) {
    this.api = new PayoutWalletsApi(config);
  }

  public async create(
    data: PayoutWalletsApiCreateRequest['create_payout_wallet_body'],
    options?: { plutoAccount: string }
  ): Promise<PayoutWallet> {
    return this.api.create({ ...convertCasing(options), create_payout_wallet_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<PayoutWalletsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<PayoutWallet> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: PayoutWalletsApiUpdateRequest['payout_wallet'],
    options?: { plutoAccount: string }
  ): Promise<PayoutWallet> {
    return this.api.update({ id, ...convertCasing(options), payout_wallet: data });
  }

  public async list(
    params?: Omit<PayoutWalletsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListPayoutWalletsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    id: string,
    params: Omit<PayoutWalletsApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<void> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}

class SubscriptionsApiLayer {
  private readonly api: SubscriptionsApi;

  constructor(config: Configuration) {
    this.api = new SubscriptionsApi(config);
  }

  public async create(
    data: SubscriptionsApiCreateRequest['subscription'],
    options?: { plutoAccount: string }
  ): Promise<Subscription> {
    return this.api.create({ ...convertCasing(options), subscription: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<SubscriptionsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<Subscription> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: SubscriptionsApiUpdateRequest['subscription'],
    options?: { plutoAccount: string }
  ): Promise<Subscription> {
    return this.api.update({ id, ...convertCasing(options), subscription: data });
  }

  public async list(
    params?: Omit<SubscriptionsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListSubscriptionsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async cancel(
    id: string,
    params: Omit<SubscriptionsApiCancelRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<Subscription> {
    return this.api.cancel({ id, ...convertCasing(options) });
  }
}

class PaymentIntentsApiLayer {
  private readonly api: PaymentIntentsApi;

  constructor(config: Configuration) {
    this.api = new PaymentIntentsApi(config);
  }

  public async create(
    data: PaymentIntentsApiCreateRequest['payment_intent'],
    options?: { plutoAccount: string }
  ): Promise<PaymentIntent> {
    return this.api.create({ ...convertCasing(options), payment_intent: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<PaymentIntentsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<PaymentIntent> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: PaymentIntentsApiUpdateRequest['update_payment_intent_body'],
    options?: { plutoAccount: string }
  ): Promise<PaymentIntent> {
    return this.api.update({ id, ...convertCasing(options), update_payment_intent_body: data });
  }

  public async list(
    params?: Omit<PaymentIntentsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListPaymentIntentsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async poll(
    id: string,
    params?: Omit<PaymentIntentsApiPollRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<PaymentIntent> {
    return this.api.poll({ id, ...convertCasing(options), ...params });
  }

  public async cancel(
    id: string,
    params: Omit<PaymentIntentsApiCancelRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<PaymentIntent> {
    return this.api.cancel({ id, ...convertCasing(options) });
  }
}

class TransfersApiLayer {
  private readonly api: TransfersApi;

  constructor(config: Configuration) {
    this.api = new TransfersApi(config);
  }

  public async create(
    data: TransfersApiCreateRequest['create_transfer_body'],
    options?: { plutoAccount: string }
  ): Promise<Transfer> {
    return this.api.create({ ...convertCasing(options), create_transfer_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<TransfersApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<Transfer> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<TransfersApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListTransfersResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class WalletsApiLayer {
  private readonly api: WalletsApi;

  constructor(config: Configuration) {
    this.api = new WalletsApi(config);
  }

  public async create(
    data: WalletsApiCreateRequest['create_wallet_body'],
    options?: { plutoAccount: string }
  ): Promise<Wallet> {
    return this.api.create({ ...convertCasing(options), create_wallet_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<WalletsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<Wallet> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: WalletsApiUpdateRequest['update_wallet_body'],
    options?: { plutoAccount: string }
  ): Promise<Wallet> {
    return this.api.update({ id, ...convertCasing(options), update_wallet_body: data });
  }

  public async list(
    params?: Omit<WalletsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListWalletsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    id: string,
    params: Omit<WalletsApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<void> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}

class WebhooksApiLayer {
  private readonly api: WebhooksApi;

  constructor(config: Configuration) {
    this.api = new WebhooksApi(config);
  }

  public async create(
    data: WebhooksApiCreateRequest['create_webhook_body'],
    options?: { plutoAccount: string }
  ): Promise<Customer> {
    return this.api.create({ ...convertCasing(options), create_webhook_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<WebhooksApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount: string }
  ): Promise<Customer> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: WebhooksApiUpdateRequest['update_webhook_body'],
    options?: { plutoAccount: string }
  ): Promise<Customer> {
    return this.api.update({ id, ...convertCasing(options), update_webhook_body: data });
  }

  public async list(
    params?: Omit<WebhooksApiListRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<ListWebhooksResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    id: string,
    params: Omit<WebhooksApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount: string }
  ): Promise<void> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}
