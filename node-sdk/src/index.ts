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
  InlineObject1,
  InlineObject,
  InlineObject2,
  InlineObject3,
  InlineObject4,
} from './openapi/index';
import convertCasing from './helpers/convertCasing';
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
  public readonly customers: CustomersApiLayer;
  public readonly fees: FeesApiLayer;
  public readonly invoices: InvoicesApiLayer;
  public readonly logs: LogsApiLayer;
  public readonly payments: PaymentsApiLayer;
  public readonly products: ProductsApiLayer;
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
            context.setHeaderParam('Authorization', 'Bearer ' + token),
        },
      },
    });

    this.customers = new CustomersApiLayer(config);
    this.fees = new FeesApiLayer(config);
    this.invoices = new InvoicesApiLayer(config);
    this.logs = new LogsApiLayer(config);
    this.payments = new PaymentsApiLayer(config);
    this.products = new ProductsApiLayer(config);
    this.wallets = new WalletsApiLayer(config);
    this.webhooks = new WebhooksApiLayer(config);
  }
}

class CustomersApiLayer {
  private readonly api: CustomersApi;

  constructor(config: Configuration) {
    this.api = new CustomersApi(config);
  }

  public async create(
    customerData: CustomersApiCreateRequest['customer_data'],
    options?: { prismAccount: string }
  ): Promise<Customer> {
    return this.api.create({ ...convertCasing(options), customer_data: customerData });
  }

  public async retrieve(
    id: string,
    params?: Omit<CustomersApiRetrieveRequest, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Customer> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: Omit<InlineObject, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Customer> {
    return this.api.update({ id, ...convertCasing(options), ...data });
  }

  public async list(
    params?: Omit<CustomersApiListRequest, 'prismAccount'>,
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
    feeData: FeesApiCreateRequest['fee_data'],
    options?: { prismAccount: string }
  ): Promise<Fee> {
    return this.api.create({ ...convertCasing(options), fee_data: feeData });
  }

  public async retrieve(
    id: string,
    params?: Omit<FeesApiRetrieveRequest, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Fee> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<FeesApiListRequest, 'prismAccount'>,
    options?: { prismAccount: string }
  ): Promise<ListFeesResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class InvoicesApiLayer {
  private readonly api: InvoicesApi;

  constructor(config: Configuration) {
    this.api = new InvoicesApi(config);
  }

  public async create(
    invoiceData: InvoicesApiCreateRequest['invoice_data'],
    options?: { prismAccount: string }
  ): Promise<Invoice> {
    return this.api.create({ ...convertCasing(options), invoice_data: invoiceData });
  }

  public async retrieve(
    id: string,
    params?: Omit<InvoicesApiRetrieveRequest, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Invoice> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: Omit<InlineObject1, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Invoice> {
    return this.api.update({ id, ...convertCasing(options), ...data });
  }

  public async list(
    params?: Omit<InvoicesApiListRequest, 'prismAccount'>,
    options?: { prismAccount: string }
  ): Promise<ListInvoicesResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class LogsApiLayer {
  private readonly api: LogsApi;

  constructor(config: Configuration) {
    this.api = new LogsApi(config);
  }

  public async retrieve(
    id: string,
    params?: Omit<LogsApiRetrieveRequest, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Log> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<LogsApiListRequest, 'prismAccount'>,
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
    params?: Omit<PaymentsApiRetrieveRequest, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Payment> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async list(
    params?: Omit<PaymentsApiListRequest, 'prismAccount'>,
    options?: { prismAccount: string }
  ): Promise<ListPaymentsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class ProductsApiLayer {
  private readonly api: ProductsApi;

  constructor(config: Configuration) {
    this.api = new ProductsApi(config);
  }

  public async create(
    productData: ProductsApiCreateRequest['product_data'],
    options?: { prismAccount: string }
  ): Promise<Product> {
    return this.api.create({ ...convertCasing(options), product_data: productData });
  }

  public async retrieve(
    id: string,
    params?: Omit<ProductsApiRetrieveRequest, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Product> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: Omit<InlineObject2, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Product> {
    return this.api.update({ id, ...convertCasing(options), ...data });
  }

  public async list(
    params?: Omit<ProductsApiListRequest, 'prismAccount'>,
    options?: { prismAccount: string }
  ): Promise<ListProductsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class WalletsApiLayer {
  private readonly api: WalletsApi;

  constructor(config: Configuration) {
    this.api = new WalletsApi(config);
  }

  public async create(
    walletData: WalletsApiCreateRequest['wallet_data'],
    options?: { prismAccount: string }
  ): Promise<Wallet> {
    return this.api.create({ ...convertCasing(options), wallet_data: walletData });
  }

  public async retrieve(
    id: string,
    params?: Omit<WalletsApiRetrieveRequest, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Wallet> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: Omit<InlineObject3, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Wallet> {
    return this.api.update({ id, ...convertCasing(options), ...data });
  }

  public async list(
    params?: Omit<WalletsApiListRequest, 'prismAccount'>,
    options?: { prismAccount: string }
  ): Promise<ListWalletsResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}

class WebhooksApiLayer {
  private readonly api: WebhooksApi;

  constructor(config: Configuration) {
    this.api = new WebhooksApi(config);
  }

  public async create(
    webhookData: WebhooksApiCreateRequest['webhook_data'],
    options?: { prismAccount: string }
  ): Promise<Customer> {
    return this.api.create({ ...convertCasing(options), webhook_data: webhookData });
  }

  public async retrieve(
    id: string,
    params?: Omit<WebhooksApiRetrieveRequest, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Customer> {
    return this.api.retrieve({ id, ...convertCasing(options), ...params });
  }

  public async update(
    id: string,
    data: Omit<InlineObject4, 'prismAccount' | 'id'>,
    options?: { prismAccount: string }
  ): Promise<Customer> {
    return this.api.update({ id, ...convertCasing(options), ...data });
  }

  public async list(
    params?: Omit<WebhooksApiListRequest, 'prismAccount'>,
    options?: { prismAccount: string }
  ): Promise<ListWebhooksResponse> {
    return this.api.list({ ...convertCasing(options), ...params });
  }
}
