import { Configuration } from '../configuration';
import { Customer } from '../models/Customer';
import { Fee } from '../models/Fee';
import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineObject6 } from '../models/InlineObject6';
import { InlineObject7 } from '../models/InlineObject7';
import { InlineObject8 } from '../models/InlineObject8';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { InlineResponse2008 } from '../models/InlineResponse2008';
import { Invoice } from '../models/Invoice';
import { Log } from '../models/Log';
import { Payment } from '../models/Payment';
import { PayoutWallet } from '../models/PayoutWallet';
import { Product } from '../models/Product';
import { Transfer } from '../models/Transfer';
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
    id: string;
    expand?: string;
    prismAccount?: string;
}
export interface CustomersApiUpdateRequest {
    id: string;
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
import { DefaultApiRequestFactory, DefaultApiResponseProcessor } from "../apis/DefaultApi";
export interface DefaultApiGetInvoicesInvoiceIdPollRequest {
    id: string;
    prismAccount?: string;
    expand?: string;
}
export interface DefaultApiGetTransfersRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prismAccount?: string;
}
export interface DefaultApiGetTransfersTransferIdRequest {
    id: string;
    prismAccount?: string;
    expand?: string;
}
export interface DefaultApiPostTransfersIdRequest {
    id: string;
    prismAccount?: string;
    inlineObject6?: InlineObject6;
}
export interface DefaultApiWalletsRequest {
    prismAccount?: string;
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    inlineObject3?: InlineObject3;
}
export interface DefaultApiWalletsIdRequest {
    id: string;
    prismAccount?: string;
}
export interface DefaultApiWalletsId0Request {
    id: string;
    prismAccount?: string;
}
export interface DefaultApiWalletsPayoutWalletIdRequest {
    id: string;
    prismAccount?: string;
    expand?: string;
}
export interface DefaultApiWallets0Request {
    prismAccount?: string;
    inlineObject4?: InlineObject4;
}
export declare class ObjectDefaultApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor);
    getInvoicesInvoiceIdPoll(param: DefaultApiGetInvoicesInvoiceIdPollRequest, options?: Configuration): Promise<void>;
    getTransfers(param?: DefaultApiGetTransfersRequest, options?: Configuration): Promise<InlineResponse2006>;
    getTransfersTransferId(param: DefaultApiGetTransfersTransferIdRequest, options?: Configuration): Promise<Transfer>;
    postTransfersId(param: DefaultApiPostTransfersIdRequest, options?: Configuration): Promise<void>;
    wallets(param?: DefaultApiWalletsRequest, options?: Configuration): Promise<void>;
    walletsId(param: DefaultApiWalletsIdRequest, options?: Configuration): Promise<void>;
    walletsId_1(param: DefaultApiWalletsId0Request, options?: Configuration): Promise<PayoutWallet>;
    walletsPayoutWalletId(param: DefaultApiWalletsPayoutWalletIdRequest, options?: Configuration): Promise<PayoutWallet>;
    wallets_2(param?: DefaultApiWallets0Request, options?: Configuration): Promise<PayoutWallet>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export interface FeesApiDeleteRequest {
    id: string;
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
    id: string;
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
    id: string;
    expand?: string;
    prismAccount?: string;
}
export interface InvoicesApiUpdateRequest {
    id: string;
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
    id: string;
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
    id: string;
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
    id: string;
    prismAccount?: string;
}
export interface ProductsApiCreateRequest {
    prismAccount?: string;
    inlineObject5?: InlineObject5;
}
export interface ProductsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prismAccount?: string;
}
export interface ProductsApiRetrieveRequest {
    id: string;
    expand?: string;
    prismAccount?: string;
}
export interface ProductsApiUpdateRequest {
    id: string;
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
    id: string;
    prismAccount?: string;
    expand?: string;
}
export interface WalletsApiCreateRequest {
    prismAccount?: string;
    inlineObject7?: InlineObject7;
}
export interface WalletsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prismAccount?: string;
}
export interface WalletsApiRetrieveRequest {
    id: string;
    expand?: string;
    prismAccount?: string;
}
export interface WalletsApiUpdateRequest {
    id: string;
    prismAccount?: string;
}
export declare class ObjectWalletsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(param: WalletsApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: WalletsApiCreateRequest, options?: Configuration): Promise<Wallet>;
    list(param?: WalletsApiListRequest, options?: Configuration): Promise<InlineResponse2007>;
    retrieve(param: WalletsApiRetrieveRequest, options?: Configuration): Promise<Wallet>;
    update(param: WalletsApiUpdateRequest, options?: Configuration): Promise<Wallet>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export interface WebhooksApiDeleteRequest {
    id: string;
    prismAccount?: string;
}
export interface WebhooksApiCreateRequest {
    prismAccount?: string;
    inlineObject8?: InlineObject8;
}
export interface WebhooksApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
    prismAccount?: string;
}
export interface WebhooksApiRetrieveRequest {
    id: string;
    expand?: string;
    prismAccount?: string;
}
export interface WebhooksApiUpdateRequest {
    id: string;
    prismAccount?: string;
}
export declare class ObjectWebhooksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(param: WebhooksApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: WebhooksApiCreateRequest, options?: Configuration): Promise<Webhook>;
    list(param?: WebhooksApiListRequest, options?: Configuration): Promise<InlineResponse2008>;
    retrieve(param: WebhooksApiRetrieveRequest, options?: Configuration): Promise<Webhook>;
    update(param: WebhooksApiUpdateRequest, options?: Configuration): Promise<Webhook>;
}
