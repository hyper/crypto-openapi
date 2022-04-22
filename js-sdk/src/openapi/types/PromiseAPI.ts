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
import { ObservableCustomersApi } from './ObservableAPI';

import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";
export class PromiseCustomersApi {
    private api: ObservableCustomersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomersApiRequestFactory,
        responseProcessor?: CustomersApiResponseProcessor
    ) {
        this.api = new ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Customer
     * @param prismAccount 
     * @param inlineObject 
     */
    public create(prismAccount?: string, inlineObject?: InlineObject, _options?: Configuration): Promise<InlineResponse2001> {
        const result = this.api.create(prismAccount, inlineObject, _options);
        return result.toPromise();
    }

    /**
     * List Customers
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount 
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Customer By Id
     * @param customerId 
     * @param prismAccount 
     */
    public retrieve(customerId: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2001> {
        const result = this.api.retrieve(customerId, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Update Customer By Id
     * @param customerId 
     * @param prismAccount 
     */
    public update(customerId: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2002> {
        const result = this.api.update(customerId, prismAccount, _options);
        return result.toPromise();
    }


}



import { ObservableFeesApi } from './ObservableAPI';

import { FeesApiRequestFactory, FeesApiResponseProcessor} from "../apis/FeesApi";
export class PromiseFeesApi {
    private api: ObservableFeesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FeesApiRequestFactory,
        responseProcessor?: FeesApiResponseProcessor
    ) {
        this.api = new ObservableFeesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Fee By Id
     * @param feeId 
     * @param prismAccount 
     */
    public _delete(feeId: string, prismAccount?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(feeId, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Create Fee
     * @param prismAccount 
     * @param inlineObject1 
     */
    public create(prismAccount?: string, inlineObject1?: InlineObject1, _options?: Configuration): Promise<InlineResponse2004> {
        const result = this.api.create(prismAccount, inlineObject1, _options);
        return result.toPromise();
    }

    /**
     * List Fees
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount 
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2003> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Fee By Id
     * @param feeId 
     * @param prismAccount 
     */
    public retrieve(feeId: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.retrieve(feeId, prismAccount, _options);
        return result.toPromise();
    }


}



import { ObservableInvoicesApi } from './ObservableAPI';

import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";
export class PromiseInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoicesApiRequestFactory,
        responseProcessor?: InvoicesApiResponseProcessor
    ) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Invoice
     * @param prismAccount 
     * @param inlineObject2 
     */
    public create(prismAccount?: string, inlineObject2?: InlineObject2, _options?: Configuration): Promise<InlineResponse2007> {
        const result = this.api.create(prismAccount, inlineObject2, _options);
        return result.toPromise();
    }

    /**
     * List Invoices
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount 
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2006> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Invoice By Id
     * @param invoiceId 
     * @param prismAccount 
     */
    public retrieve(invoiceId: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2008> {
        const result = this.api.retrieve(invoiceId, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Update Invoice By Id
     * @param invoiceId 
     * @param prismAccount 
     */
    public update(invoiceId: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2008> {
        const result = this.api.update(invoiceId, prismAccount, _options);
        return result.toPromise();
    }


}



import { ObservableLogsApi } from './ObservableAPI';

import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";
export class PromiseLogsApi {
    private api: ObservableLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LogsApiRequestFactory,
        responseProcessor?: LogsApiResponseProcessor
    ) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List Logs
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount 
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2009> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Log By Id
     * @param logId 
     * @param prismAccount 
     */
    public retrieve(logId: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse20010> {
        const result = this.api.retrieve(logId, prismAccount, _options);
        return result.toPromise();
    }


}



import { ObservablePaymentsApi } from './ObservableAPI';

import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor} from "../apis/PaymentsApi";
export class PromisePaymentsApi {
    private api: ObservablePaymentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentsApiRequestFactory,
        responseProcessor?: PaymentsApiResponseProcessor
    ) {
        this.api = new ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List Payments
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount 
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse20011> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Payment By Id
     * @param paymentId 
     * @param prismAccount 
     */
    public retrieve(paymentId: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse20012> {
        const result = this.api.retrieve(paymentId, prismAccount, _options);
        return result.toPromise();
    }


}



import { ObservableProductsApi } from './ObservableAPI';

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class PromiseProductsApi {
    private api: ObservableProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Product By Id
     * @param productId 
     * @param prismAccount 
     */
    public _delete(productId: string, prismAccount?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(productId, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Create Product
     * @param prismAccount 
     * @param inlineObject3 
     */
    public create(prismAccount?: string, inlineObject3?: InlineObject3, _options?: Configuration): Promise<InlineResponse20014> {
        const result = this.api.create(prismAccount, inlineObject3, _options);
        return result.toPromise();
    }

    /**
     * List Products
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount 
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse20013> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Product By Id
     * @param productId 
     * @param prismAccount 
     */
    public retrieve(productId: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse20015> {
        const result = this.api.retrieve(productId, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Update Product By Id
     * @param productId 
     * @param prismAccount 
     */
    public update(productId: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse20016> {
        const result = this.api.update(productId, prismAccount, _options);
        return result.toPromise();
    }


}



import { ObservableWalletsApi } from './ObservableAPI';

import { WalletsApiRequestFactory, WalletsApiResponseProcessor} from "../apis/WalletsApi";
export class PromiseWalletsApi {
    private api: ObservableWalletsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WalletsApiRequestFactory,
        responseProcessor?: WalletsApiResponseProcessor
    ) {
        this.api = new ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Wallet By Id
     * @param walletId 
     * @param prismAccount 
     */
    public _delete(walletId: string, prismAccount?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(walletId, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Create Wallet
     * @param prismAccount 
     * @param inlineObject4 
     */
    public create(prismAccount?: string, inlineObject4?: InlineObject4, _options?: Configuration): Promise<InlineResponse20018> {
        const result = this.api.create(prismAccount, inlineObject4, _options);
        return result.toPromise();
    }

    /**
     * List Wallets
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount 
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse20017> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Wallet By Id
     * @param walletId 
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount 
     */
    public retrieve(walletId: string, limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse20018> {
        const result = this.api.retrieve(walletId, limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Update Wallet By Id
     * @param walletId 
     * @param prismAccount 
     */
    public update(walletId: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse20018> {
        const result = this.api.update(walletId, prismAccount, _options);
        return result.toPromise();
    }


}



import { ObservableWebhooksApi } from './ObservableAPI';

import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";
export class PromiseWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhooksApiRequestFactory,
        responseProcessor?: WebhooksApiResponseProcessor
    ) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Webhook By Id
     * @param webhookId 
     * @param prismAccount 
     */
    public _delete(webhookId: string, prismAccount?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(webhookId, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Create Webhook
     * @param prismAccount 
     * @param inlineObject5 
     */
    public create(prismAccount?: string, inlineObject5?: InlineObject5, _options?: Configuration): Promise<InlineResponse20020> {
        const result = this.api.create(prismAccount, inlineObject5, _options);
        return result.toPromise();
    }

    /**
     * List Webhooks
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount 
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse20019> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Webhook By Id
     * @param webhookId 
     * @param prismAccount 
     */
    public retrieve(webhookId: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse20021> {
        const result = this.api.retrieve(webhookId, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Update Webhook By Id
     * @param webhookId 
     * @param prismAccount 
     */
    public update(webhookId: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse20020> {
        const result = this.api.update(webhookId, prismAccount, _options);
        return result.toPromise();
    }


}



