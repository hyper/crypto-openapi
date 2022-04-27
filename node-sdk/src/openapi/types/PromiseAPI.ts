import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { APIKey } from '../models/APIKey';
import { APIKeyAllOf } from '../models/APIKeyAllOf';
import { Account } from '../models/Account';
import { AccountBranding } from '../models/AccountBranding';
import { Customer } from '../models/Customer';
import { CustomerBillingDetails } from '../models/CustomerBillingDetails';
import { CustomerBillingDetailsAddress } from '../models/CustomerBillingDetailsAddress';
import { CustomerData } from '../models/CustomerData';
import { CustomersBillingDetails } from '../models/CustomersBillingDetails';
import { CustomersBillingDetailsAddress } from '../models/CustomersBillingDetailsAddress';
import { Data } from '../models/Data';
import { Fee } from '../models/Fee';
import { FeeData } from '../models/FeeData';
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
import { InvoiceData } from '../models/InvoiceData';
import { Log } from '../models/Log';
import { Model } from '../models/Model';
import { Payment } from '../models/Payment';
import { PayoutWallet } from '../models/PayoutWallet';
import { PayoutWalletData } from '../models/PayoutWalletData';
import { Product } from '../models/Product';
import { ProductData } from '../models/ProductData';
import { Transaction } from '../models/Transaction';
import { Transfer } from '../models/Transfer';
import { TransferData } from '../models/TransferData';
import { Wallet } from '../models/Wallet';
import { WalletData } from '../models/WalletData';
import { Webhook } from '../models/Webhook';
import { WebhookData } from '../models/WebhookData';
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
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param customerData 
     */
    public create(prismAccount?: string, customerData?: CustomerData, _options?: Configuration): Promise<Customer> {
        const result = this.api.create(prismAccount, customerData, _options);
        return result.toPromise();
    }

    /**
     * List Customers
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Customer By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<Customer> {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Update Customer By Id
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public update(id: string, prismAccount?: string, _options?: Configuration): Promise<Customer> {
        const result = this.api.update(id, prismAccount, _options);
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
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public _delete(id: string, prismAccount?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(id, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Create Fee
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param feeData 
     */
    public create(prismAccount?: string, feeData?: FeeData, _options?: Configuration): Promise<Fee> {
        const result = this.api.create(prismAccount, feeData, _options);
        return result.toPromise();
    }

    /**
     * List Fees
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2001> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Fee By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<Fee> {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
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
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param invoiceData 
     */
    public create(prismAccount?: string, invoiceData?: InvoiceData, _options?: Configuration): Promise<Invoice> {
        const result = this.api.create(prismAccount, invoiceData, _options);
        return result.toPromise();
    }

    /**
     * List Invoices
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2002> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Poll Invoice By ID
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param expand Specifies which fields to populate in the response.
     */
    public poll(id: string, prismAccount?: string, expand?: string, _options?: Configuration): Promise<void> {
        const result = this.api.poll(id, prismAccount, expand, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Invoice By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<Invoice> {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Update Invoice By Id
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public update(id: string, prismAccount?: string, _options?: Configuration): Promise<Invoice> {
        const result = this.api.update(id, prismAccount, _options);
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
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2003> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Log By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<Log> {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
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
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2004> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Payment By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<Payment> {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }


}



import { ObservablePayoutWalletsApi } from './ObservableAPI';

import { PayoutWalletsApiRequestFactory, PayoutWalletsApiResponseProcessor} from "../apis/PayoutWalletsApi";
export class PromisePayoutWalletsApi {
    private api: ObservablePayoutWalletsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PayoutWalletsApiRequestFactory,
        responseProcessor?: PayoutWalletsApiResponseProcessor
    ) {
        this.api = new ObservablePayoutWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Payout Wallet By ID
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public _delete(id: string, prismAccount?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(id, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Create Payout Wallets
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param payoutWalletData 
     */
    public create(prismAccount?: string, payoutWalletData?: PayoutWalletData, _options?: Configuration): Promise<PayoutWallet> {
        const result = this.api.create(prismAccount, payoutWalletData, _options);
        return result.toPromise();
    }

    /**
     * List Payout Wallets
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param data 
     */
    public list(prismAccount?: string, limit?: number, page?: number, sort?: any, expand?: string, data?: Data, _options?: Configuration): Promise<void> {
        const result = this.api.list(prismAccount, limit, page, sort, expand, data, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Payout Wallet By ID
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param expand Specifies which fields to populate in the response.
     */
    public retrieve(id: string, prismAccount?: string, expand?: string, _options?: Configuration): Promise<PayoutWallet> {
        const result = this.api.retrieve(id, prismAccount, expand, _options);
        return result.toPromise();
    }

    /**
     * Update Payout Wallet By ID
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public update(id: string, prismAccount?: string, _options?: Configuration): Promise<PayoutWallet> {
        const result = this.api.update(id, prismAccount, _options);
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
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public _delete(id: string, prismAccount?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(id, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Create Product
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param productData 
     */
    public create(prismAccount?: string, productData?: ProductData, _options?: Configuration): Promise<Product> {
        const result = this.api.create(prismAccount, productData, _options);
        return result.toPromise();
    }

    /**
     * List Products
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Product By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<Product> {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Update Product By Id
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public update(id: string, prismAccount?: string, _options?: Configuration): Promise<Product> {
        const result = this.api.update(id, prismAccount, _options);
        return result.toPromise();
    }


}



import { ObservableTransfersApi } from './ObservableAPI';

import { TransfersApiRequestFactory, TransfersApiResponseProcessor} from "../apis/TransfersApi";
export class PromiseTransfersApi {
    private api: ObservableTransfersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransfersApiRequestFactory,
        responseProcessor?: TransfersApiResponseProcessor
    ) {
        this.api = new ObservableTransfersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Transfer
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param transferData 
     */
    public create(prismAccount?: string, transferData?: TransferData, _options?: Configuration): Promise<void> {
        const result = this.api.create(prismAccount, transferData, _options);
        return result.toPromise();
    }

    /**
     * List Transfers
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2006> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Transfer By ID
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param expand Specifies which fields to populate in the response.
     */
    public retrieve(id: string, prismAccount?: string, expand?: string, _options?: Configuration): Promise<Transfer> {
        const result = this.api.retrieve(id, prismAccount, expand, _options);
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
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param expand 
     */
    public _delete(id: string, prismAccount?: string, expand?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(id, prismAccount, expand, _options);
        return result.toPromise();
    }

    /**
     * Create Wallet
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param walletData 
     */
    public create(prismAccount?: string, walletData?: WalletData, _options?: Configuration): Promise<Wallet> {
        const result = this.api.create(prismAccount, walletData, _options);
        return result.toPromise();
    }

    /**
     * List Wallets
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2007> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Wallet By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<Wallet> {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Update Wallet By Id
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public update(id: string, prismAccount?: string, _options?: Configuration): Promise<Wallet> {
        const result = this.api.update(id, prismAccount, _options);
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
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public _delete(id: string, prismAccount?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(id, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Create Webhook
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     * @param webhookData 
     */
    public create(prismAccount?: string, webhookData?: WebhookData, _options?: Configuration): Promise<Webhook> {
        const result = this.api.create(prismAccount, webhookData, _options);
        return result.toPromise();
    }

    /**
     * List Webhooks
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Promise<InlineResponse2008> {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Webhook By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prismAccount?: string, _options?: Configuration): Promise<Webhook> {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }

    /**
     * Update Webhook By Id
     * @param id 
     * @param prismAccount The ID of the connected Prism account you are making a request on behalf on.
     */
    public update(id: string, prismAccount?: string, _options?: Configuration): Promise<Webhook> {
        const result = this.api.update(id, prismAccount, _options);
        return result.toPromise();
    }


}



