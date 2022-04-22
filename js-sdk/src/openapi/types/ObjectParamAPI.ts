import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { APIKey } from '../models/APIKey';
import { Account } from '../models/Account';
import { AccountBranding } from '../models/AccountBranding';
import { Customer } from '../models/Customer';
import { CustomerBillingDetails } from '../models/CustomerBillingDetails';
import { CustomerBillingDetailsAddress } from '../models/CustomerBillingDetailsAddress';
import { Fee } from '../models/Fee';
import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse20010 } from '../models/InlineResponse20010';
import { InlineResponse20010Request } from '../models/InlineResponse20010Request';
import { InlineResponse20010RequestBody } from '../models/InlineResponse20010RequestBody';
import { InlineResponse20010RequestHeaders } from '../models/InlineResponse20010RequestHeaders';
import { InlineResponse20010Response } from '../models/InlineResponse20010Response';
import { InlineResponse20010ResponseBody } from '../models/InlineResponse20010ResponseBody';
import { InlineResponse20010ResponseBodyBranding } from '../models/InlineResponse20010ResponseBodyBranding';
import { InlineResponse20011 } from '../models/InlineResponse20011';
import { InlineResponse20011Data } from '../models/InlineResponse20011Data';
import { InlineResponse20012 } from '../models/InlineResponse20012';
import { InlineResponse20013 } from '../models/InlineResponse20013';
import { InlineResponse20013Data } from '../models/InlineResponse20013Data';
import { InlineResponse20014 } from '../models/InlineResponse20014';
import { InlineResponse20015 } from '../models/InlineResponse20015';
import { InlineResponse20016 } from '../models/InlineResponse20016';
import { InlineResponse20017 } from '../models/InlineResponse20017';
import { InlineResponse20017Data } from '../models/InlineResponse20017Data';
import { InlineResponse20018 } from '../models/InlineResponse20018';
import { InlineResponse20019 } from '../models/InlineResponse20019';
import { InlineResponse20019Data } from '../models/InlineResponse20019Data';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse20020 } from '../models/InlineResponse20020';
import { InlineResponse20021 } from '../models/InlineResponse20021';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2003Data } from '../models/InlineResponse2003Data';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2006Data } from '../models/InlineResponse2006Data';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { InlineResponse2008 } from '../models/InlineResponse2008';
import { InlineResponse2009 } from '../models/InlineResponse2009';
import { InlineResponse200BillingDetails } from '../models/InlineResponse200BillingDetails';
import { InlineResponse200BillingDetailsAddress } from '../models/InlineResponse200BillingDetailsAddress';
import { InlineResponse200Data } from '../models/InlineResponse200Data';
import { Invoice } from '../models/Invoice';
import { Payment } from '../models/Payment';
import { Product } from '../models/Product';
import { Wallet } from '../models/Wallet';
import { Webhook } from '../models/Webhook';

import { ObservableCustomersApi } from "./ObservableAPI";
import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";

export interface CustomersApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof CustomersApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type InlineObject
     * @memberof CustomersApicreate
     */
    inlineObject?: InlineObject
}

export interface CustomersApiListRequest {
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof CustomersApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof CustomersApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof CustomersApilist
     */
    sort?: any
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof CustomersApilist
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof CustomersApilist
     */
    prismAccount?: string
}

export interface CustomersApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof CustomersApiretrieve
     */
    customerId: string
    /**
     * 
     * @type string
     * @memberof CustomersApiretrieve
     */
    prismAccount?: string
}

export interface CustomersApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof CustomersApiupdate
     */
    customerId: string
    /**
     * 
     * @type string
     * @memberof CustomersApiupdate
     */
    prismAccount?: string
}

export class ObjectCustomersApi {
    private api: ObservableCustomersApi

    public constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor) {
        this.api = new ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Customer
     * @param param the request object
     */
    public create(param: CustomersApiCreateRequest = {}, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.create(param.prismAccount, param.inlineObject,  options).toPromise();
    }

    /**
     * List Customers
     * @param param the request object
     */
    public list(param: CustomersApiListRequest = {}, options?: Configuration): Promise<InlineResponse200> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Customer By Id
     * @param param the request object
     */
    public retrieve(param: CustomersApiRetrieveRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.retrieve(param.customerId, param.prismAccount,  options).toPromise();
    }

    /**
     * Update Customer By Id
     * @param param the request object
     */
    public update(param: CustomersApiUpdateRequest, options?: Configuration): Promise<InlineResponse2002> {
        return this.api.update(param.customerId, param.prismAccount,  options).toPromise();
    }

}

import { ObservableFeesApi } from "./ObservableAPI";
import { FeesApiRequestFactory, FeesApiResponseProcessor} from "../apis/FeesApi";

export interface FeesApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof FeesApi_delete
     */
    feeId: string
    /**
     * 
     * @type string
     * @memberof FeesApi_delete
     */
    prismAccount?: string
}

export interface FeesApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof FeesApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type InlineObject1
     * @memberof FeesApicreate
     */
    inlineObject1?: InlineObject1
}

export interface FeesApiListRequest {
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof FeesApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof FeesApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof FeesApilist
     */
    sort?: any
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof FeesApilist
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof FeesApilist
     */
    prismAccount?: string
}

export interface FeesApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof FeesApiretrieve
     */
    feeId: string
    /**
     * 
     * @type string
     * @memberof FeesApiretrieve
     */
    prismAccount?: string
}

export class ObjectFeesApi {
    private api: ObservableFeesApi

    public constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor) {
        this.api = new ObservableFeesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Fee By Id
     * @param param the request object
     */
    public _delete(param: FeesApiDeleteRequest, options?: Configuration): Promise<void> {
        return this.api._delete(param.feeId, param.prismAccount,  options).toPromise();
    }

    /**
     * Create Fee
     * @param param the request object
     */
    public create(param: FeesApiCreateRequest = {}, options?: Configuration): Promise<InlineResponse2004> {
        return this.api.create(param.prismAccount, param.inlineObject1,  options).toPromise();
    }

    /**
     * List Fees
     * @param param the request object
     */
    public list(param: FeesApiListRequest = {}, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Fee By Id
     * @param param the request object
     */
    public retrieve(param: FeesApiRetrieveRequest, options?: Configuration): Promise<InlineResponse2005> {
        return this.api.retrieve(param.feeId, param.prismAccount,  options).toPromise();
    }

}

import { ObservableInvoicesApi } from "./ObservableAPI";
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";

export interface InvoicesApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type InlineObject2
     * @memberof InvoicesApicreate
     */
    inlineObject2?: InlineObject2
}

export interface InvoicesApiListRequest {
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof InvoicesApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof InvoicesApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof InvoicesApilist
     */
    sort?: any
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof InvoicesApilist
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof InvoicesApilist
     */
    prismAccount?: string
}

export interface InvoicesApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApiretrieve
     */
    invoiceId: string
    /**
     * 
     * @type string
     * @memberof InvoicesApiretrieve
     */
    prismAccount?: string
}

export interface InvoicesApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApiupdate
     */
    invoiceId: string
    /**
     * 
     * @type string
     * @memberof InvoicesApiupdate
     */
    prismAccount?: string
}

export class ObjectInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Invoice
     * @param param the request object
     */
    public create(param: InvoicesApiCreateRequest = {}, options?: Configuration): Promise<InlineResponse2007> {
        return this.api.create(param.prismAccount, param.inlineObject2,  options).toPromise();
    }

    /**
     * List Invoices
     * @param param the request object
     */
    public list(param: InvoicesApiListRequest = {}, options?: Configuration): Promise<InlineResponse2006> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Invoice By Id
     * @param param the request object
     */
    public retrieve(param: InvoicesApiRetrieveRequest, options?: Configuration): Promise<InlineResponse2008> {
        return this.api.retrieve(param.invoiceId, param.prismAccount,  options).toPromise();
    }

    /**
     * Update Invoice By Id
     * @param param the request object
     */
    public update(param: InvoicesApiUpdateRequest, options?: Configuration): Promise<InlineResponse2008> {
        return this.api.update(param.invoiceId, param.prismAccount,  options).toPromise();
    }

}

import { ObservableLogsApi } from "./ObservableAPI";
import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";

export interface LogsApiListRequest {
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof LogsApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof LogsApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof LogsApilist
     */
    sort?: any
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof LogsApilist
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof LogsApilist
     */
    prismAccount?: string
}

export interface LogsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof LogsApiretrieve
     */
    logId: string
    /**
     * 
     * @type string
     * @memberof LogsApiretrieve
     */
    prismAccount?: string
}

export class ObjectLogsApi {
    private api: ObservableLogsApi

    public constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List Logs
     * @param param the request object
     */
    public list(param: LogsApiListRequest = {}, options?: Configuration): Promise<InlineResponse2009> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Log By Id
     * @param param the request object
     */
    public retrieve(param: LogsApiRetrieveRequest, options?: Configuration): Promise<InlineResponse20010> {
        return this.api.retrieve(param.logId, param.prismAccount,  options).toPromise();
    }

}

import { ObservablePaymentsApi } from "./ObservableAPI";
import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor} from "../apis/PaymentsApi";

export interface PaymentsApiListRequest {
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof PaymentsApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof PaymentsApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof PaymentsApilist
     */
    sort?: any
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof PaymentsApilist
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof PaymentsApilist
     */
    prismAccount?: string
}

export interface PaymentsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof PaymentsApiretrieve
     */
    paymentId: string
    /**
     * 
     * @type string
     * @memberof PaymentsApiretrieve
     */
    prismAccount?: string
}

export class ObjectPaymentsApi {
    private api: ObservablePaymentsApi

    public constructor(configuration: Configuration, requestFactory?: PaymentsApiRequestFactory, responseProcessor?: PaymentsApiResponseProcessor) {
        this.api = new ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List Payments
     * @param param the request object
     */
    public list(param: PaymentsApiListRequest = {}, options?: Configuration): Promise<InlineResponse20011> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Payment By Id
     * @param param the request object
     */
    public retrieve(param: PaymentsApiRetrieveRequest, options?: Configuration): Promise<InlineResponse20012> {
        return this.api.retrieve(param.paymentId, param.prismAccount,  options).toPromise();
    }

}

import { ObservableProductsApi } from "./ObservableAPI";
import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";

export interface ProductsApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApi_delete
     */
    productId: string
    /**
     * 
     * @type string
     * @memberof ProductsApi_delete
     */
    prismAccount?: string
}

export interface ProductsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type InlineObject3
     * @memberof ProductsApicreate
     */
    inlineObject3?: InlineObject3
}

export interface ProductsApiListRequest {
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof ProductsApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof ProductsApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof ProductsApilist
     */
    sort?: any
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof ProductsApilist
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof ProductsApilist
     */
    prismAccount?: string
}

export interface ProductsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApiretrieve
     */
    productId: string
    /**
     * 
     * @type string
     * @memberof ProductsApiretrieve
     */
    prismAccount?: string
}

export interface ProductsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApiupdate
     */
    productId: string
    /**
     * 
     * @type string
     * @memberof ProductsApiupdate
     */
    prismAccount?: string
}

export class ObjectProductsApi {
    private api: ObservableProductsApi

    public constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Product By Id
     * @param param the request object
     */
    public _delete(param: ProductsApiDeleteRequest, options?: Configuration): Promise<void> {
        return this.api._delete(param.productId, param.prismAccount,  options).toPromise();
    }

    /**
     * Create Product
     * @param param the request object
     */
    public create(param: ProductsApiCreateRequest = {}, options?: Configuration): Promise<InlineResponse20014> {
        return this.api.create(param.prismAccount, param.inlineObject3,  options).toPromise();
    }

    /**
     * List Products
     * @param param the request object
     */
    public list(param: ProductsApiListRequest = {}, options?: Configuration): Promise<InlineResponse20013> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Product By Id
     * @param param the request object
     */
    public retrieve(param: ProductsApiRetrieveRequest, options?: Configuration): Promise<InlineResponse20015> {
        return this.api.retrieve(param.productId, param.prismAccount,  options).toPromise();
    }

    /**
     * Update Product By Id
     * @param param the request object
     */
    public update(param: ProductsApiUpdateRequest, options?: Configuration): Promise<InlineResponse20016> {
        return this.api.update(param.productId, param.prismAccount,  options).toPromise();
    }

}

import { ObservableWalletsApi } from "./ObservableAPI";
import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";

export interface WalletsApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApi_delete
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof WalletsApi_delete
     */
    prismAccount?: string
}

export interface WalletsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type InlineObject4
     * @memberof WalletsApicreate
     */
    inlineObject4?: InlineObject4
}

export interface WalletsApiListRequest {
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof WalletsApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof WalletsApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof WalletsApilist
     */
    sort?: any
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof WalletsApilist
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof WalletsApilist
     */
    prismAccount?: string
}

export interface WalletsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApiretrieve
     */
    walletId: string
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof WalletsApiretrieve
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof WalletsApiretrieve
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof WalletsApiretrieve
     */
    sort?: any
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof WalletsApiretrieve
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof WalletsApiretrieve
     */
    prismAccount?: string
}

export interface WalletsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof WalletsApiupdate
     */
    walletId: string
    /**
     * 
     * @type string
     * @memberof WalletsApiupdate
     */
    prismAccount?: string
}

export class ObjectWalletsApi {
    private api: ObservableWalletsApi

    public constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor) {
        this.api = new ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Wallet By Id
     * @param param the request object
     */
    public _delete(param: WalletsApiDeleteRequest, options?: Configuration): Promise<void> {
        return this.api._delete(param.walletId, param.prismAccount,  options).toPromise();
    }

    /**
     * Create Wallet
     * @param param the request object
     */
    public create(param: WalletsApiCreateRequest = {}, options?: Configuration): Promise<InlineResponse20018> {
        return this.api.create(param.prismAccount, param.inlineObject4,  options).toPromise();
    }

    /**
     * List Wallets
     * @param param the request object
     */
    public list(param: WalletsApiListRequest = {}, options?: Configuration): Promise<InlineResponse20017> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Wallet By Id
     * @param param the request object
     */
    public retrieve(param: WalletsApiRetrieveRequest, options?: Configuration): Promise<InlineResponse20018> {
        return this.api.retrieve(param.walletId, param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Update Wallet By Id
     * @param param the request object
     */
    public update(param: WalletsApiUpdateRequest, options?: Configuration): Promise<InlineResponse20018> {
        return this.api.update(param.walletId, param.prismAccount,  options).toPromise();
    }

}

import { ObservableWebhooksApi } from "./ObservableAPI";
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";

export interface WebhooksApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof WebhooksApi_delete
     */
    webhookId: string
    /**
     * 
     * @type string
     * @memberof WebhooksApi_delete
     */
    prismAccount?: string
}

export interface WebhooksApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof WebhooksApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type InlineObject5
     * @memberof WebhooksApicreate
     */
    inlineObject5?: InlineObject5
}

export interface WebhooksApiListRequest {
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof WebhooksApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof WebhooksApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof WebhooksApilist
     */
    sort?: any
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof WebhooksApilist
     */
    expand?: string
    /**
     * 
     * @type string
     * @memberof WebhooksApilist
     */
    prismAccount?: string
}

export interface WebhooksApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof WebhooksApiretrieve
     */
    webhookId: string
    /**
     * 
     * @type string
     * @memberof WebhooksApiretrieve
     */
    prismAccount?: string
}

export interface WebhooksApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof WebhooksApiupdate
     */
    webhookId: string
    /**
     * 
     * @type string
     * @memberof WebhooksApiupdate
     */
    prismAccount?: string
}

export class ObjectWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Webhook By Id
     * @param param the request object
     */
    public _delete(param: WebhooksApiDeleteRequest, options?: Configuration): Promise<void> {
        return this.api._delete(param.webhookId, param.prismAccount,  options).toPromise();
    }

    /**
     * Create Webhook
     * @param param the request object
     */
    public create(param: WebhooksApiCreateRequest = {}, options?: Configuration): Promise<InlineResponse20020> {
        return this.api.create(param.prismAccount, param.inlineObject5,  options).toPromise();
    }

    /**
     * List Webhooks
     * @param param the request object
     */
    public list(param: WebhooksApiListRequest = {}, options?: Configuration): Promise<InlineResponse20019> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Webhook By Id
     * @param param the request object
     */
    public retrieve(param: WebhooksApiRetrieveRequest, options?: Configuration): Promise<InlineResponse20021> {
        return this.api.retrieve(param.webhookId, param.prismAccount,  options).toPromise();
    }

    /**
     * Update Webhook By Id
     * @param param the request object
     */
    public update(param: WebhooksApiUpdateRequest, options?: Configuration): Promise<InlineResponse20020> {
        return this.api.update(param.webhookId, param.prismAccount,  options).toPromise();
    }

}
