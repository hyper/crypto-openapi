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
  public readonly _configuration: Configuration;
  public readonly customers: CustomersApi;
  public readonly fees: FeesApi;
  public readonly invoices: InvoicesApi;
  public readonly logs: LogsApi;
  public readonly payments: PaymentsApi;
  public readonly products: ProductsApi;
  public readonly wallets: WalletsApi;
  public readonly webhooks: WebhooksApi;

  public constructor(token: string) {
    const baseUrl = 'https://crypto.hyper.co/';

    const baseServer = new ServerConfiguration<any>(baseUrl, {});

    const config = createConfiguration({
      baseServer,
      promiseMiddleware: [new UserAgentMiddleware()],
      authMethods: {
        bearerAuth: {
          tokenProvider: {
            getToken: () => token,
          },
        },
      },
    });

    this._configuration = config;

    this.customers = new CustomersApi(config);
    this.fees = new FeesApi(config);
    this.invoices = new InvoicesApi(config);
    this.logs = new LogsApi(config);
    this.payments = new PaymentsApi(config);
    this.products = new ProductsApi(config);
    this.wallets = new WalletsApi(config);
    this.webhooks = new WebhooksApi(config);
  }
}
