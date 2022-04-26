import {
  Configuration,
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
export declare class Crypto {
  readonly customers: CustomersApiLayer;
  readonly fees: FeesApiLayer;
  readonly invoices: InvoicesApiLayer;
  readonly logs: LogsApiLayer;
  readonly payments: PaymentsApiLayer;
  readonly products: ProductsApiLayer;
  readonly wallets: WalletsApiLayer;
  readonly webhooks: WebhooksApiLayer;
  constructor(token: string);
}
declare class CustomersApiLayer {
  private readonly api;
  constructor(config: Configuration);
  create(
    data: CustomersApiCreateRequest['inlineObject'],
    options?: {
      prismAccount: string;
    }
  ): Promise<Customer>;
  retrieve(
    customerId: string,
    params: Omit<CustomersApiRetrieveRequest, 'prismAccount' | 'customerId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Customer>;
  update(
    customerId: string,
    data: Omit<CustomersApiUpdateRequest, 'prismAccount' | 'customerId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Customer>;
  list(
    params: Omit<CustomersApiListRequest, 'prismAccount'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<InlineResponse200>;
}
declare class FeesApiLayer {
  private readonly api;
  constructor(config: Configuration);
  create(
    data: FeesApiCreateRequest['inlineObject1'],
    options?: {
      prismAccount: string;
    }
  ): Promise<Fee>;
  retrieve(
    feeId: string,
    params: Omit<FeesApiRetrieveRequest, 'prismAccount' | 'feeId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Fee>;
  list(
    params: Omit<FeesApiListRequest, 'prismAccount'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<InlineResponse2001>;
}
declare class InvoicesApiLayer {
  private readonly api;
  constructor(config: Configuration);
  create(
    data: InvoicesApiCreateRequest['inlineObject2'],
    options?: {
      prismAccount: string;
    }
  ): Promise<Invoice>;
  retrieve(
    invoiceId: string,
    params: Omit<InvoicesApiRetrieveRequest, 'prismAccount' | 'invoiceId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Invoice>;
  update(
    invoiceId: string,
    data: Omit<InvoicesApiUpdateRequest, 'prismAccount' | 'invoiceId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Invoice>;
  list(
    params: Omit<InvoicesApiListRequest, 'prismAccount'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<InlineResponse2002>;
}
declare class LogsApiLayer {
  private readonly api;
  constructor(config: Configuration);
  retrieve(
    logId: string,
    params: Omit<LogsApiRetrieveRequest, 'prismAccount' | 'logId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Log>;
  list(
    params: Omit<LogsApiListRequest, 'prismAccount'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<InlineResponse2003>;
}
declare class PaymentsApiLayer {
  private readonly api;
  constructor(config: Configuration);
  retrieve(
    paymentId: string,
    params: Omit<PaymentsApiRetrieveRequest, 'prismAccount' | 'paymentId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Payment>;
  list(
    params: Omit<PaymentsApiListRequest, 'prismAccount'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<InlineResponse2004>;
}
declare class ProductsApiLayer {
  private readonly api;
  constructor(config: Configuration);
  create(
    data: ProductsApiCreateRequest['inlineObject3'],
    options?: {
      prismAccount: string;
    }
  ): Promise<Product>;
  retrieve(
    productId: string,
    params: Omit<ProductsApiRetrieveRequest, 'prismAccount' | 'productId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Product>;
  update(
    productId: string,
    data: Omit<ProductsApiUpdateRequest, 'prismAccount' | 'productId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Product>;
  list(
    params: Omit<ProductsApiListRequest, 'prismAccount'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<InlineResponse2005>;
}
declare class WalletsApiLayer {
  private readonly api;
  constructor(config: Configuration);
  create(
    data: WalletsApiCreateRequest['inlineObject4'],
    options?: {
      prismAccount: string;
    }
  ): Promise<Wallet>;
  retrieve(
    walletId: string,
    params: Omit<WalletsApiRetrieveRequest, 'prismAccount' | 'walletId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Wallet>;
  update(
    walletId: string,
    data: Omit<WalletsApiUpdateRequest, 'prismAccount' | 'walletId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Wallet>;
  list(
    params: Omit<WalletsApiListRequest, 'prismAccount'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<InlineResponse2006>;
}
declare class WebhooksApiLayer {
  private readonly api;
  constructor(config: Configuration);
  create(
    data: WebhooksApiCreateRequest['inlineObject5'],
    options?: {
      prismAccount: string;
    }
  ): Promise<Customer>;
  retrieve(
    webhookId: string,
    params: Omit<WebhooksApiRetrieveRequest, 'prismAccount' | 'webhookId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Customer>;
  update(
    webhookId: string,
    data: Omit<WebhooksApiUpdateRequest, 'prismAccount' | 'webhookId'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<Customer>;
  list(
    params: Omit<WebhooksApiListRequest, 'prismAccount'>,
    options?: {
      prismAccount: string;
    }
  ): Promise<InlineResponse2007>;
}
