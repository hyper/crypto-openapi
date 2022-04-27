import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountAllOf } from '../models/AccountAllOf';
import { AccountAllOfBranding } from '../models/AccountAllOfBranding';
import { ApiKey } from '../models/ApiKey';
import { ApiKeyAllOf } from '../models/ApiKeyAllOf';
import { Customer } from '../models/Customer';
import { CustomerAllOf } from '../models/CustomerAllOf';
import { CustomerAllOfBillingDetails } from '../models/CustomerAllOfBillingDetails';
import { CustomerAllOfBillingDetailsAddress } from '../models/CustomerAllOfBillingDetailsAddress';
import { CustomerData } from '../models/CustomerData';
import { CustomersBillingDetails } from '../models/CustomersBillingDetails';
import { CustomersBillingDetailsAddress } from '../models/CustomersBillingDetailsAddress';
import { Data } from '../models/Data';
import { Fee } from '../models/Fee';
import { FeeAllOf } from '../models/FeeAllOf';
import { FeeData } from '../models/FeeData';
import { Invoice } from '../models/Invoice';
import { InvoiceAllOf } from '../models/InvoiceAllOf';
import { InvoiceData } from '../models/InvoiceData';
import { ListCustomersResponse } from '../models/ListCustomersResponse';
import { ListFeesResponse } from '../models/ListFeesResponse';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { ListLogsResponse } from '../models/ListLogsResponse';
import { ListPaymentsResponse } from '../models/ListPaymentsResponse';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { ListTransfersResponse } from '../models/ListTransfersResponse';
import { ListWalletsResponse } from '../models/ListWalletsResponse';
import { ListWebhooksResponse } from '../models/ListWebhooksResponse';
import { Log } from '../models/Log';
import { LogAllOf } from '../models/LogAllOf';
import { Model } from '../models/Model';
import { Payment } from '../models/Payment';
import { PaymentAllOf } from '../models/PaymentAllOf';
import { PayoutWallet } from '../models/PayoutWallet';
import { PayoutWalletAllOf } from '../models/PayoutWalletAllOf';
import { PayoutWalletData } from '../models/PayoutWalletData';
import { Product } from '../models/Product';
import { ProductAllOf } from '../models/ProductAllOf';
import { ProductData } from '../models/ProductData';
import { Transaction } from '../models/Transaction';
import { TransactionAllOf } from '../models/TransactionAllOf';
import { Transfer } from '../models/Transfer';
import { TransferAllOf } from '../models/TransferAllOf';
import { TransferData } from '../models/TransferData';
import { Wallet } from '../models/Wallet';
import { WalletAllOf } from '../models/WalletAllOf';
import { WalletData } from '../models/WalletData';
import { Webhook } from '../models/Webhook';
import { WebhookAllOf } from '../models/WebhookAllOf';
import { WebhookData } from '../models/WebhookData';

import { ObservableCustomersApi } from "./ObservableAPI";
import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";

export interface CustomersApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof CustomersApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type CustomerData
     * @memberof CustomersApicreate
     */
    customerData?: CustomerData
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
     * The ID of the connected Prism account you are making a request on behalf on.
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
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof CustomersApiretrieve
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
    public create(param: CustomersApiCreateRequest = {}, options?: Configuration): Promise<Customer> {
        return this.api.create(param.prismAccount, param.customerData,  options).toPromise();
    }

    /**
     * List Customers
     * @param param the request object
     */
    public list(param: CustomersApiListRequest = {}, options?: Configuration): Promise<ListCustomersResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Customer By Id
     * @param param the request object
     */
    public retrieve(param: CustomersApiRetrieveRequest, options?: Configuration): Promise<Customer> {
        return this.api.retrieve(param.id, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Update Customer By Id
     * @param param the request object
     */
    public update(param: CustomersApiUpdateRequest, options?: Configuration): Promise<Customer> {
        return this.api.update(param.id, param.prismAccount,  options).toPromise();
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
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof FeesApi_delete
     */
    prismAccount?: string
}

export interface FeesApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof FeesApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type FeeData
     * @memberof FeesApicreate
     */
    feeData?: FeeData
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
     * The ID of the connected Prism account you are making a request on behalf on.
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
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof FeesApiretrieve
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
        return this.api._delete(param.id, param.prismAccount,  options).toPromise();
    }

    /**
     * Create Fee
     * @param param the request object
     */
    public create(param: FeesApiCreateRequest = {}, options?: Configuration): Promise<Fee> {
        return this.api.create(param.prismAccount, param.feeData,  options).toPromise();
    }

    /**
     * List Fees
     * @param param the request object
     */
    public list(param: FeesApiListRequest = {}, options?: Configuration): Promise<ListFeesResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Fee By Id
     * @param param the request object
     */
    public retrieve(param: FeesApiRetrieveRequest, options?: Configuration): Promise<Fee> {
        return this.api.retrieve(param.id, param.expand, param.prismAccount,  options).toPromise();
    }

}

import { ObservableInvoicesApi } from "./ObservableAPI";
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";

export interface InvoicesApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof InvoicesApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type InvoiceData
     * @memberof InvoicesApicreate
     */
    invoiceData?: InvoiceData
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
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof InvoicesApilist
     */
    prismAccount?: string
}

export interface InvoicesApiPollRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApipoll
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof InvoicesApipoll
     */
    prismAccount?: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof InvoicesApipoll
     */
    expand?: string
}

export interface InvoicesApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApiretrieve
     */
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof InvoicesApiretrieve
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
    public create(param: InvoicesApiCreateRequest = {}, options?: Configuration): Promise<Invoice> {
        return this.api.create(param.prismAccount, param.invoiceData,  options).toPromise();
    }

    /**
     * List Invoices
     * @param param the request object
     */
    public list(param: InvoicesApiListRequest = {}, options?: Configuration): Promise<ListInvoicesResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Poll Invoice By ID
     * @param param the request object
     */
    public poll(param: InvoicesApiPollRequest, options?: Configuration): Promise<void> {
        return this.api.poll(param.id, param.prismAccount, param.expand,  options).toPromise();
    }

    /**
     * Retrieve Invoice By Id
     * @param param the request object
     */
    public retrieve(param: InvoicesApiRetrieveRequest, options?: Configuration): Promise<Invoice> {
        return this.api.retrieve(param.id, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Update Invoice By Id
     * @param param the request object
     */
    public update(param: InvoicesApiUpdateRequest, options?: Configuration): Promise<Invoice> {
        return this.api.update(param.id, param.prismAccount,  options).toPromise();
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
     * The ID of the connected Prism account you are making a request on behalf on.
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
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof LogsApiretrieve
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
    public list(param: LogsApiListRequest = {}, options?: Configuration): Promise<ListLogsResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Log By Id
     * @param param the request object
     */
    public retrieve(param: LogsApiRetrieveRequest, options?: Configuration): Promise<Log> {
        return this.api.retrieve(param.id, param.expand, param.prismAccount,  options).toPromise();
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
     * The ID of the connected Prism account you are making a request on behalf on.
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
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof PaymentsApiretrieve
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
    public list(param: PaymentsApiListRequest = {}, options?: Configuration): Promise<ListPaymentsResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Payment By Id
     * @param param the request object
     */
    public retrieve(param: PaymentsApiRetrieveRequest, options?: Configuration): Promise<Payment> {
        return this.api.retrieve(param.id, param.expand, param.prismAccount,  options).toPromise();
    }

}

import { ObservablePayoutWalletsApi } from "./ObservableAPI";
import { PayoutWalletsApiRequestFactory, PayoutWalletsApiResponseProcessor} from "../apis/PayoutWalletsApi";

export interface PayoutWalletsApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApi_delete
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PayoutWalletsApi_delete
     */
    prismAccount?: string
}

export interface PayoutWalletsApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PayoutWalletsApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type PayoutWalletData
     * @memberof PayoutWalletsApicreate
     */
    payoutWalletData?: PayoutWalletData
}

export interface PayoutWalletsApiListRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PayoutWalletsApilist
     */
    prismAccount?: string
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof PayoutWalletsApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof PayoutWalletsApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof PayoutWalletsApilist
     */
    sort?: any
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof PayoutWalletsApilist
     */
    expand?: string
    /**
     * 
     * @type Data
     * @memberof PayoutWalletsApilist
     */
    data?: Data
}

export interface PayoutWalletsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiretrieve
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PayoutWalletsApiretrieve
     */
    prismAccount?: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof PayoutWalletsApiretrieve
     */
    expand?: string
}

export interface PayoutWalletsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiupdate
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PayoutWalletsApiupdate
     */
    prismAccount?: string
}

export class ObjectPayoutWalletsApi {
    private api: ObservablePayoutWalletsApi

    public constructor(configuration: Configuration, requestFactory?: PayoutWalletsApiRequestFactory, responseProcessor?: PayoutWalletsApiResponseProcessor) {
        this.api = new ObservablePayoutWalletsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Payout Wallet By ID
     * @param param the request object
     */
    public _delete(param: PayoutWalletsApiDeleteRequest, options?: Configuration): Promise<void> {
        return this.api._delete(param.id, param.prismAccount,  options).toPromise();
    }

    /**
     * Create Payout Wallets
     * @param param the request object
     */
    public create(param: PayoutWalletsApiCreateRequest = {}, options?: Configuration): Promise<PayoutWallet> {
        return this.api.create(param.prismAccount, param.payoutWalletData,  options).toPromise();
    }

    /**
     * List Payout Wallets
     * @param param the request object
     */
    public list(param: PayoutWalletsApiListRequest = {}, options?: Configuration): Promise<void> {
        return this.api.list(param.prismAccount, param.limit, param.page, param.sort, param.expand, param.data,  options).toPromise();
    }

    /**
     * Retrieve Payout Wallet By ID
     * @param param the request object
     */
    public retrieve(param: PayoutWalletsApiRetrieveRequest, options?: Configuration): Promise<PayoutWallet> {
        return this.api.retrieve(param.id, param.prismAccount, param.expand,  options).toPromise();
    }

    /**
     * Update Payout Wallet By ID
     * @param param the request object
     */
    public update(param: PayoutWalletsApiUpdateRequest, options?: Configuration): Promise<PayoutWallet> {
        return this.api.update(param.id, param.prismAccount,  options).toPromise();
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
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof ProductsApi_delete
     */
    prismAccount?: string
}

export interface ProductsApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof ProductsApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type ProductData
     * @memberof ProductsApicreate
     */
    productData?: ProductData
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
     * The ID of the connected Prism account you are making a request on behalf on.
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
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof ProductsApiretrieve
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
        return this.api._delete(param.id, param.prismAccount,  options).toPromise();
    }

    /**
     * Create Product
     * @param param the request object
     */
    public create(param: ProductsApiCreateRequest = {}, options?: Configuration): Promise<Product> {
        return this.api.create(param.prismAccount, param.productData,  options).toPromise();
    }

    /**
     * List Products
     * @param param the request object
     */
    public list(param: ProductsApiListRequest = {}, options?: Configuration): Promise<ListProductsResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Product By Id
     * @param param the request object
     */
    public retrieve(param: ProductsApiRetrieveRequest, options?: Configuration): Promise<Product> {
        return this.api.retrieve(param.id, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Update Product By Id
     * @param param the request object
     */
    public update(param: ProductsApiUpdateRequest, options?: Configuration): Promise<Product> {
        return this.api.update(param.id, param.prismAccount,  options).toPromise();
    }

}

import { ObservableTransfersApi } from "./ObservableAPI";
import { TransfersApiRequestFactory, TransfersApiResponseProcessor} from "../apis/TransfersApi";

export interface TransfersApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof TransfersApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type TransferData
     * @memberof TransfersApicreate
     */
    transferData?: TransferData
}

export interface TransfersApiListRequest {
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof TransfersApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof TransfersApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof TransfersApilist
     */
    sort?: any
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof TransfersApilist
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof TransfersApilist
     */
    prismAccount?: string
}

export interface TransfersApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof TransfersApiretrieve
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof TransfersApiretrieve
     */
    prismAccount?: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof TransfersApiretrieve
     */
    expand?: string
}

export class ObjectTransfersApi {
    private api: ObservableTransfersApi

    public constructor(configuration: Configuration, requestFactory?: TransfersApiRequestFactory, responseProcessor?: TransfersApiResponseProcessor) {
        this.api = new ObservableTransfersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Transfer
     * @param param the request object
     */
    public create(param: TransfersApiCreateRequest = {}, options?: Configuration): Promise<void> {
        return this.api.create(param.prismAccount, param.transferData,  options).toPromise();
    }

    /**
     * List Transfers
     * @param param the request object
     */
    public list(param: TransfersApiListRequest = {}, options?: Configuration): Promise<ListTransfersResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Transfer By ID
     * @param param the request object
     */
    public retrieve(param: TransfersApiRetrieveRequest, options?: Configuration): Promise<Transfer> {
        return this.api.retrieve(param.id, param.prismAccount, param.expand,  options).toPromise();
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
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof WalletsApi_delete
     */
    prismAccount?: string
    /**
     * 
     * @type string
     * @memberof WalletsApi_delete
     */
    expand?: string
}

export interface WalletsApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof WalletsApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type WalletData
     * @memberof WalletsApicreate
     */
    walletData?: WalletData
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
     * The ID of the connected Prism account you are making a request on behalf on.
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
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof WalletsApiretrieve
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
        return this.api._delete(param.id, param.prismAccount, param.expand,  options).toPromise();
    }

    /**
     * Create Wallet
     * @param param the request object
     */
    public create(param: WalletsApiCreateRequest = {}, options?: Configuration): Promise<Wallet> {
        return this.api.create(param.prismAccount, param.walletData,  options).toPromise();
    }

    /**
     * List Wallets
     * @param param the request object
     */
    public list(param: WalletsApiListRequest = {}, options?: Configuration): Promise<ListWalletsResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Wallet By Id
     * @param param the request object
     */
    public retrieve(param: WalletsApiRetrieveRequest, options?: Configuration): Promise<Wallet> {
        return this.api.retrieve(param.id, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Update Wallet By Id
     * @param param the request object
     */
    public update(param: WalletsApiUpdateRequest, options?: Configuration): Promise<Wallet> {
        return this.api.update(param.id, param.prismAccount,  options).toPromise();
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
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof WebhooksApi_delete
     */
    prismAccount?: string
}

export interface WebhooksApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof WebhooksApicreate
     */
    prismAccount?: string
    /**
     * 
     * @type WebhookData
     * @memberof WebhooksApicreate
     */
    webhookData?: WebhookData
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
     * The ID of the connected Prism account you are making a request on behalf on.
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
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof WebhooksApiretrieve
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
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
        return this.api._delete(param.id, param.prismAccount,  options).toPromise();
    }

    /**
     * Create Webhook
     * @param param the request object
     */
    public create(param: WebhooksApiCreateRequest = {}, options?: Configuration): Promise<Webhook> {
        return this.api.create(param.prismAccount, param.webhookData,  options).toPromise();
    }

    /**
     * List Webhooks
     * @param param the request object
     */
    public list(param: WebhooksApiListRequest = {}, options?: Configuration): Promise<ListWebhooksResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Retrieve Webhook By Id
     * @param param the request object
     */
    public retrieve(param: WebhooksApiRetrieveRequest, options?: Configuration): Promise<Webhook> {
        return this.api.retrieve(param.id, param.expand, param.prismAccount,  options).toPromise();
    }

    /**
     * Update Webhook By Id
     * @param param the request object
     */
    public update(param: WebhooksApiUpdateRequest, options?: Configuration): Promise<Webhook> {
        return this.api.update(param.id, param.prismAccount,  options).toPromise();
    }

}
