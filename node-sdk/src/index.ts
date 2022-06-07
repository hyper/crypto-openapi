import {
  Configuration,
  createConfiguration,
  CustomersApi,
  FeesApi,
  InvoicesApi,
  LogsApi,
  PaymentsApi,
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
  PaymentsApiRetrieveRequest,
  Payment,
  PaymentsApiListRequest,
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
  ListPaymentsResponse,
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
  Transaction,
  TransactionsApi,
  TransactionsApiCreateRequest,
  TransactionsApiRetrieveRequest,
  TransactionsApiListRequest,
  ListTransactionsResponse,
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
  SubscriptionPeriodsApi,
  SubscriptionPeriodsApiRetrieveRequest,
  SubscriptionPeriod,
  SubscriptionPeriodsApiUpdateRequest,
  SubscriptionPeriodsApiListRequest,
  ListSubscriptionPeriodsResponse,
  InvoicesApiPollRequest,
  FeesApiDeleteRequest,
  PayoutWalletsApiDeleteRequest,
  ProductsApiDeleteRequest,
  WalletsApiDeleteRequest,
  WebhooksApiDeleteRequest,
  PricesApiDeleteRequest,
  SubscriptionsApiDeleteRequest,
} from './openapi/index';
import convertCasing from './helpers/convertCasing';
import { ListPayoutWalletsResponse } from './openapi/models/ListPayoutWalletsResponse';
export * from './openapi/models/all';
export * from './openapi/apis/exception';

const VERSION = '0.0.0';

class UserAgentMiddleware implements Middleware {
  public pre(context: RequestContext): Promise<RequestContext> {
    context.setHeaderParam('User-Agent', `prism-node/${VERSION}/javascript`);
    return Promise.resolve(context);
  }

  public post(context: ResponseContext): Promise<ResponseContext> {
    return Promise.resolve(context);
  }
}

export interface PrismOptions {
  env?: string;
}

export class Prism {
  public readonly accounts: AccountsApiLayer;
  public readonly customers: CustomersApiLayer;
  public readonly fees: FeesApiLayer;
  public readonly invoices: InvoicesApiLayer;
  public readonly logs: LogsApiLayer;
  public readonly payments: PaymentsApiLayer;
  public readonly payoutWallets: PayoutWalletsApiLayer;
  public readonly prices: PricesApiLayer;
  public readonly products: ProductsApiLayer;
  public readonly subscriptions: SubscriptionsApiLayer;
  public readonly subscriptionPeriods: SubscriptionPeriodsApiLayer;
  public readonly transactions: TransactionsApiLayer;
  public readonly transfers: TransfersApiLayer;
  public readonly wallets: WalletsApiLayer;
  public readonly webhooks: WebhooksApiLayer;

  public constructor(token: string, options?: PrismOptions) {
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
    this.payments = new PaymentsApiLayer(config);
    this.payoutWallets = new PayoutWalletsApiLayer(config);
    this.prices = new PricesApiLayer(config);
    this.products = new ProductsApiLayer(config);
    this.subscriptions = new SubscriptionsApiLayer(config);
    this.subscriptionPeriods = new SubscriptionPeriodsApiLayer(config);
    this.transactions = new TransactionsApiLayer(config);
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
    options?: { prismAccount: string }
  ): Promise<Account> {
    return this.api.create({ ...convertCasing(options), create_account_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<AccountsApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Account> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: AccountsApiUpdateRequest['update_account_body'],
    options?: { prismAccount: string }
  ): Promise<Account> {
    return this.api.update({ id, ...convertCasing(options), update_account_body: data });
  }

  public async list(
    params?: Omit<AccountsApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
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
    options?: { prismAccount: string }
  ): Promise<Customer> {
    return this.api.create({ ...convertCasing(options), create_customer_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<CustomersApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Customer> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: CustomersApiUpdateRequest['update_customer_body'],
    options?: { prismAccount: string }
  ): Promise<Customer> {
    return this.api.update({ id, ...convertCasing(options), update_customer_body: data });
  }

  public async list(
    params?: Omit<CustomersApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
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
    options?: { prismAccount: string }
  ): Promise<Fee> {
    return this.api.create({ ...convertCasing(options), create_fee_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<FeesApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Fee> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<FeesApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<ListFeesResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    params: Omit<FeesApiDeleteRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<void> {
    return this.api._delete({ ...convertCasing(options), id: params.id });
  }
}

class InvoicesApiLayer {
  private readonly api: InvoicesApi;

  constructor(config: Configuration) {
    this.api = new InvoicesApi(config);
  }

  public async create(
    data: InvoicesApiCreateRequest['create_invoice_body'],
    options?: { prismAccount: string }
  ): Promise<Invoice> {
    return this.api.create({ ...convertCasing(options), create_invoice_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<InvoicesApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Invoice> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: InvoicesApiUpdateRequest['update_invoice_body'],
    options?: { prismAccount: string }
  ): Promise<Invoice> {
    return this.api.update({ id, ...convertCasing(options), update_invoice_body: data });
  }

  public async list(
    params?: Omit<InvoicesApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<ListInvoicesResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async poll(
    id: string,
    params?: Omit<InvoicesApiPollRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Invoice> {
    return this.api.poll({ id, ...convertCasing(options), ...params });
  }
}

class LogsApiLayer {
  private readonly api: LogsApi;

  constructor(config: Configuration) {
    this.api = new LogsApi(config);
  }

  public async retrieve(
    id: string,
    params?: Omit<LogsApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Log> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<LogsApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<ListLogsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class PaymentsApiLayer {
  private readonly api: PaymentsApi;

  constructor(config: Configuration) {
    this.api = new PaymentsApi(config);
  }

  public async retrieve(
    id: string,
    params?: Omit<PaymentsApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Payment> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<PaymentsApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<ListPaymentsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class PricesApiLayer {
  private readonly api: PricesApi;

  constructor(config: Configuration) {
    this.api = new PricesApi(config);
  }

  public async create(
    data: PricesApiCreateRequest['create_price_body'],
    options?: { prismAccount: string }
  ): Promise<Price> {
    return this.api.create({ ...convertCasing(options), create_price_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<PricesApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Price> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<PricesApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<ListPricesResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    params: Omit<PricesApiDeleteRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<void> {
    return this.api._delete({ ...convertCasing(options), id: params.id });
  }
}

class ProductsApiLayer {
  private readonly api: ProductsApi;

  constructor(config: Configuration) {
    this.api = new ProductsApi(config);
  }

  public async create(
    data: ProductsApiCreateRequest['create_product_body'],
    options?: { prismAccount: string }
  ): Promise<Product> {
    return this.api.create({ ...convertCasing(options), create_product_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<ProductsApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Product> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: ProductsApiUpdateRequest['update_product_body'],
    options?: { prismAccount: string }
  ): Promise<Product> {
    return this.api.update({ id, ...convertCasing(options), update_product_body: data });
  }

  public async list(
    params?: Omit<ProductsApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<ListProductsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    params: Omit<ProductsApiDeleteRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<void> {
    return this.api._delete({ ...convertCasing(options), id: params.id });
  }
}

class PayoutWalletsApiLayer {
  private readonly api: PayoutWalletsApi;

  constructor(config: Configuration) {
    this.api = new PayoutWalletsApi(config);
  }

  public async create(
    data: PayoutWalletsApiCreateRequest['create_payout_wallet_body'],
    options?: { prismAccount: string }
  ): Promise<PayoutWallet> {
    return this.api.create({ ...convertCasing(options), create_payout_wallet_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<PayoutWalletsApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<PayoutWallet> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: PayoutWalletsApiUpdateRequest['payout_wallet'],
    options?: { prismAccount: string }
  ): Promise<PayoutWallet> {
    return this.api.update({ id, ...convertCasing(options), payout_wallet: data });
  }

  public async list(
    params?: Omit<PayoutWalletsApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<ListPayoutWalletsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    params: Omit<PayoutWalletsApiDeleteRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<void> {
    return this.api._delete({ ...convertCasing(options), id: params.id });
  }
}

class SubscriptionsApiLayer {
  private readonly api: SubscriptionsApi;

  constructor(config: Configuration) {
    this.api = new SubscriptionsApi(config);
  }

  public async create(
    data: SubscriptionsApiCreateRequest['create_subscription_body'],
    options?: { prismAccount: string }
  ): Promise<Subscription> {
    return this.api.create({ ...convertCasing(options), create_subscription_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<SubscriptionsApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Subscription> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: SubscriptionsApiUpdateRequest['update_subscription_body'],
    options?: { prismAccount: string }
  ): Promise<Subscription> {
    return this.api.update({ id, ...convertCasing(options), update_subscription_body: data });
  }

  public async list(
    params?: Omit<SubscriptionsApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<ListSubscriptionsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    params: Omit<SubscriptionsApiDeleteRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<void> {
    return this.api._delete({ ...convertCasing(options), id: params.id });
  }
}

class SubscriptionPeriodsApiLayer {
  private readonly api: SubscriptionPeriodsApi;

  constructor(config: Configuration) {
    this.api = new SubscriptionPeriodsApi(config);
  }

  public async retrieve(
    id: string,
    params?: Omit<SubscriptionPeriodsApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<SubscriptionPeriod> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: SubscriptionPeriodsApiUpdateRequest['update_subscription_period_body'],
    options?: { prismAccount: string }
  ): Promise<SubscriptionPeriod> {
    return this.api.update({
      id,
      ...convertCasing(options),
      update_subscription_period_body: data,
    });
  }

  public async list(
    params?: Omit<SubscriptionPeriodsApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<ListSubscriptionPeriodsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class TransactionsApiLayer {
  private readonly api: TransactionsApi;

  constructor(config: Configuration) {
    this.api = new TransactionsApi(config);
  }

  public async create(
    data: TransactionsApiCreateRequest['create_transaction_body'],
    options?: { prismAccount: string }
  ): Promise<Transaction> {
    return this.api.create({ ...convertCasing(options), create_transaction_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<TransactionsApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Transaction> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<TransactionsApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<ListTransactionsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class TransfersApiLayer {
  private readonly api: TransfersApi;

  constructor(config: Configuration) {
    this.api = new TransfersApi(config);
  }

  public async create(
    data: TransfersApiCreateRequest['create_transfer_body'],
    options?: { prismAccount: string }
  ): Promise<Transfer> {
    return this.api.create({ ...convertCasing(options), create_transfer_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<TransfersApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Transfer> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<TransfersApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
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
    options?: { prismAccount: string }
  ): Promise<Wallet> {
    return this.api.create({ ...convertCasing(options), create_wallet_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<WalletsApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Wallet> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: WalletsApiUpdateRequest['update_wallet_body'],
    options?: { prismAccount: string }
  ): Promise<Wallet> {
    return this.api.update({ id, ...convertCasing(options), update_wallet_body: data });
  }

  public async list(
    params?: Omit<WalletsApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<ListWalletsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    params: Omit<WalletsApiDeleteRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<void> {
    return this.api._delete({ ...convertCasing(options), id: params.id });
  }
}

class WebhooksApiLayer {
  private readonly api: WebhooksApi;

  constructor(config: Configuration) {
    this.api = new WebhooksApi(config);
  }

  public async create(
    data: WebhooksApiCreateRequest['create_webhook_body'],
    options?: { prismAccount: string }
  ): Promise<Customer> {
    return this.api.create({ ...convertCasing(options), create_webhook_body: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<WebhooksApiRetrieveRequest, 'prism_account' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Customer> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: WebhooksApiUpdateRequest['update_webhook_body'],
    options?: { prismAccount: string }
  ): Promise<Customer> {
    return this.api.update({ id, ...convertCasing(options), update_webhook_body: data });
  }

  public async list(
    params?: Omit<WebhooksApiListRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<ListWebhooksResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    params: Omit<WebhooksApiDeleteRequest, 'prism_account'>,
    options?: { prismAccount: string }
  ): Promise<void> {
    return this.api._delete({ ...convertCasing(options), id: params.id });
  }
}
