import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountAllOf } from '../models/AccountAllOf';
import { AccountAllOfBranding } from '../models/AccountAllOfBranding';
import { AccountsBranding } from '../models/AccountsBranding';
import { AccountsIdSettings } from '../models/AccountsIdSettings';
import { AccountsSettings } from '../models/AccountsSettings';
import { ApiKey } from '../models/ApiKey';
import { ApiKeyAllOf } from '../models/ApiKeyAllOf';
import { CreateAccountBody } from '../models/CreateAccountBody';
import { CreateCustomerBody } from '../models/CreateCustomerBody';
import { CreateFeeBody } from '../models/CreateFeeBody';
import { CreatePayoutWalletBody } from '../models/CreatePayoutWalletBody';
import { CreateProductBody } from '../models/CreateProductBody';
import { CreateSubscriptionBody } from '../models/CreateSubscriptionBody';
import { CreateTransferBody } from '../models/CreateTransferBody';
import { CreateWalletBody } from '../models/CreateWalletBody';
import { CreateWebhookBody } from '../models/CreateWebhookBody';
import { Customer } from '../models/Customer';
import { CustomerAllOf } from '../models/CustomerAllOf';
import { CustomersBillingDetails } from '../models/CustomersBillingDetails';
import { CustomersBillingDetailsAddress } from '../models/CustomersBillingDetailsAddress';
import { CustomersIdBillingDetails } from '../models/CustomersIdBillingDetails';
import { CustomersIdBillingDetailsAddress } from '../models/CustomersIdBillingDetailsAddress';
import { Fee } from '../models/Fee';
import { FeeAllOf } from '../models/FeeAllOf';
import { InlineResponse400 } from '../models/InlineResponse400';
import { InlineResponse400Error } from '../models/InlineResponse400Error';
import { Invoice } from '../models/Invoice';
import { InvoiceAllOf } from '../models/InvoiceAllOf';
import { InvoiceAllOfLineItems } from '../models/InvoiceAllOfLineItems';
import { ListAccountsResponse } from '../models/ListAccountsResponse';
import { ListCustomersResponse } from '../models/ListCustomersResponse';
import { ListFeesResponse } from '../models/ListFeesResponse';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { ListLogsResponse } from '../models/ListLogsResponse';
import { ListPaymentIntentsResponse } from '../models/ListPaymentIntentsResponse';
import { ListPaymentsResponse } from '../models/ListPaymentsResponse';
import { ListPayoutWalletsResponse } from '../models/ListPayoutWalletsResponse';
import { ListPricesResponse } from '../models/ListPricesResponse';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { ListSubscriptionsResponse } from '../models/ListSubscriptionsResponse';
import { ListTransfersResponse } from '../models/ListTransfersResponse';
import { ListWalletsResponse } from '../models/ListWalletsResponse';
import { ListWebhooksResponse } from '../models/ListWebhooksResponse';
import { Log } from '../models/Log';
import { LogAllOf } from '../models/LogAllOf';
import { Model } from '../models/Model';
import { Notification } from '../models/Notification';
import { NotificationAllOf } from '../models/NotificationAllOf';
import { Payment } from '../models/Payment';
import { PaymentAllOf } from '../models/PaymentAllOf';
import { PaymentIntent } from '../models/PaymentIntent';
import { PaymentIntentAllOf } from '../models/PaymentIntentAllOf';
import { PayoutWallet } from '../models/PayoutWallet';
import { PayoutWalletAllOf } from '../models/PayoutWalletAllOf';
import { Price } from '../models/Price';
import { PriceAllOf } from '../models/PriceAllOf';
import { PriceAllOfBasePrice } from '../models/PriceAllOfBasePrice';
import { Product } from '../models/Product';
import { ProductAllOf } from '../models/ProductAllOf';
import { Subscription } from '../models/Subscription';
import { SubscriptionAllOf } from '../models/SubscriptionAllOf';
import { SubscriptionAllOfLineItems } from '../models/SubscriptionAllOfLineItems';
import { Transfer } from '../models/Transfer';
import { TransferAllOf } from '../models/TransferAllOf';
import { UpdateAccountBody } from '../models/UpdateAccountBody';
import { UpdateCustomerBody } from '../models/UpdateCustomerBody';
import { UpdateInvoiceBody } from '../models/UpdateInvoiceBody';
import { UpdatePriceBody } from '../models/UpdatePriceBody';
import { UpdateProductBody } from '../models/UpdateProductBody';
import { UpdateSubscriptionBody } from '../models/UpdateSubscriptionBody';
import { UpdateWalletBody } from '../models/UpdateWalletBody';
import { UpdateWebhookBody } from '../models/UpdateWebhookBody';
import { Wallet } from '../models/Wallet';
import { WalletAllOf } from '../models/WalletAllOf';
import { Webhook } from '../models/Webhook';
import { WebhookAllOf } from '../models/WebhookAllOf';

import { ObservableAccountsApi } from "./ObservableAPI";
import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";

export interface AccountsApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof AccountsApicreate
     */
    prism_account?: string
    /**
     * 
     * @type CreateAccountBody
     * @memberof AccountsApicreate
     */
    create_account_body?: CreateAccountBody
}

export interface AccountsApiListRequest {
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof AccountsApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof AccountsApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof AccountsApilist
     */
    sort?: any
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof AccountsApilist
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof AccountsApilist
     */
    prism_account?: string
}

export interface AccountsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApiretrieve
     */
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof AccountsApiretrieve
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof AccountsApiretrieve
     */
    prism_account?: string
}

export interface AccountsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApiupdate
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof AccountsApiupdate
     */
    prism_account?: string
    /**
     * 
     * @type UpdateAccountBody
     * @memberof AccountsApiupdate
     */
    update_account_body?: UpdateAccountBody
}

export class ObjectAccountsApi {
    private api: ObservableAccountsApi

    public constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Account
     * @param param the request object
     */
    public create(param: AccountsApiCreateRequest = {}, options?: Configuration): Promise<Account> {
        return this.api.create(param.prism_account, param.create_account_body,  options).toPromise();
    }

    /**
     * List Accounts
     * @param param the request object
     */
    public list(param: AccountsApiListRequest = {}, options?: Configuration): Promise<ListAccountsResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Retrieve Account By Id
     * @param param the request object
     */
    public retrieve(param: AccountsApiRetrieveRequest, options?: Configuration): Promise<Account> {
        return this.api.retrieve(param.id, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Update Account By Id
     * @param param the request object
     */
    public update(param: AccountsApiUpdateRequest, options?: Configuration): Promise<Account> {
        return this.api.update(param.id, param.prism_account, param.update_account_body,  options).toPromise();
    }

}

import { ObservableCustomersApi } from "./ObservableAPI";
import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";

export interface CustomersApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof CustomersApicreate
     */
    prism_account?: string
    /**
     * 
     * @type CreateCustomerBody
     * @memberof CustomersApicreate
     */
    create_customer_body?: CreateCustomerBody
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
    prism_account?: string
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
    prism_account?: string
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
    prism_account?: string
    /**
     * 
     * @type UpdateCustomerBody
     * @memberof CustomersApiupdate
     */
    update_customer_body?: UpdateCustomerBody
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
        return this.api.create(param.prism_account, param.create_customer_body,  options).toPromise();
    }

    /**
     * List Customers
     * @param param the request object
     */
    public list(param: CustomersApiListRequest = {}, options?: Configuration): Promise<ListCustomersResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Retrieve Customer By Id
     * @param param the request object
     */
    public retrieve(param: CustomersApiRetrieveRequest, options?: Configuration): Promise<Customer> {
        return this.api.retrieve(param.id, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Update Customer By Id
     * @param param the request object
     */
    public update(param: CustomersApiUpdateRequest, options?: Configuration): Promise<Customer> {
        return this.api.update(param.id, param.prism_account, param.update_customer_body,  options).toPromise();
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
    prism_account?: string
}

export interface FeesApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof FeesApicreate
     */
    prism_account?: string
    /**
     * 
     * @type CreateFeeBody
     * @memberof FeesApicreate
     */
    create_fee_body?: CreateFeeBody
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
    prism_account?: string
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
    prism_account?: string
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
        return this.api._delete(param.id, param.prism_account,  options).toPromise();
    }

    /**
     * Create Fee
     * @param param the request object
     */
    public create(param: FeesApiCreateRequest = {}, options?: Configuration): Promise<Fee> {
        return this.api.create(param.prism_account, param.create_fee_body,  options).toPromise();
    }

    /**
     * List Fees
     * @param param the request object
     */
    public list(param: FeesApiListRequest = {}, options?: Configuration): Promise<ListFeesResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Retrieve Fee By Id
     * @param param the request object
     */
    public retrieve(param: FeesApiRetrieveRequest, options?: Configuration): Promise<Fee> {
        return this.api.retrieve(param.id, param.expand, param.prism_account,  options).toPromise();
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
    prism_account?: string
    /**
     * 
     * @type Invoice
     * @memberof InvoicesApicreate
     */
    invoice?: Invoice
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
    prism_account?: string
}

export interface InvoicesApiPollRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApipoll
     */
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof InvoicesApipoll
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof InvoicesApipoll
     */
    prism_account?: string
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
    prism_account?: string
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
    prism_account?: string
    /**
     * 
     * @type UpdateInvoiceBody
     * @memberof InvoicesApiupdate
     */
    update_invoice_body?: UpdateInvoiceBody
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
        return this.api.create(param.prism_account, param.invoice,  options).toPromise();
    }

    /**
     * List Invoices
     * @param param the request object
     */
    public list(param: InvoicesApiListRequest = {}, options?: Configuration): Promise<ListInvoicesResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Poll Invoice By ID
     * @param param the request object
     */
    public poll(param: InvoicesApiPollRequest, options?: Configuration): Promise<Invoice> {
        return this.api.poll(param.id, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Retrieve Invoice By Id
     * @param param the request object
     */
    public retrieve(param: InvoicesApiRetrieveRequest, options?: Configuration): Promise<Invoice> {
        return this.api.retrieve(param.id, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Update Invoice By Id
     * @param param the request object
     */
    public update(param: InvoicesApiUpdateRequest, options?: Configuration): Promise<Invoice> {
        return this.api.update(param.id, param.prism_account, param.update_invoice_body,  options).toPromise();
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
    prism_account?: string
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
    prism_account?: string
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
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Retrieve Log By Id
     * @param param the request object
     */
    public retrieve(param: LogsApiRetrieveRequest, options?: Configuration): Promise<Log> {
        return this.api.retrieve(param.id, param.expand, param.prism_account,  options).toPromise();
    }

}

import { ObservablePaymentIntentsApi } from "./ObservableAPI";
import { PaymentIntentsApiRequestFactory, PaymentIntentsApiResponseProcessor} from "../apis/PaymentIntentsApi";

export interface PaymentIntentsApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PaymentIntentsApicreate
     */
    prism_account?: string
    /**
     * 
     * @type PaymentIntent
     * @memberof PaymentIntentsApicreate
     */
    payment_intent?: PaymentIntent
}

export interface PaymentIntentsApiListRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PaymentIntentsApilist
     */
    prism_account?: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof PaymentIntentsApilist
     */
    expand?: string
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof PaymentIntentsApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof PaymentIntentsApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof PaymentIntentsApilist
     */
    sort?: any
}

export interface PaymentIntentsApiPollRequest {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApipoll
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PaymentIntentsApipoll
     */
    prism_account?: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof PaymentIntentsApipoll
     */
    expand?: string
}

export interface PaymentIntentsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiretrieve
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PaymentIntentsApiretrieve
     */
    prism_account?: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof PaymentIntentsApiretrieve
     */
    expand?: string
}

export interface PaymentIntentsApiUpdateHashRequest {
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiupdateHash
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PaymentIntentsApiupdateHash
     */
    prism_account?: string
    /**
     * 
     * @type string
     * @memberof PaymentIntentsApiupdateHash
     */
    body?: string
}

export class ObjectPaymentIntentsApi {
    private api: ObservablePaymentIntentsApi

    public constructor(configuration: Configuration, requestFactory?: PaymentIntentsApiRequestFactory, responseProcessor?: PaymentIntentsApiResponseProcessor) {
        this.api = new ObservablePaymentIntentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Payment Intent
     * @param param the request object
     */
    public create(param: PaymentIntentsApiCreateRequest = {}, options?: Configuration): Promise<PaymentIntent> {
        return this.api.create(param.prism_account, param.payment_intent,  options).toPromise();
    }

    /**
     * List Payment Intents
     * @param param the request object
     */
    public list(param: PaymentIntentsApiListRequest = {}, options?: Configuration): Promise<ListPaymentIntentsResponse> {
        return this.api.list(param.prism_account, param.expand, param.limit, param.page, param.sort,  options).toPromise();
    }

    /**
     * Poll Payment Intent
     * @param param the request object
     */
    public poll(param: PaymentIntentsApiPollRequest, options?: Configuration): Promise<PaymentIntent> {
        return this.api.poll(param.id, param.prism_account, param.expand,  options).toPromise();
    }

    /**
     * Retrieve Payment Intent
     * @param param the request object
     */
    public retrieve(param: PaymentIntentsApiRetrieveRequest, options?: Configuration): Promise<PaymentIntent> {
        return this.api.retrieve(param.id, param.prism_account, param.expand,  options).toPromise();
    }

    /**
     * Update Payment Intent Hash
     * @param param the request object
     */
    public updateHash(param: PaymentIntentsApiUpdateHashRequest, options?: Configuration): Promise<PaymentIntent> {
        return this.api.updateHash(param.id, param.prism_account, param.body,  options).toPromise();
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
    prism_account?: string
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
    prism_account?: string
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
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Retrieve Payment By Id
     * @param param the request object
     */
    public retrieve(param: PaymentsApiRetrieveRequest, options?: Configuration): Promise<Payment> {
        return this.api.retrieve(param.id, param.expand, param.prism_account,  options).toPromise();
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
    prism_account?: string
}

export interface PayoutWalletsApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PayoutWalletsApicreate
     */
    prism_account?: string
    /**
     * 
     * @type CreatePayoutWalletBody
     * @memberof PayoutWalletsApicreate
     */
    create_payout_wallet_body?: CreatePayoutWalletBody
}

export interface PayoutWalletsApiListRequest {
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
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PayoutWalletsApilist
     */
    prism_account?: string
}

export interface PayoutWalletsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof PayoutWalletsApiretrieve
     */
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof PayoutWalletsApiretrieve
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PayoutWalletsApiretrieve
     */
    prism_account?: string
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
    prism_account?: string
    /**
     * 
     * @type PayoutWallet
     * @memberof PayoutWalletsApiupdate
     */
    payout_wallet?: PayoutWallet
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
        return this.api._delete(param.id, param.prism_account,  options).toPromise();
    }

    /**
     * Create Payout Wallets
     * @param param the request object
     */
    public create(param: PayoutWalletsApiCreateRequest = {}, options?: Configuration): Promise<PayoutWallet> {
        return this.api.create(param.prism_account, param.create_payout_wallet_body,  options).toPromise();
    }

    /**
     * List Payout Wallets
     * @param param the request object
     */
    public list(param: PayoutWalletsApiListRequest = {}, options?: Configuration): Promise<ListPayoutWalletsResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Retrieve Payout Wallet By ID
     * @param param the request object
     */
    public retrieve(param: PayoutWalletsApiRetrieveRequest, options?: Configuration): Promise<PayoutWallet> {
        return this.api.retrieve(param.id, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Update Payout Wallet By ID
     * @param param the request object
     */
    public update(param: PayoutWalletsApiUpdateRequest, options?: Configuration): Promise<PayoutWallet> {
        return this.api.update(param.id, param.prism_account, param.payout_wallet,  options).toPromise();
    }

}

import { ObservablePricesApi } from "./ObservableAPI";
import { PricesApiRequestFactory, PricesApiResponseProcessor} from "../apis/PricesApi";

export interface PricesApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof PricesApi_delete
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PricesApi_delete
     */
    prism_account?: string
}

export interface PricesApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PricesApicreate
     */
    prism_account?: string
    /**
     * 
     * @type Price
     * @memberof PricesApicreate
     */
    price?: Price
}

export interface PricesApiListRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PricesApilist
     */
    prism_account?: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof PricesApilist
     */
    expand?: string
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof PricesApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof PricesApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof PricesApilist
     */
    sort?: any
}

export interface PricesApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof PricesApiretrieve
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PricesApiretrieve
     */
    prism_account?: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof PricesApiretrieve
     */
    expand?: string
}

export interface PricesApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof PricesApiupdate
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof PricesApiupdate
     */
    prism_account?: string
    /**
     * 
     * @type UpdatePriceBody
     * @memberof PricesApiupdate
     */
    update_price_body?: UpdatePriceBody
}

export class ObjectPricesApi {
    private api: ObservablePricesApi

    public constructor(configuration: Configuration, requestFactory?: PricesApiRequestFactory, responseProcessor?: PricesApiResponseProcessor) {
        this.api = new ObservablePricesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Price
     * @param param the request object
     */
    public _delete(param: PricesApiDeleteRequest, options?: Configuration): Promise<void> {
        return this.api._delete(param.id, param.prism_account,  options).toPromise();
    }

    /**
     * Create Price
     * @param param the request object
     */
    public create(param: PricesApiCreateRequest = {}, options?: Configuration): Promise<Price> {
        return this.api.create(param.prism_account, param.price,  options).toPromise();
    }

    /**
     * List Prices
     * @param param the request object
     */
    public list(param: PricesApiListRequest = {}, options?: Configuration): Promise<ListPricesResponse> {
        return this.api.list(param.prism_account, param.expand, param.limit, param.page, param.sort,  options).toPromise();
    }

    /**
     * Retrieve Price
     * @param param the request object
     */
    public retrieve(param: PricesApiRetrieveRequest, options?: Configuration): Promise<Price> {
        return this.api.retrieve(param.id, param.prism_account, param.expand,  options).toPromise();
    }

    /**
     * Update Price
     * @param param the request object
     */
    public update(param: PricesApiUpdateRequest, options?: Configuration): Promise<Price> {
        return this.api.update(param.id, param.prism_account, param.update_price_body,  options).toPromise();
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
    prism_account?: string
}

export interface ProductsApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof ProductsApicreate
     */
    prism_account?: string
    /**
     * 
     * @type CreateProductBody
     * @memberof ProductsApicreate
     */
    create_product_body?: CreateProductBody
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
    prism_account?: string
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
    prism_account?: string
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
    prism_account?: string
    /**
     * 
     * @type UpdateProductBody
     * @memberof ProductsApiupdate
     */
    update_product_body?: UpdateProductBody
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
        return this.api._delete(param.id, param.prism_account,  options).toPromise();
    }

    /**
     * Create Product
     * @param param the request object
     */
    public create(param: ProductsApiCreateRequest = {}, options?: Configuration): Promise<Product> {
        return this.api.create(param.prism_account, param.create_product_body,  options).toPromise();
    }

    /**
     * List Products
     * @param param the request object
     */
    public list(param: ProductsApiListRequest = {}, options?: Configuration): Promise<ListProductsResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Retrieve Product By Id
     * @param param the request object
     */
    public retrieve(param: ProductsApiRetrieveRequest, options?: Configuration): Promise<Product> {
        return this.api.retrieve(param.id, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Update Product By Id
     * @param param the request object
     */
    public update(param: ProductsApiUpdateRequest, options?: Configuration): Promise<Product> {
        return this.api.update(param.id, param.prism_account, param.update_product_body,  options).toPromise();
    }

}

import { ObservableSubscriptionsApi } from "./ObservableAPI";
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";

export interface SubscriptionsApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApi_delete
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof SubscriptionsApi_delete
     */
    prism_account?: string
}

export interface SubscriptionsApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof SubscriptionsApicreate
     */
    prism_account?: string
    /**
     * 
     * @type CreateSubscriptionBody
     * @memberof SubscriptionsApicreate
     */
    create_subscription_body?: CreateSubscriptionBody
}

export interface SubscriptionsApiListRequest {
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof SubscriptionsApilist
     */
    expand?: string
    /**
     * A limit on the number of objects to be returned between 1 and 100.
     * @type number
     * @memberof SubscriptionsApilist
     */
    limit?: number
    /**
     * Index of the page to be returned in a paginated response.
     * @type number
     * @memberof SubscriptionsApilist
     */
    page?: number
    /**
     * Specifies whether documents are sorted in an ascending or descending order.
     * @type any
     * @memberof SubscriptionsApilist
     */
    sort?: any
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof SubscriptionsApilist
     */
    prism_account?: string
}

export interface SubscriptionsApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApiretrieve
     */
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof SubscriptionsApiretrieve
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof SubscriptionsApiretrieve
     */
    prism_account?: string
}

export interface SubscriptionsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof SubscriptionsApiupdate
     */
    id: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof SubscriptionsApiupdate
     */
    prism_account?: string
    /**
     * 
     * @type UpdateSubscriptionBody
     * @memberof SubscriptionsApiupdate
     */
    update_subscription_body?: UpdateSubscriptionBody
}

export class ObjectSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete Subscription
     * @param param the request object
     */
    public _delete(param: SubscriptionsApiDeleteRequest, options?: Configuration): Promise<void> {
        return this.api._delete(param.id, param.prism_account,  options).toPromise();
    }

    /**
     * Create Subscription
     * @param param the request object
     */
    public create(param: SubscriptionsApiCreateRequest = {}, options?: Configuration): Promise<Subscription> {
        return this.api.create(param.prism_account, param.create_subscription_body,  options).toPromise();
    }

    /**
     * List Subscriptions
     * @param param the request object
     */
    public list(param: SubscriptionsApiListRequest = {}, options?: Configuration): Promise<ListSubscriptionsResponse> {
        return this.api.list(param.expand, param.limit, param.page, param.sort, param.prism_account,  options).toPromise();
    }

    /**
     * Retrieve Subscription
     * @param param the request object
     */
    public retrieve(param: SubscriptionsApiRetrieveRequest, options?: Configuration): Promise<Subscription> {
        return this.api.retrieve(param.id, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Update Subscription
     * @param param the request object
     */
    public update(param: SubscriptionsApiUpdateRequest, options?: Configuration): Promise<Subscription> {
        return this.api.update(param.id, param.prism_account, param.update_subscription_body,  options).toPromise();
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
    prism_account?: string
    /**
     * 
     * @type CreateTransferBody
     * @memberof TransfersApicreate
     */
    create_transfer_body?: CreateTransferBody
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
    prism_account?: string
}

export interface TransfersApiRetrieveRequest {
    /**
     * 
     * @type string
     * @memberof TransfersApiretrieve
     */
    id: string
    /**
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof TransfersApiretrieve
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof TransfersApiretrieve
     */
    prism_account?: string
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
    public create(param: TransfersApiCreateRequest = {}, options?: Configuration): Promise<Transfer> {
        return this.api.create(param.prism_account, param.create_transfer_body,  options).toPromise();
    }

    /**
     * List Transfers
     * @param param the request object
     */
    public list(param: TransfersApiListRequest = {}, options?: Configuration): Promise<ListTransfersResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Retrieve Transfer By ID
     * @param param the request object
     */
    public retrieve(param: TransfersApiRetrieveRequest, options?: Configuration): Promise<Transfer> {
        return this.api.retrieve(param.id, param.expand, param.prism_account,  options).toPromise();
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
     * Specifies which fields to populate in the response.
     * @type string
     * @memberof WalletsApi_delete
     */
    expand?: string
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof WalletsApi_delete
     */
    prism_account?: string
}

export interface WalletsApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof WalletsApicreate
     */
    prism_account?: string
    /**
     * 
     * @type CreateWalletBody
     * @memberof WalletsApicreate
     */
    create_wallet_body?: CreateWalletBody
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
    prism_account?: string
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
    prism_account?: string
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
    prism_account?: string
    /**
     * 
     * @type UpdateWalletBody
     * @memberof WalletsApiupdate
     */
    update_wallet_body?: UpdateWalletBody
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
        return this.api._delete(param.id, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Create Wallet
     * @param param the request object
     */
    public create(param: WalletsApiCreateRequest = {}, options?: Configuration): Promise<Wallet> {
        return this.api.create(param.prism_account, param.create_wallet_body,  options).toPromise();
    }

    /**
     * List Wallets
     * @param param the request object
     */
    public list(param: WalletsApiListRequest = {}, options?: Configuration): Promise<ListWalletsResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Retrieve Wallet By Id
     * @param param the request object
     */
    public retrieve(param: WalletsApiRetrieveRequest, options?: Configuration): Promise<Wallet> {
        return this.api.retrieve(param.id, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Update Wallet By Id
     * @param param the request object
     */
    public update(param: WalletsApiUpdateRequest, options?: Configuration): Promise<Wallet> {
        return this.api.update(param.id, param.prism_account, param.update_wallet_body,  options).toPromise();
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
    prism_account?: string
}

export interface WebhooksApiCreateRequest {
    /**
     * The ID of the connected Prism account you are making a request on behalf on.
     * @type string
     * @memberof WebhooksApicreate
     */
    prism_account?: string
    /**
     * 
     * @type CreateWebhookBody
     * @memberof WebhooksApicreate
     */
    create_webhook_body?: CreateWebhookBody
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
    prism_account?: string
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
    prism_account?: string
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
    prism_account?: string
    /**
     * 
     * @type UpdateWebhookBody
     * @memberof WebhooksApiupdate
     */
    update_webhook_body?: UpdateWebhookBody
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
        return this.api._delete(param.id, param.prism_account,  options).toPromise();
    }

    /**
     * Create Webhook
     * @param param the request object
     */
    public create(param: WebhooksApiCreateRequest = {}, options?: Configuration): Promise<Webhook> {
        return this.api.create(param.prism_account, param.create_webhook_body,  options).toPromise();
    }

    /**
     * List Webhooks
     * @param param the request object
     */
    public list(param: WebhooksApiListRequest = {}, options?: Configuration): Promise<ListWebhooksResponse> {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Retrieve Webhook By Id
     * @param param the request object
     */
    public retrieve(param: WebhooksApiRetrieveRequest, options?: Configuration): Promise<Webhook> {
        return this.api.retrieve(param.id, param.expand, param.prism_account,  options).toPromise();
    }

    /**
     * Update Webhook By Id
     * @param param the request object
     */
    public update(param: WebhooksApiUpdateRequest, options?: Configuration): Promise<Webhook> {
        return this.api.update(param.id, param.prism_account, param.update_webhook_body,  options).toPromise();
    }

}
