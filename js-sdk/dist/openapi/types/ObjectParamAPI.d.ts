import { Configuration } from '../configuration';
import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse20010 } from '../models/InlineResponse20010';
import { InlineResponse20011 } from '../models/InlineResponse20011';
import { InlineResponse20012 } from '../models/InlineResponse20012';
import { InlineResponse20013 } from '../models/InlineResponse20013';
import { InlineResponse20014 } from '../models/InlineResponse20014';
import { InlineResponse20015 } from '../models/InlineResponse20015';
import { InlineResponse20016 } from '../models/InlineResponse20016';
import { InlineResponse20017 } from '../models/InlineResponse20017';
import { InlineResponse20018 } from '../models/InlineResponse20018';
import { InlineResponse20019 } from '../models/InlineResponse20019';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse20020 } from '../models/InlineResponse20020';
import { InlineResponse20021 } from '../models/InlineResponse20021';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { InlineResponse2008 } from '../models/InlineResponse2008';
import { InlineResponse2009 } from '../models/InlineResponse2009';
import { CustomersApiRequestFactory, CustomersApiResponseProcessor } from "../apis/CustomersApi";
export interface CustomersApiCreateRequest {
    inlineObject?: InlineObject;
}
export interface CustomersApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
}
export interface CustomersApiRetrieveRequest {
    customerId: string;
}
export interface CustomersApiUpdateRequest {
    customerId: string;
}
export declare class ObjectCustomersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor);
    create(param?: CustomersApiCreateRequest, options?: Configuration): Promise<InlineResponse2001>;
    list(param?: CustomersApiListRequest, options?: Configuration): Promise<InlineResponse200>;
    retrieve(param: CustomersApiRetrieveRequest, options?: Configuration): Promise<InlineResponse2001>;
    update(param: CustomersApiUpdateRequest, options?: Configuration): Promise<InlineResponse2002>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export interface FeesApiDeleteRequest {
    feeId: string;
}
export interface FeesApiCreateRequest {
    inlineObject1?: InlineObject1;
}
export interface FeesApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
}
export interface FeesApiRetrieveRequest {
    feeId: string;
}
export declare class ObjectFeesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor);
    _delete(param: FeesApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: FeesApiCreateRequest, options?: Configuration): Promise<InlineResponse2004>;
    list(param?: FeesApiListRequest, options?: Configuration): Promise<InlineResponse2003>;
    retrieve(param: FeesApiRetrieveRequest, options?: Configuration): Promise<InlineResponse2005>;
}
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor } from "../apis/InvoicesApi";
export interface InvoicesApiCreateRequest {
    inlineObject2?: InlineObject2;
}
export interface InvoicesApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
}
export interface InvoicesApiRetrieveRequest {
    invoiceId: string;
}
export interface InvoicesApiUpdateRequest {
    invoiceId: string;
}
export declare class ObjectInvoicesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor);
    create(param?: InvoicesApiCreateRequest, options?: Configuration): Promise<InlineResponse2007>;
    list(param?: InvoicesApiListRequest, options?: Configuration): Promise<InlineResponse2006>;
    retrieve(param: InvoicesApiRetrieveRequest, options?: Configuration): Promise<InlineResponse2008>;
    update(param: InvoicesApiUpdateRequest, options?: Configuration): Promise<InlineResponse2008>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export interface LogsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
}
export interface LogsApiRetrieveRequest {
    logId: string;
}
export declare class ObjectLogsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    list(param?: LogsApiListRequest, options?: Configuration): Promise<InlineResponse2009>;
    retrieve(param: LogsApiRetrieveRequest, options?: Configuration): Promise<InlineResponse20010>;
}
import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor } from "../apis/PaymentsApi";
export interface PaymentsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
}
export interface PaymentsApiRetrieveRequest {
    paymentId: string;
}
export declare class ObjectPaymentsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentsApiRequestFactory, responseProcessor?: PaymentsApiResponseProcessor);
    list(param?: PaymentsApiListRequest, options?: Configuration): Promise<InlineResponse20011>;
    retrieve(param: PaymentsApiRetrieveRequest, options?: Configuration): Promise<InlineResponse20012>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export interface ProductsApiDeleteRequest {
    productId: string;
}
export interface ProductsApiCreateRequest {
    inlineObject3?: InlineObject3;
}
export interface ProductsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
}
export interface ProductsApiRetrieveRequest {
    productId: string;
}
export interface ProductsApiUpdateRequest {
    productId: string;
}
export declare class ObjectProductsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    _delete(param: ProductsApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: ProductsApiCreateRequest, options?: Configuration): Promise<InlineResponse20014>;
    list(param?: ProductsApiListRequest, options?: Configuration): Promise<InlineResponse20013>;
    retrieve(param: ProductsApiRetrieveRequest, options?: Configuration): Promise<InlineResponse20015>;
    update(param: ProductsApiUpdateRequest, options?: Configuration): Promise<InlineResponse20016>;
}
import { WalletsApiRequestFactory, WalletsApiResponseProcessor } from "../apis/WalletsApi";
export interface WalletsApiDeleteRequest {
    walletId: string;
}
export interface WalletsApiCreateRequest {
    inlineObject4?: InlineObject4;
}
export interface WalletsApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
}
export interface WalletsApiRetrieveRequest {
    walletId: string;
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
}
export interface WalletsApiUpdateRequest {
    walletId: string;
}
export declare class ObjectWalletsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(param: WalletsApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: WalletsApiCreateRequest, options?: Configuration): Promise<InlineResponse20018>;
    list(param?: WalletsApiListRequest, options?: Configuration): Promise<InlineResponse20017>;
    retrieve(param: WalletsApiRetrieveRequest, options?: Configuration): Promise<InlineResponse20018>;
    update(param: WalletsApiUpdateRequest, options?: Configuration): Promise<InlineResponse20018>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export interface WebhooksApiDeleteRequest {
    webhookId: string;
}
export interface WebhooksApiCreateRequest {
    inlineObject5?: InlineObject5;
}
export interface WebhooksApiListRequest {
    limit?: number;
    page?: number;
    sort?: any;
    expand?: string;
}
export interface WebhooksApiRetrieveRequest {
    webhookId: string;
}
export interface WebhooksApiUpdateRequest {
    webhookId: string;
}
export declare class ObjectWebhooksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(param: WebhooksApiDeleteRequest, options?: Configuration): Promise<void>;
    create(param?: WebhooksApiCreateRequest, options?: Configuration): Promise<InlineResponse20020>;
    list(param?: WebhooksApiListRequest, options?: Configuration): Promise<InlineResponse20019>;
    retrieve(param: WebhooksApiRetrieveRequest, options?: Configuration): Promise<InlineResponse20021>;
    update(param: WebhooksApiUpdateRequest, options?: Configuration): Promise<InlineResponse20020>;
}
