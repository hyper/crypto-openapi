import { Configuration, Customer, CustomersApiRetrieveRequest, CustomersApiCreateRequest, CustomersApiUpdateRequest, Fee, FeesApiCreateRequest, FeesApiRetrieveRequest, InvoicesApiCreateRequest, Invoice, InvoicesApiRetrieveRequest, InvoicesApiUpdateRequest, InvoicesApiListRequest, LogsApiRetrieveRequest, ListProductsResponse, LogsApiListRequest, FeesApiListRequest, CustomersApiListRequest, Log, PaymentsApiRetrieveRequest, Payment, PaymentsApiListRequest, ProductsApiCreateRequest, ProductsApiRetrieveRequest, ProductsApiUpdateRequest, Product, ProductsApiListRequest, WalletsApiCreateRequest, WalletsApiUpdateRequest, WalletsApiRetrieveRequest, WalletsApiListRequest, WebhooksApiCreateRequest, WebhooksApiRetrieveRequest, WebhooksApiUpdateRequest, WebhooksApiListRequest, Wallet, ListCustomersResponse, ListInvoicesResponse, ListLogsResponse, ListWebhooksResponse, ListWalletsResponse, ListFeesResponse, ListPaymentsResponse } from './openapi/index';
export * from './openapi/models/all';
export * from './openapi/apis/exception';
export interface PrismOptions {
    env?: string;
}
export declare class Prism {
    readonly customers: CustomersApiLayer;
    readonly fees: FeesApiLayer;
    readonly invoices: InvoicesApiLayer;
    readonly logs: LogsApiLayer;
    readonly payments: PaymentsApiLayer;
    readonly products: ProductsApiLayer;
    readonly wallets: WalletsApiLayer;
    readonly webhooks: WebhooksApiLayer;
    constructor(token: string, options?: PrismOptions);
}
declare class CustomersApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(customerData: CustomersApiCreateRequest['customerData'], options?: {
        prismAccount: string;
    }): Promise<Customer>;
    retrieve(id: string, params?: Omit<CustomersApiRetrieveRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Customer>;
    update(id: string, data: Omit<CustomersApiUpdateRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Customer>;
    list(params?: Omit<CustomersApiListRequest, 'prismAccount'>, options?: {
        prismAccount: string;
    }): Promise<ListCustomersResponse>;
}
declare class FeesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(feeData: FeesApiCreateRequest['feeData'], options?: {
        prismAccount: string;
    }): Promise<Fee>;
    retrieve(id: string, params?: Omit<FeesApiRetrieveRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Fee>;
    list(params?: Omit<FeesApiListRequest, 'prismAccount'>, options?: {
        prismAccount: string;
    }): Promise<ListFeesResponse>;
}
declare class InvoicesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(invoiceData: InvoicesApiCreateRequest['invoiceData'], options?: {
        prismAccount: string;
    }): Promise<Invoice>;
    retrieve(id: string, params?: Omit<InvoicesApiRetrieveRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Invoice>;
    update(id: string, data: Omit<InvoicesApiUpdateRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Invoice>;
    list(params?: Omit<InvoicesApiListRequest, 'prismAccount'>, options?: {
        prismAccount: string;
    }): Promise<ListInvoicesResponse>;
}
declare class LogsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    retrieve(id: string, params?: Omit<LogsApiRetrieveRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Log>;
    list(params?: Omit<LogsApiListRequest, 'prismAccount'>, options?: {
        prismAccount: string;
    }): Promise<ListLogsResponse>;
}
declare class PaymentsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    retrieve(id: string, params?: Omit<PaymentsApiRetrieveRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Payment>;
    list(params?: Omit<PaymentsApiListRequest, 'prismAccount'>, options?: {
        prismAccount: string;
    }): Promise<ListPaymentsResponse>;
}
declare class ProductsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(productData: ProductsApiCreateRequest['productData'], options?: {
        prismAccount: string;
    }): Promise<Product>;
    retrieve(id: string, params?: Omit<ProductsApiRetrieveRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Product>;
    update(id: string, data: Omit<ProductsApiUpdateRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Product>;
    list(params?: Omit<ProductsApiListRequest, 'prismAccount'>, options?: {
        prismAccount: string;
    }): Promise<ListProductsResponse>;
}
declare class WalletsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(walletData: WalletsApiCreateRequest['walletData'], options?: {
        prismAccount: string;
    }): Promise<Wallet>;
    retrieve(id: string, params?: Omit<WalletsApiRetrieveRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Wallet>;
    update(id: string, data: Omit<WalletsApiUpdateRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Wallet>;
    list(params?: Omit<WalletsApiListRequest, 'prismAccount'>, options?: {
        prismAccount: string;
    }): Promise<ListWalletsResponse>;
}
declare class WebhooksApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(webhookData: WebhooksApiCreateRequest['webhookData'], options?: {
        prismAccount: string;
    }): Promise<Customer>;
    retrieve(id: string, params?: Omit<WebhooksApiRetrieveRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Customer>;
    update(id: string, data: Omit<WebhooksApiUpdateRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Customer>;
    list(params?: Omit<WebhooksApiListRequest, 'prismAccount'>, options?: {
        prismAccount: string;
    }): Promise<ListWebhooksResponse>;
}
