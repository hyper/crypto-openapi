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
  CustomersApiRetrieveRequest,
  CustomersApiCreateRequest,
  FeesApiCreateRequest,
  FeesApiRetrieveRequest,
  InvoicesApiCreateRequest,
  InvoicesApiRetrieveRequest,
  InvoicesApiListRequest,
  LogsApiRetrieveRequest,
  LogsApiListRequest,
  FeesApiListRequest,
  CustomersApiListRequest,
  ProductsApiCreateRequest,
  ProductsApiRetrieveRequest,
  ProductsApiListRequest,
  WalletsApiCreateRequest,
  WalletsApiRetrieveRequest,
  WalletsApiListRequest,
  WebhooksApiCreateRequest,
  WebhooksApiRetrieveRequest,
  WebhooksApiListRequest,
  servers,
  WalletsApiUpdateRequest,
  WebhooksApiUpdateRequest,
  CustomersApiUpdateRequest,
  InvoicesApiUpdateRequest,
  ProductsApiUpdateRequest,
  TransfersApi,
  TransfersApiCreateRequest,
  TransfersApiRetrieveRequest,
  TransfersApiListRequest,
  PayoutWalletsApi,
  PayoutWalletsApiCreateRequest,
  PayoutWalletsApiRetrieveRequest,
  PayoutWalletsApiUpdateRequest,
  PayoutWalletsApiListRequest,
  AccountsApi,
  AccountsApiRetrieveRequest,
  AccountsApiCreateRequest,
  AccountsApiListRequest,
  PaymentIntentsApiCreateRequest,
  PricesApi,
  PricesApiCreateRequest,
  PricesApiRetrieveRequest,
  PricesApiListRequest,
  SubscriptionsApi,
  SubscriptionsApiCreateRequest,
  SubscriptionsApiRetrieveRequest,
  SubscriptionsApiUpdateRequest,
  SubscriptionsApiListRequest,
  PayoutWalletsApiDeleteRequest,
  ProductsApiDeleteRequest,
  WalletsApiDeleteRequest,
  WebhooksApiDeleteRequest,
  PricesApiDeleteRequest,
  PricesApiUpdateRequest,
  PaymentIntentsApi,
  PaymentIntentsApiRetrieveRequest,
  PaymentIntentsApiListRequest,
  PaymentIntentsApiPollRequest,
  PaymentIntentsApiUpdateRequest,
  InvoicesApiPayRequest,
  ServerConfiguration,
  IAccount,
  AccountListResponse,
  AccountsApiPatchRequest,
  ICustomer,
  CustomerListResponse,
  IFee,
  FeeListResponse,
  IInvoice,
  InvoiceListResponse,
  IPaymentIntent,
  ILog,
  LogListResponse,
  IPrice,
  PriceListResponse,
  ProductListResponse,
  IProduct,
  IPayoutWallet,
  PayoutWalletListResponse,
  ISubscription,
  SubscriptionListResponse,
  PaymentIntentListResponse,
  PaymentIntentsApiDeleteRequest,
  ITransfer,
  TransferListResponse,
  IWallet,
  WalletListResponse,
  IWebhook,
  WebhookListResponse,
  SubscriptionsApiDeleteRequest,
} from './openapi/index';
import convertCasing from './helpers/convertCasing';
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
  serverUrl?: string;
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
    const customServer = options?.serverUrl && new ServerConfiguration<{}>(options?.serverUrl, {});
    const envServer = options?.env ? servers[envs.indexOf(options.env)] : servers[2];

    const config = createConfiguration({
      baseServer: customServer || envServer,
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
    data: AccountsApiCreateRequest['account_create_request'],
    options?: { plutoAccount?: string }
  ): Promise<IAccount> {
    return this.api.create({ ...convertCasing(options), account_create_request: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<AccountsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<IAccount> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: AccountsApiPatchRequest['account_update_request'],
    options?: { plutoAccount?: string }
  ): Promise<IAccount> {
    return this.api.patch({ id, ...convertCasing(options), account_update_request: data });
  }

  public async list(
    params?: Omit<AccountsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<AccountListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class CustomersApiLayer {
  private readonly api: CustomersApi;

  constructor(config: Configuration) {
    this.api = new CustomersApi(config);
  }

  public async create(
    data: CustomersApiCreateRequest['customer_create_request'],
    options?: { plutoAccount?: string }
  ): Promise<ICustomer> {
    return this.api.create({ ...convertCasing(options), customer_create_request: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<CustomersApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<ICustomer> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: CustomersApiUpdateRequest['customer_update_request'],
    options?: { plutoAccount?: string }
  ): Promise<ICustomer> {
    return this.api.update({ id, ...convertCasing(options), customer_update_request: data });
  }

  public async list(
    params?: Omit<CustomersApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<CustomerListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class FeesApiLayer {
  private readonly api: FeesApi;

  constructor(config: Configuration) {
    this.api = new FeesApi(config);
  }

  public async create(
    data: FeesApiCreateRequest['fee_create_request'],
    options?: { plutoAccount?: string }
  ): Promise<IFee> {
    return this.api.create({ ...convertCasing(options), fee_create_request: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<FeesApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<IFee> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<FeesApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<FeeListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class InvoicesApiLayer {
  private readonly api: InvoicesApi;

  constructor(config: Configuration) {
    this.api = new InvoicesApi(config);
  }

  public async create(
    data: InvoicesApiCreateRequest['invoice_create_request'],
    options?: { plutoAccount?: string }
  ): Promise<IInvoice> {
    return this.api.create({ ...convertCasing(options), invoice_create_request: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<InvoicesApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<IInvoice> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: InvoicesApiUpdateRequest['invoice_update_request'],
    options?: { plutoAccount?: string }
  ): Promise<IInvoice> {
    return this.api.update({ id, ...convertCasing(options), invoice_update_request: data });
  }

  public async list(
    params?: Omit<InvoicesApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<InvoiceListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async pay(
    id: string,
    params?: Omit<InvoicesApiPayRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<IPaymentIntent> {
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
    options?: { plutoAccount?: string }
  ): Promise<ILog> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<LogsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<LogListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class PricesApiLayer {
  private readonly api: PricesApi;

  constructor(config: Configuration) {
    this.api = new PricesApi(config);
  }

  public async create(
    data: PricesApiCreateRequest['price_create_request'],
    options?: { plutoAccount?: string }
  ): Promise<IPrice> {
    return this.api.create({ ...convertCasing(options), price_create_request: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<PricesApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<IPrice> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: PricesApiUpdateRequest['price_update_request'],
    options?: { plutoAccount?: string }
  ): Promise<IPrice> {
    return this.api.update({ id, ...convertCasing(options), price_update_request: data });
  }

  public async list(
    params?: Omit<PricesApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<PriceListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    id: string,
    params: Omit<PricesApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<IPrice> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}

class ProductsApiLayer {
  private readonly api: ProductsApi;

  constructor(config: Configuration) {
    this.api = new ProductsApi(config);
  }

  public async create(
    data: ProductsApiCreateRequest['product_create_request'],
    options?: { plutoAccount?: string }
  ): Promise<IProduct> {
    return this.api.create({ ...convertCasing(options), product_create_request: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<ProductsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<IProduct> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: ProductsApiUpdateRequest['product_update_request'],
    options?: { plutoAccount?: string }
  ): Promise<IProduct> {
    return this.api.update({ id, ...convertCasing(options), product_update_request: data });
  }

  public async list(
    params?: Omit<ProductsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<ProductListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    id: string,
    params: Omit<ProductsApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<IProduct> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}

class PayoutWalletsApiLayer {
  private readonly api: PayoutWalletsApi;

  constructor(config: Configuration) {
    this.api = new PayoutWalletsApi(config);
  }

  public async create(
    data: PayoutWalletsApiCreateRequest['payout_wallet_create_request'],
    options?: { plutoAccount?: string }
  ): Promise<IPayoutWallet> {
    return this.api.create({ ...convertCasing(options), payout_wallet_create_request: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<PayoutWalletsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<IPayoutWallet> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: PayoutWalletsApiUpdateRequest['payout_wallet_update_request'],
    options?: { plutoAccount?: string }
  ): Promise<IPayoutWallet> {
    return this.api.update({ id, ...convertCasing(options), payout_wallet_update_request: data });
  }

  public async list(
    params?: Omit<PayoutWalletsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<PayoutWalletListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    id: string,
    params: Omit<PayoutWalletsApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<IPayoutWallet> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}

class SubscriptionsApiLayer {
  private readonly api: SubscriptionsApi;

  constructor(config: Configuration) {
    this.api = new SubscriptionsApi(config);
  }

  public async create(
    data: SubscriptionsApiCreateRequest['subscription_create_request'],
    options?: { plutoAccount?: string }
  ): Promise<ISubscription> {
    return this.api.create({ ...convertCasing(options), subscription_create_request: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<SubscriptionsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<ISubscription> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: SubscriptionsApiUpdateRequest['subscription_update_request'],
    options?: { plutoAccount?: string }
  ): Promise<ISubscription> {
    return this.api.update({ id, ...convertCasing(options), subscription_update_request: data });
  }

  public async list(
    params?: Omit<SubscriptionsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<SubscriptionListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async cancel(
    id: string,
    params: Omit<SubscriptionsApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<ISubscription> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}

class PaymentIntentsApiLayer {
  private readonly api: PaymentIntentsApi;

  constructor(config: Configuration) {
    this.api = new PaymentIntentsApi(config);
  }

  public async create(
    data: PaymentIntentsApiCreateRequest['payment_intent_create_request'],
    options?: { plutoAccount?: string }
  ): Promise<IPaymentIntent> {
    return this.api.create({ ...convertCasing(options), payment_intent_create_request: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<PaymentIntentsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<IPaymentIntent> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: PaymentIntentsApiUpdateRequest['payment_intent_update_request'],
    options?: { plutoAccount?: string }
  ): Promise<IPaymentIntent> {
    return this.api.update({ id, ...convertCasing(options), payment_intent_update_request: data });
  }

  public async list(
    params?: Omit<PaymentIntentsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<PaymentIntentListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async poll(
    id: string,
    params?: Omit<PaymentIntentsApiPollRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<IPaymentIntent> {
    return this.api.poll({ id, ...convertCasing(options), ...params });
  }

  public async cancel(
    id: string,
    params: Omit<PaymentIntentsApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<IPaymentIntent> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}

class TransfersApiLayer {
  private readonly api: TransfersApi;

  constructor(config: Configuration) {
    this.api = new TransfersApi(config);
  }

  public async create(
    data: TransfersApiCreateRequest['transfer_create_request'],
    options?: { plutoAccount?: string }
  ): Promise<ITransfer> {
    return this.api.create({ ...convertCasing(options), transfer_create_request: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<TransfersApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<ITransfer> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<TransfersApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<TransferListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class WalletsApiLayer {
  private readonly api: WalletsApi;

  constructor(config: Configuration) {
    this.api = new WalletsApi(config);
  }

  public async create(
    data: WalletsApiCreateRequest['wallet_create_request'],
    options?: { plutoAccount?: string }
  ): Promise<IWallet> {
    return this.api.create({ ...convertCasing(options), wallet_create_request: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<WalletsApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<IWallet> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: WalletsApiUpdateRequest['wallet_update_request'],
    options?: { plutoAccount?: string }
  ): Promise<IWallet> {
    return this.api.update({ id, ...convertCasing(options), wallet_update_request: data });
  }

  public async list(
    params?: Omit<WalletsApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<WalletListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    id: string,
    params: Omit<WalletsApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<IWallet> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}

class WebhooksApiLayer {
  private readonly api: WebhooksApi;

  constructor(config: Configuration) {
    this.api = new WebhooksApi(config);
  }

  public async create(
    data: WebhooksApiCreateRequest['webhook_create_request'],
    options?: { plutoAccount?: string }
  ): Promise<IWebhook> {
    return this.api.create({ ...convertCasing(options), webhook_create_request: data });
  }

  public async retrieve(
    id: string,
    params?: Omit<WebhooksApiRetrieveRequest, 'pluto_account' | 'id'>,
    options?: { plutoAccount?: string }
  ): Promise<IWebhook> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: WebhooksApiUpdateRequest['webhook_update_request'],
    options?: { plutoAccount?: string }
  ): Promise<IWebhook> {
    return this.api.update({ id, ...convertCasing(options), webhook_update_request: data });
  }

  public async list(
    params?: Omit<WebhooksApiListRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<WebhookListResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }

  public async delete(
    id: string,
    params: Omit<WebhooksApiDeleteRequest, 'pluto_account'>,
    options?: { plutoAccount?: string }
  ): Promise<IWebhook> {
    return this.api._delete({ id, ...convertCasing(options) });
  }
}
