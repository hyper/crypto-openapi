import {
  ServerConfiguration,
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
  CustomersApiUpdateRequest,
  InlineResponse200,
  Fee,
  FeesApiCreateRequest,
  FeesApiRetrieveRequest,
  InlineResponse2001,
  InvoicesApiCreateRequest,
  Invoice,
  InvoicesApiRetrieveRequest,
  InvoicesApiUpdateRequest,
  InvoicesApiListRequest,
  InlineResponse2002,
  LogsApiRetrieveRequest,
  InlineResponse2003,
  LogsApiListRequest,
  FeesApiListRequest,
  CustomersApiListRequest,
  Log,
  PaymentsApiRetrieveRequest,
  Payment,
  PaymentsApiListRequest,
  InlineResponse2004,
  ProductsApiCreateRequest,
  ProductsApiRetrieveRequest,
  ProductsApiUpdateRequest,
  Product,
  InlineResponse2005,
  ProductsApiListRequest,
  WalletsApiCreateRequest,
  WalletsApiUpdateRequest,
  WalletsApiRetrieveRequest,
  WalletsApiListRequest,
  InlineResponse2006,
  WebhooksApiCreateRequest,
  WebhooksApiRetrieveRequest,
  WebhooksApiUpdateRequest,
  WebhooksApiListRequest,
  Wallet,
  InlineResponse2007,
} from './openapi/index';
export * from './openapi/models/all';
export * from './openapi/apis/exception';

const VERSION = '0.0.0';

class UserAgentMiddleware implements Middleware {
  public pre(context: RequestContext): Promise<RequestContext> {
    context.setHeaderParam('User-Agent', `hyper-crypto-node/${VERSION}/javascript`);
    return Promise.resolve(context);
  }

  public post(context: ResponseContext): Promise<ResponseContext> {
    return Promise.resolve(context);
  }
}

export class Crypto {
  public readonly customers: CustomersApiLayer;
  public readonly fees: FeesApiLayer;
  public readonly invoices: InvoicesApiLayer;
  public readonly logs: LogsApiLayer;
  public readonly payments: PaymentsApiLayer;
  public readonly products: ProductsApiLayer;
  public readonly wallets: WalletsApiLayer;
  public readonly webhooks: WebhooksApiLayer;

  public constructor(token: string) {
    const baseUrl = 'http://localhost:7070/v1';

    const baseServer = new ServerConfiguration<any>(baseUrl, {});

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
    prismAccount: string,
    data: CustomersApiCreateRequest['inlineObject']
  ): Promise<Customer> {
    return this.api.create({ prismAccount, inlineObject: data });
  }

  public async retrieve(
    prismAccount: string,
    customerId: string,
    params: Omit<CustomersApiRetrieveRequest, 'prismAccount' | 'customerId'>
  ): Promise<Customer> {
    return this.api.retrieve({ prismAccount, customerId, ...params });
  }

  public async update(
    prismAccount: string,
    customerId: string,
    data: Omit<CustomersApiUpdateRequest, 'prismAccount' | 'customerId'>
  ): Promise<Customer> {
    return this.api.update({ prismAccount, customerId, ...data });
  }

  public async list(
    prismAccount: string,
    params: Omit<CustomersApiListRequest, 'prismAccount'>
  ): Promise<InlineResponse200> {
    return this.api.list({ prismAccount, ...params });
  }
}

class FeesApiLayer {
  private readonly api: FeesApi;

  constructor(config: Configuration) {
    this.api = new FeesApi(config);
  }

  public async create(
    prismAccount: string,
    data: FeesApiCreateRequest['inlineObject1']
  ): Promise<Fee> {
    return this.api.create({ prismAccount, inlineObject1: data });
  }

  public async retrieve(
    prismAccount: string,
    feeId: string,
    params: Omit<FeesApiRetrieveRequest, 'prismAccount' | 'feeId'>
  ): Promise<Fee> {
    return this.api.retrieve({ prismAccount, feeId, ...params });
  }

  public async list(
    prismAccount: string,
    params: Omit<FeesApiListRequest, 'prismAccount'>
  ): Promise<InlineResponse2001> {
    return this.api.list({ prismAccount, ...params });
  }
}

class InvoicesApiLayer {
  private readonly api: InvoicesApi;

  constructor(config: Configuration) {
    this.api = new InvoicesApi(config);
  }

  public async create(
    prismAccount: string,
    data: InvoicesApiCreateRequest['inlineObject2']
  ): Promise<Invoice> {
    return this.api.create({ prismAccount, inlineObject2: data });
  }

  public async retrieve(
    prismAccount: string,
    invoiceId: string,
    params: Omit<InvoicesApiRetrieveRequest, 'prismAccount' | 'invoiceId'>
  ): Promise<Invoice> {
    return this.api.retrieve({ prismAccount, invoiceId, ...params });
  }

  public async update(
    prismAccount: string,
    invoiceId: string,
    data: Omit<InvoicesApiUpdateRequest, 'prismAccount' | 'invoiceId'>
  ): Promise<Invoice> {
    return this.api.update({ prismAccount, invoiceId, ...data });
  }

  public async list(
    prismAccount: string,
    params: Omit<InvoicesApiListRequest, 'prismAccount'>
  ): Promise<InlineResponse2002> {
    return this.api.list({ prismAccount, ...params });
  }
}

class LogsApiLayer {
  private readonly api: LogsApi;

  constructor(config: Configuration) {
    this.api = new LogsApi(config);
  }

  public async retrieve(
    prismAccount: string,
    logId: string,
    params: Omit<LogsApiRetrieveRequest, 'prismAccount' | 'logId'>
  ): Promise<Log> {
    return this.api.retrieve({ prismAccount, logId, ...params });
  }

  public async list(
    prismAccount: string,
    params: Omit<LogsApiListRequest, 'prismAccount'>
  ): Promise<InlineResponse2003> {
    return this.api.list({ prismAccount, ...params });
  }
}

class PaymentsApiLayer {
  private readonly api: PaymentsApi;

  constructor(config: Configuration) {
    this.api = new PaymentsApi(config);
  }

  public async retrieve(
    prismAccount: string,
    paymentId: string,
    params: Omit<PaymentsApiRetrieveRequest, 'prismAccount' | 'paymentId'>
  ): Promise<Payment> {
    return this.api.retrieve({ prismAccount, paymentId, ...params });
  }

  public async list(
    prismAccount: string,
    params: Omit<PaymentsApiListRequest, 'prismAccount'>
  ): Promise<InlineResponse2004> {
    return this.api.list({ prismAccount, ...params });
  }
}

class ProductsApiLayer {
  private readonly api: ProductsApi;

  constructor(config: Configuration) {
    this.api = new ProductsApi(config);
  }

  public async create(
    prismAccount: string,
    data: ProductsApiCreateRequest['inlineObject3']
  ): Promise<Product> {
    return this.api.create({ prismAccount, inlineObject3: data });
  }

  public async retrieve(
    prismAccount: string,
    productId: string,
    params: Omit<ProductsApiRetrieveRequest, 'prismAccount' | 'productId'>
  ): Promise<Product> {
    return this.api.retrieve({ prismAccount, productId, ...params });
  }

  public async update(
    prismAccount: string,
    productId: string,
    data: Omit<ProductsApiUpdateRequest, 'prismAccount' | 'productId'>
  ): Promise<Product> {
    return this.api.update({ prismAccount, productId, ...data });
  }

  public async list(
    prismAccount: string,
    params: Omit<ProductsApiListRequest, 'prismAccount'>
  ): Promise<InlineResponse2005> {
    return this.api.list({ prismAccount, ...params });
  }
}

class WalletsApiLayer {
  private readonly api: WalletsApi;

  constructor(config: Configuration) {
    this.api = new WalletsApi(config);
  }

  public async create(
    prismAccount: string,
    data: WalletsApiCreateRequest['inlineObject4']
  ): Promise<Wallet> {
    return this.api.create({ prismAccount, inlineObject4: data });
  }

  public async retrieve(
    prismAccount: string,
    walletId: string,
    params: Omit<WalletsApiRetrieveRequest, 'prismAccount' | 'walletId'>
  ): Promise<Wallet> {
    return this.api.retrieve({ prismAccount, walletId, ...params });
  }

  public async update(
    prismAccount: string,
    walletId: string,
    data: Omit<WalletsApiUpdateRequest, 'prismAccount' | 'walletId'>
  ): Promise<Wallet> {
    return this.api.update({ prismAccount, walletId, ...data });
  }

  public async list(
    prismAccount: string,
    params: Omit<WalletsApiListRequest, 'prismAccount'>
  ): Promise<InlineResponse2006> {
    return this.api.list({ prismAccount, ...params });
  }
}

class WebhooksApiLayer {
  private readonly api: WebhooksApi;

  constructor(config: Configuration) {
    this.api = new WebhooksApi(config);
  }

  public async create(
    prismAccount: string,
    data: WebhooksApiCreateRequest['inlineObject5']
  ): Promise<Customer> {
    return this.api.create({ prismAccount, inlineObject5: data });
  }

  public async retrieve(
    prismAccount: string,
    webhookId: string,
    params: Omit<WebhooksApiRetrieveRequest, 'prismAccount' | 'webhookId'>
  ): Promise<Customer> {
    return this.api.retrieve({ prismAccount, webhookId, ...params });
  }

  public async update(
    prismAccount: string,
    webhookId: string,
    data: Omit<WebhooksApiUpdateRequest, 'prismAccount' | 'webhookId'>
  ): Promise<Customer> {
    return this.api.update({ prismAccount, webhookId, ...data });
  }

  public async list(
    prismAccount: string,
    params: Omit<WebhooksApiListRequest, 'prismAccount'>
  ): Promise<InlineResponse2007> {
    return this.api.list({ prismAccount, ...params });
  }
}
