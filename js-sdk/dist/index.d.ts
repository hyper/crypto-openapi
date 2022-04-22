import { CustomersApi, FeesApi, InvoicesApi, LogsApi, PaymentsApi, ProductsApi, WalletsApi, WebhooksApi } from './openapi/index';
export * from './openapi/models/all';
export * from './openapi/apis/exception';
export declare class Crypto {
    readonly customers: CustomersApi;
    readonly fees: FeesApi;
    readonly invoices: InvoicesApi;
    readonly logs: LogsApi;
    readonly payments: PaymentsApi;
    readonly products: ProductsApi;
    readonly wallets: WalletsApi;
    readonly webhooks: WebhooksApi;
    constructor(token: string);
}
