import { Configuration } from '../configuration';
import { CreateCustomerBody } from '../models/CreateCustomerBody';
import { CreateFeeBody } from '../models/CreateFeeBody';
import { CreateInvoiceBody } from '../models/CreateInvoiceBody';
import { CreatePayoutWalletBody } from '../models/CreatePayoutWalletBody';
import { CreateProductBody } from '../models/CreateProductBody';
import { CreateTransferBody } from '../models/CreateTransferBody';
import { CreateWalletBody } from '../models/CreateWalletBody';
import { CreateWebhookBody } from '../models/CreateWebhookBody';
import { Customer } from '../models/Customer';
import { Fee } from '../models/Fee';
import { Invoice } from '../models/Invoice';
import { ListCustomersResponse } from '../models/ListCustomersResponse';
import { ListFeesResponse } from '../models/ListFeesResponse';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { ListLogsResponse } from '../models/ListLogsResponse';
import { ListPaymentsResponse } from '../models/ListPaymentsResponse';
import { ListPayoutWalletsResponse } from '../models/ListPayoutWalletsResponse';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { ListTransfersResponse } from '../models/ListTransfersResponse';
import { ListWalletsResponse } from '../models/ListWalletsResponse';
import { ListWebhooksResponse } from '../models/ListWebhooksResponse';
import { Log } from '../models/Log';
import { Payment } from '../models/Payment';
import { PayoutWallet } from '../models/PayoutWallet';
import { Product } from '../models/Product';
import { Transfer } from '../models/Transfer';
import { UpdateCustomerBody } from '../models/UpdateCustomerBody';
import { UpdateInvoiceBody } from '../models/UpdateInvoiceBody';
import { UpdatePayoutWalletBody } from '../models/UpdatePayoutWalletBody';
import { UpdateProductBody } from '../models/UpdateProductBody';
import { UpdateWalletBody } from '../models/UpdateWalletBody';
import { UpdateWebhookBody } from '../models/UpdateWebhookBody';
import { Wallet } from '../models/Wallet';
import { Webhook } from '../models/Webhook';
import { CustomersApiRequestFactory, CustomersApiResponseProcessor } from "../apis/CustomersApi";
export interface CustomersApiCreateRequest {
    prism_account?: string;
    create_customer_body?: CreateCustomerBody;
}
export interface CustomersApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prism_account?: string;
}
export interface CustomersApiRetrieveRequest {
    id: string;
    expand?: string;
    prism_account?: string;
}
export interface CustomersApiUpdateRequest {
    id: string;
    prism_account?: string;
    update_customer_body?: UpdateCustomerBody;
}
export declare class ObjectCustomersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor);
    create(param?: CustomersApiCreateRequest, options?: Configuration): Promise<Customer>;
    list(param?: CustomersApiListRequest, options?: Configuration): Promise<ListCustomersResponse>;
    retrieve(param: CustomersApiRetrieveRequest, options?: Configuration): Promise<Customer>;
    update(param: CustomersApiUpdateRequest, options?: Configuration): Promise<Customer>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export interface FeesApiDeleteRequest {
    id: string;
    prism_account?: string;
}
export interface FeesApiCreateRequest {
    prism_account?: string;
    create_fee_body?: CreateFeeBody;
}
export interface FeesApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prism_account?: string;
}
export interface FeesApiRetrieveRequest {
    id: string;
    expand?: string;
    prism_account?: string;
}
export declare class ObjectFeesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor);
    _delete(param: FeesApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: FeesApiCreateRequest, options?: Configuration): Promise<Fee>;
    list(param?: FeesApiListRequest, options?: Configuration): Promise<ListFeesResponse>;
    retrieve(param: FeesApiRetrieveRequest, options?: Configuration): Promise<Fee>;
}
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor } from "../apis/InvoicesApi";
export interface InvoicesApiCreateRequest {
    prism_account?: string;
    create_invoice_body?: CreateInvoiceBody;
}
export interface InvoicesApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prism_account?: string;
}
export interface InvoicesApiPollRequest {
    id: string;
    expand?: string;
    prism_account?: string;
}
export interface InvoicesApiRetrieveRequest {
    id: string;
    expand?: string;
    prism_account?: string;
}
export interface InvoicesApiUpdateRequest {
    id: string;
    prism_account?: string;
    update_invoice_body?: UpdateInvoiceBody;
}
export declare class ObjectInvoicesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor);
    create(param?: InvoicesApiCreateRequest, options?: Configuration): Promise<Invoice>;
    list(param?: InvoicesApiListRequest, options?: Configuration): Promise<ListInvoicesResponse>;
    poll(param: InvoicesApiPollRequest, options?: Configuration): Promise<void>;
    retrieve(param: InvoicesApiRetrieveRequest, options?: Configuration): Promise<Invoice>;
    update(param: InvoicesApiUpdateRequest, options?: Configuration): Promise<Invoice>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export interface LogsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prism_account?: string;
}
export interface LogsApiRetrieveRequest {
    id: string;
    expand?: string;
    prism_account?: string;
}
export declare class ObjectLogsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    list(param?: LogsApiListRequest, options?: Configuration): Promise<ListLogsResponse>;
    retrieve(param: LogsApiRetrieveRequest, options?: Configuration): Promise<Log>;
}
import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor } from "../apis/PaymentsApi";
export interface PaymentsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prism_account?: string;
}
export interface PaymentsApiRetrieveRequest {
    id: string;
    expand?: string;
    prism_account?: string;
}
export declare class ObjectPaymentsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentsApiRequestFactory, responseProcessor?: PaymentsApiResponseProcessor);
    list(param?: PaymentsApiListRequest, options?: Configuration): Promise<ListPaymentsResponse>;
    retrieve(param: PaymentsApiRetrieveRequest, options?: Configuration): Promise<Payment>;
}
import { PayoutWalletsApiRequestFactory, PayoutWalletsApiResponseProcessor } from "../apis/PayoutWalletsApi";
export interface PayoutWalletsApiDeleteRequest {
    id: string;
    prism_account?: string;
}
export interface PayoutWalletsApiCreateRequest {
    prism_account?: string;
    create_payout_wallet_body?: CreatePayoutWalletBody;
}
export interface PayoutWalletsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prism_account?: string;
}
export interface PayoutWalletsApiRetrieveRequest {
    id: string;
    expand?: string;
    prism_account?: string;
}
export interface PayoutWalletsApiUpdateRequest {
    id: string;
    prism_account?: string;
    update_payout_wallet_body?: UpdatePayoutWalletBody;
}
export declare class ObjectPayoutWalletsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PayoutWalletsApiRequestFactory, responseProcessor?: PayoutWalletsApiResponseProcessor);
    _delete(param: PayoutWalletsApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: PayoutWalletsApiCreateRequest, options?: Configuration): Promise<PayoutWallet>;
    list(param?: PayoutWalletsApiListRequest, options?: Configuration): Promise<ListPayoutWalletsResponse>;
    retrieve(param: PayoutWalletsApiRetrieveRequest, options?: Configuration): Promise<PayoutWallet>;
    update(param: PayoutWalletsApiUpdateRequest, options?: Configuration): Promise<PayoutWallet>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export interface ProductsApiDeleteRequest {
    id: string;
    prism_account?: string;
}
export interface ProductsApiCreateRequest {
    prism_account?: string;
    create_product_body?: CreateProductBody;
}
export interface ProductsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prism_account?: string;
}
export interface ProductsApiRetrieveRequest {
    id: string;
    expand?: string;
    prism_account?: string;
}
export interface ProductsApiUpdateRequest {
    id: string;
    prism_account?: string;
    update_product_body?: UpdateProductBody;
}
export declare class ObjectProductsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    _delete(param: ProductsApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: ProductsApiCreateRequest, options?: Configuration): Promise<Product>;
    list(param?: ProductsApiListRequest, options?: Configuration): Promise<ListProductsResponse>;
    retrieve(param: ProductsApiRetrieveRequest, options?: Configuration): Promise<Product>;
    update(param: ProductsApiUpdateRequest, options?: Configuration): Promise<Product>;
}
import { TransfersApiRequestFactory, TransfersApiResponseProcessor } from "../apis/TransfersApi";
export interface TransfersApiCreateRequest {
    prism_account?: string;
    create_transfer_body?: CreateTransferBody;
}
export interface TransfersApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prism_account?: string;
}
export interface TransfersApiRetrieveRequest {
    id: string;
    expand?: string;
    prism_account?: string;
}
export declare class ObjectTransfersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TransfersApiRequestFactory, responseProcessor?: TransfersApiResponseProcessor);
    create(param?: TransfersApiCreateRequest, options?: Configuration): Promise<Transfer>;
    list(param?: TransfersApiListRequest, options?: Configuration): Promise<ListTransfersResponse>;
    retrieve(param: TransfersApiRetrieveRequest, options?: Configuration): Promise<Transfer>;
}
import { WalletsApiRequestFactory, WalletsApiResponseProcessor } from "../apis/WalletsApi";
export interface WalletsApiDeleteRequest {
    id: string;
    expand?: string;
    prism_account?: string;
}
export interface WalletsApiCreateRequest {
    prism_account?: string;
    create_wallet_body?: CreateWalletBody;
}
export interface WalletsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prism_account?: string;
}
export interface WalletsApiRetrieveRequest {
    id: string;
    expand?: string;
    prism_account?: string;
}
export interface WalletsApiUpdateRequest {
    id: string;
    prism_account?: string;
    update_wallet_body?: UpdateWalletBody;
}
export declare class ObjectWalletsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(param: WalletsApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: WalletsApiCreateRequest, options?: Configuration): Promise<Wallet>;
    list(param?: WalletsApiListRequest, options?: Configuration): Promise<ListWalletsResponse>;
    retrieve(param: WalletsApiRetrieveRequest, options?: Configuration): Promise<Wallet>;
    update(param: WalletsApiUpdateRequest, options?: Configuration): Promise<Wallet>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export interface WebhooksApiDeleteRequest {
    id: string;
    prism_account?: string;
}
export interface WebhooksApiCreateRequest {
    prism_account?: string;
    create_webhook_body?: CreateWebhookBody;
}
export interface WebhooksApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prism_account?: string;
}
export interface WebhooksApiRetrieveRequest {
    id: string;
    expand?: string;
    prism_account?: string;
}
export interface WebhooksApiUpdateRequest {
    id: string;
    prism_account?: string;
    update_webhook_body?: UpdateWebhookBody;
}
export declare class ObjectWebhooksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(param: WebhooksApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: WebhooksApiCreateRequest, options?: Configuration): Promise<Webhook>;
    list(param?: WebhooksApiListRequest, options?: Configuration): Promise<ListWebhooksResponse>;
    retrieve(param: WebhooksApiRetrieveRequest, options?: Configuration): Promise<Webhook>;
    update(param: WebhooksApiUpdateRequest, options?: Configuration): Promise<Webhook>;
}
