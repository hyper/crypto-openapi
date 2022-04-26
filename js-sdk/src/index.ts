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
    data: CustomersApiCreateRequest['inlineObject'],
    options?: { prismAccount: string },
  ): Promise<Customer> {
    return this.api.create({ prismAccount: options?.prismAccount, inlineObject: data });
  }

  public async retrieve(
    customerId: string,
    params: Omit<CustomersApiRetrieveRequest, 'prismAccount' | 'customerId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Customer> {
    return this.api.retrieve({ prismAccount, customerId, ...params });
  }

  public async update(
    customerId: string,
    data: Omit<CustomersApiUpdateRequest, 'prismAccount' | 'customerId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Customer> {
    return this.api.update({ prismAccount, customerId, ...data });
  }

  public async list(
    params: Omit<CustomersApiListRequest, 'prismAccount'>,
    { prismAccount }: { prismAccount: string },
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
    data: FeesApiCreateRequest['inlineObject1'],
    { prismAccount }: { prismAccount: string },
  ): Promise<Fee> {
    return this.api.create({ prismAccount, inlineObject1: data });
  }

  public async retrieve(
    feeId: string,
    params: Omit<FeesApiRetrieveRequest, 'prismAccount' | 'feeId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Fee> {
    return this.api.retrieve({ prismAccount, feeId, ...params });
  }

  public async list(
    params: Omit<FeesApiListRequest, 'prismAccount'>,
    { prismAccount }: { prismAccount: string },
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
    data: InvoicesApiCreateRequest['inlineObject2'],
    { prismAccount }: { prismAccount: string },
  ): Promise<Invoice> {
    return this.api.create({ prismAccount, inlineObject2: data });
  }

  public async retrieve(
    invoiceId: string,
    params: Omit<InvoicesApiRetrieveRequest, 'prismAccount' | 'invoiceId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Invoice> {
    return this.api.retrieve({ prismAccount, invoiceId, ...params });
  }

  public async update(
    invoiceId: string,
    data: Omit<InvoicesApiUpdateRequest, 'prismAccount' | 'invoiceId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Invoice> {
    return this.api.update({ prismAccount, invoiceId, ...data });
  }

  public async list(
    params: Omit<InvoicesApiListRequest, 'prismAccount'>,
    { prismAccount }: { prismAccount: string },
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
    logId: string,
    params: Omit<LogsApiRetrieveRequest, 'prismAccount' | 'logId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Log> {
    return this.api.retrieve({ prismAccount, logId, ...params });
  }

  public async list(
    params: Omit<LogsApiListRequest, 'prismAccount'>,
    { prismAccount }: { prismAccount: string },
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
    paymentId: string,
    params: Omit<PaymentsApiRetrieveRequest, 'prismAccount' | 'paymentId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Payment> {
    return this.api.retrieve({ prismAccount, paymentId, ...params });
  }

  public async list(
    params: Omit<PaymentsApiListRequest, 'prismAccount'>,
    { prismAccount }: { prismAccount: string },
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
    data: ProductsApiCreateRequest['inlineObject3'],
    { prismAccount }: { prismAccount: string },
  ): Promise<Product> {
    return this.api.create({ prismAccount, inlineObject3: data });
  }

  public async retrieve(
    productId: string,
    params: Omit<ProductsApiRetrieveRequest, 'prismAccount' | 'productId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Product> {
    return this.api.retrieve({ prismAccount, productId, ...params });
  }

  public async update(
    productId: string,
    data: Omit<ProductsApiUpdateRequest, 'prismAccount' | 'productId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Product> {
    return this.api.update({ prismAccount, productId, ...data });
  }

  public async list(
    params: Omit<ProductsApiListRequest, 'prismAccount'>,
    { prismAccount }: { prismAccount: string },
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
    walletId: string,
    params: Omit<WalletsApiRetrieveRequest, 'prismAccount' | 'walletId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Wallet> {
    return this.api.retrieve({ prismAccount, walletId, ...params });
  }

  public async update(
    walletId: string,
    data: Omit<WalletsApiUpdateRequest, 'prismAccount' | 'walletId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Wallet> {
    return this.api.update({ prismAccount, walletId, ...data });
  }

  public async list(
    params: Omit<WalletsApiListRequest, 'prismAccount'>,
    { prismAccount }: { prismAccount: string },
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
    data: WebhooksApiCreateRequest['inlineObject5'],
    { prismAccount }: { prismAccount: string },
  ): Promise<Customer> {
    return this.api.create({ prismAccount, inlineObject5: data });
  }

  public async retrieve(
    webhookId: string,
    params: Omit<WebhooksApiRetrieveRequest, 'prismAccount' | 'webhookId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Customer> {
    return this.api.retrieve({ prismAccount, webhookId, ...params });
  }

  public async update(
    webhookId: string,
    data: Omit<WebhooksApiUpdateRequest, 'prismAccount' | 'webhookId'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<Customer> {
    return this.api.update({ prismAccount, webhookId, ...data });
  }

  public async list(
    params: Omit<WebhooksApiListRequest, 'prismAccount'>,
    { prismAccount }: { prismAccount: string },
  ): Promise<InlineResponse2007> {
    return this.api.list({ prismAccount, ...params });
  }
}
