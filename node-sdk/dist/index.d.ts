import { Configuration, Customer, CustomersApiRetrieveRequest, CustomersApiCreateRequest, CustomersApiUpdateRequest, InlineResponse200, Fee, FeesApiCreateRequest, FeesApiRetrieveRequest, InlineResponse2001, InvoicesApiCreateRequest, Invoice, InvoicesApiRetrieveRequest, InvoicesApiUpdateRequest, InvoicesApiListRequest, InlineResponse2002, LogsApiRetrieveRequest, InlineResponse2003, LogsApiListRequest, FeesApiListRequest, CustomersApiListRequest, Log, PaymentsApiRetrieveRequest, Payment, PaymentsApiListRequest, InlineResponse2004, ProductsApiCreateRequest, ProductsApiRetrieveRequest, ProductsApiUpdateRequest, Product, InlineResponse2005, ProductsApiListRequest, WalletsApiCreateRequest, WalletsApiUpdateRequest, WalletsApiRetrieveRequest, WalletsApiListRequest, WebhooksApiCreateRequest, WebhooksApiRetrieveRequest, WebhooksApiUpdateRequest, WebhooksApiListRequest, Wallet, InlineResponse2007, InlineResponse2008 } from './openapi/index';
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
    create(data: CustomersApiCreateRequest['inlineObject'], options?: {
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
    }): Promise<InlineResponse200>;
}
declare class FeesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: FeesApiCreateRequest['inlineObject1'], options?: {
        prismAccount: string;
    }): Promise<Fee>;
    retrieve(id: string, params?: Omit<FeesApiRetrieveRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Fee>;
    list(params?: Omit<FeesApiListRequest, 'prismAccount'>, options?: {
        prismAccount: string;
    }): Promise<InlineResponse2001>;
}
declare class InvoicesApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: InvoicesApiCreateRequest['inlineObject2'], options?: {
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
    }): Promise<InlineResponse2002>;
}
declare class LogsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    retrieve(id: string, params?: Omit<LogsApiRetrieveRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Log>;
    list(params?: Omit<LogsApiListRequest, 'prismAccount'>, options?: {
        prismAccount: string;
    }): Promise<InlineResponse2003>;
}
declare class PaymentsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    retrieve(id: string, params?: Omit<PaymentsApiRetrieveRequest, 'prismAccount' | 'id'>, options?: {
        prismAccount: string;
    }): Promise<Payment>;
    list(params?: Omit<PaymentsApiListRequest, 'prismAccount'>, options?: {
        prismAccount: string;
    }): Promise<InlineResponse2004>;
}
declare class ProductsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: ProductsApiCreateRequest['inlineObject5'], options?: {
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
    }): Promise<InlineResponse2005>;
}
declare class WalletsApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: WalletsApiCreateRequest['inlineObject7'], options?: {
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
    }): Promise<InlineResponse2007>;
}
declare class WebhooksApiLayer {
    private readonly api;
    constructor(config: Configuration);
    create(data: WebhooksApiCreateRequest['inlineObject8'], options?: {
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
    }): Promise<InlineResponse2008>;
}
