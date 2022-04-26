import { Configuration, Customer, CustomersApiRetrieveRequest, CustomersApiCreateRequest, CustomersApiUpdateRequest, InlineResponse200, Fee, FeesApiCreateRequest, FeesApiRetrieveRequest, InlineResponse2001, InvoicesApiCreateRequest, Invoice, InvoicesApiRetrieveRequest, InvoicesApiUpdateRequest, InvoicesApiListRequest, InlineResponse2002, LogsApiRetrieveRequest, InlineResponse2003, LogsApiListRequest, FeesApiListRequest, CustomersApiListRequest, Log, PaymentsApiRetrieveRequest, Payment, PaymentsApiListRequest, InlineResponse2004, ProductsApiCreateRequest, ProductsApiRetrieveRequest, ProductsApiUpdateRequest, Product, InlineResponse2005, ProductsApiListRequest, WalletsApiCreateRequest, WalletsApiUpdateRequest, WalletsApiRetrieveRequest, WalletsApiListRequest, InlineResponse2006, WebhooksApiCreateRequest, WebhooksApiRetrieveRequest, WebhooksApiUpdateRequest, WebhooksApiListRequest, Wallet, InlineResponse2007 } from './openapi/index';
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
    create(prismAccount: string, data: CustomersApiCreateRequest['inlineObject']): Promise<Customer>;
    retrieve(prismAccount: string, customerId: string, params: Omit<CustomersApiRetrieveRequest, 'prismAccount' | 'customerId'>): Promise<Customer>;
    update(prismAccount: string, customerId: string, data: Omit<CustomersApiUpdateRequest, 'prismAccount' | 'customerId'>): Promise<Customer>;
    list(prismAccount: string, params: Omit<CustomersApiListRequest, 'prismAccount'>): Promise<InlineResponse200>;
}
declare class FeesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(prismAccount: string, data: FeesApiCreateRequest['inlineObject1']): Promise<Fee>;
    retrieve(prismAccount: string, feeId: string, params: Omit<FeesApiRetrieveRequest, 'prismAccount' | 'feeId'>): Promise<Fee>;
    list(prismAccount: string, params: Omit<FeesApiListRequest, 'prismAccount'>): Promise<InlineResponse2001>;
}
declare class InvoicesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(prismAccount: string, data: InvoicesApiCreateRequest['inlineObject2']): Promise<Invoice>;
    retrieve(prismAccount: string, invoiceId: string, params: Omit<InvoicesApiRetrieveRequest, 'prismAccount' | 'invoiceId'>): Promise<Invoice>;
    update(prismAccount: string, invoiceId: string, data: Omit<InvoicesApiUpdateRequest, 'prismAccount' | 'invoiceId'>): Promise<Invoice>;
    list(prismAccount: string, params: Omit<InvoicesApiListRequest, 'prismAccount'>): Promise<InlineResponse2002>;
}
declare class LogsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    retrieve(prismAccount: string, logId: string, params: Omit<LogsApiRetrieveRequest, 'prismAccount' | 'logId'>): Promise<Log>;
    list(prismAccount: string, params: Omit<LogsApiListRequest, 'prismAccount'>): Promise<InlineResponse2003>;
}
declare class PaymentsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    retrieve(prismAccount: string, paymentId: string, params: Omit<PaymentsApiRetrieveRequest, 'prismAccount' | 'paymentId'>): Promise<Payment>;
    list(prismAccount: string, params: Omit<PaymentsApiListRequest, 'prismAccount'>): Promise<InlineResponse2004>;
}
declare class ProductsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(prismAccount: string, data: ProductsApiCreateRequest['inlineObject3']): Promise<Product>;
    retrieve(prismAccount: string, productId: string, params: Omit<ProductsApiRetrieveRequest, 'prismAccount' | 'productId'>): Promise<Product>;
    update(prismAccount: string, productId: string, data: Omit<ProductsApiUpdateRequest, 'prismAccount' | 'productId'>): Promise<Product>;
    list(prismAccount: string, params: Omit<ProductsApiListRequest, 'prismAccount'>): Promise<InlineResponse2005>;
}
declare class WalletsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(prismAccount: string, data: WalletsApiCreateRequest['inlineObject4']): Promise<Wallet>;
    retrieve(prismAccount: string, walletId: string, params: Omit<WalletsApiRetrieveRequest, 'prismAccount' | 'walletId'>): Promise<Wallet>;
    update(prismAccount: string, walletId: string, data: Omit<WalletsApiUpdateRequest, 'prismAccount' | 'walletId'>): Promise<Wallet>;
    list(prismAccount: string, params: Omit<WalletsApiListRequest, 'prismAccount'>): Promise<InlineResponse2006>;
}
declare class WebhooksApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(prismAccount: string, data: WebhooksApiCreateRequest['inlineObject5']): Promise<Customer>;
    retrieve(prismAccount: string, webhookId: string, params: Omit<WebhooksApiRetrieveRequest, 'prismAccount' | 'webhookId'>): Promise<Customer>;
    update(prismAccount: string, webhookId: string, data: Omit<WebhooksApiUpdateRequest, 'prismAccount' | 'webhookId'>): Promise<Customer>;
    list(prismAccount: string, params: Omit<WebhooksApiListRequest, 'prismAccount'>): Promise<InlineResponse2007>;
}
