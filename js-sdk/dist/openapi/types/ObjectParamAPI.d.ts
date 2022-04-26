import { Configuration } from '../configuration';
import { Customer } from '../models/Customer';
import { Fee } from '../models/Fee';
import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { Invoice } from '../models/Invoice';
import { Log } from '../models/Log';
import { Payment } from '../models/Payment';
import { Product } from '../models/Product';
import { Wallet } from '../models/Wallet';
import { Webhook } from '../models/Webhook';
import { CustomersApiRequestFactory, CustomersApiResponseProcessor } from "../apis/CustomersApi";
export interface CustomersApiCreateRequest {
    prismAccount?: string;
    inlineObject?: InlineObject;
}
export interface CustomersApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prismAccount?: string;
}
export interface CustomersApiRetrieveRequest {
    customerId: string;
    expand?: string;
    prismAccount?: string;
}
export interface CustomersApiUpdateRequest {
    customerId: string;
    prismAccount?: string;
}
export declare class ObjectCustomersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor);
    create(param?: CustomersApiCreateRequest, options?: Configuration): Promise<Customer>;
    list(param?: CustomersApiListRequest, options?: Configuration): Promise<InlineResponse200>;
    retrieve(param: CustomersApiRetrieveRequest, options?: Configuration): Promise<Customer>;
    update(param: CustomersApiUpdateRequest, options?: Configuration): Promise<Customer>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export interface FeesApiDeleteRequest {
    feeId: string;
    prismAccount?: string;
}
export interface FeesApiCreateRequest {
    prismAccount?: string;
    inlineObject1?: InlineObject1;
}
export interface FeesApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prismAccount?: string;
}
export interface FeesApiRetrieveRequest {
    feeId: string;
    expand?: string;
    prismAccount?: string;
}
export declare class ObjectFeesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor);
    _delete(param: FeesApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: FeesApiCreateRequest, options?: Configuration): Promise<Fee>;
    list(param?: FeesApiListRequest, options?: Configuration): Promise<InlineResponse2001>;
    retrieve(param: FeesApiRetrieveRequest, options?: Configuration): Promise<Fee>;
}
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor } from "../apis/InvoicesApi";
export interface InvoicesApiCreateRequest {
    prismAccount?: string;
    inlineObject2?: InlineObject2;
}
export interface InvoicesApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prismAccount?: string;
}
export interface InvoicesApiRetrieveRequest {
    invoiceId: string;
    expand?: string;
    prismAccount?: string;
}
export interface InvoicesApiUpdateRequest {
    invoiceId: string;
    prismAccount?: string;
}
export declare class ObjectInvoicesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor);
    create(param?: InvoicesApiCreateRequest, options?: Configuration): Promise<Invoice>;
    list(param?: InvoicesApiListRequest, options?: Configuration): Promise<InlineResponse2002>;
    retrieve(param: InvoicesApiRetrieveRequest, options?: Configuration): Promise<Invoice>;
    update(param: InvoicesApiUpdateRequest, options?: Configuration): Promise<Invoice>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export interface LogsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prismAccount?: string;
}
export interface LogsApiRetrieveRequest {
    logId: string;
    expand?: string;
    prismAccount?: string;
}
export declare class ObjectLogsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    list(param?: LogsApiListRequest, options?: Configuration): Promise<InlineResponse2003>;
    retrieve(param: LogsApiRetrieveRequest, options?: Configuration): Promise<Log>;
}
import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor } from "../apis/PaymentsApi";
export interface PaymentsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prismAccount?: string;
}
export interface PaymentsApiRetrieveRequest {
    paymentId: string;
    expand?: string;
    prismAccount?: string;
}
export declare class ObjectPaymentsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentsApiRequestFactory, responseProcessor?: PaymentsApiResponseProcessor);
    list(param?: PaymentsApiListRequest, options?: Configuration): Promise<InlineResponse2004>;
    retrieve(param: PaymentsApiRetrieveRequest, options?: Configuration): Promise<Payment>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export interface ProductsApiDeleteRequest {
    productId: string;
    prismAccount?: string;
}
export interface ProductsApiCreateRequest {
    prismAccount?: string;
    inlineObject3?: InlineObject3;
}
export interface ProductsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prismAccount?: string;
}
export interface ProductsApiRetrieveRequest {
    productId: string;
    expand?: string;
    prismAccount?: string;
}
export interface ProductsApiUpdateRequest {
    productId: string;
    prismAccount?: string;
}
export declare class ObjectProductsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    _delete(param: ProductsApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: ProductsApiCreateRequest, options?: Configuration): Promise<Product>;
    list(param?: ProductsApiListRequest, options?: Configuration): Promise<InlineResponse2005>;
    retrieve(param: ProductsApiRetrieveRequest, options?: Configuration): Promise<Product>;
    update(param: ProductsApiUpdateRequest, options?: Configuration): Promise<Product>;
}
import { WalletsApiRequestFactory, WalletsApiResponseProcessor } from "../apis/WalletsApi";
export interface WalletsApiDeleteRequest {
    walletId: string;
    prismAccount?: string;
}
export interface WalletsApiCreateRequest {
    prismAccount?: string;
    inlineObject4?: InlineObject4;
}
export interface WalletsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prismAccount?: string;
}
export interface WalletsApiRetrieveRequest {
    walletId: string;
    expand?: string;
    prismAccount?: string;
}
export interface WalletsApiUpdateRequest {
    walletId: string;
    prismAccount?: string;
}
export declare class ObjectWalletsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(param: WalletsApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: WalletsApiCreateRequest, options?: Configuration): Promise<Wallet>;
    list(param?: WalletsApiListRequest, options?: Configuration): Promise<InlineResponse2006>;
    retrieve(param: WalletsApiRetrieveRequest, options?: Configuration): Promise<Wallet>;
    update(param: WalletsApiUpdateRequest, options?: Configuration): Promise<Wallet>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export interface WebhooksApiDeleteRequest {
    webhookId: string;
    prismAccount?: string;
}
export interface WebhooksApiCreateRequest {
    prismAccount?: string;
    inlineObject5?: InlineObject5;
}
export interface WebhooksApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prismAccount?: string;
}
export interface WebhooksApiRetrieveRequest {
    webhookId: string;
    expand?: string;
    prismAccount?: string;
}
export interface WebhooksApiUpdateRequest {
    webhookId: string;
    prismAccount?: string;
}
export declare class ObjectWebhooksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(param: WebhooksApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: WebhooksApiCreateRequest, options?: Configuration): Promise<Webhook>;
    list(param?: WebhooksApiListRequest, options?: Configuration): Promise<InlineResponse2007>;
    retrieve(param: WebhooksApiRetrieveRequest, options?: Configuration): Promise<Webhook>;
    update(param: WebhooksApiUpdateRequest, options?: Configuration): Promise<Webhook>;
}
