import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountAllOf } from '../models/AccountAllOf';
import { AccountAllOfBranding } from '../models/AccountAllOfBranding';
import { AccountsBranding } from '../models/AccountsBranding';
import { ApiKey } from '../models/ApiKey';
import { ApiKeyAllOf } from '../models/ApiKeyAllOf';
import { CreateAccountBody } from '../models/CreateAccountBody';
import { CreateCustomerBody } from '../models/CreateCustomerBody';
import { CreateFeeBody } from '../models/CreateFeeBody';
import { CreateInvoiceBody } from '../models/CreateInvoiceBody';
import { CreatePayoutWalletBody } from '../models/CreatePayoutWalletBody';
import { CreateProductBody } from '../models/CreateProductBody';
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
import { Invoice } from '../models/Invoice';
import { InvoiceAllOf } from '../models/InvoiceAllOf';
import { InvoicesFeeData } from '../models/InvoicesFeeData';
import { ListAccountsResponse } from '../models/ListAccountsResponse';
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
import { LogAllOf } from '../models/LogAllOf';
import { Model } from '../models/Model';
import { Payment } from '../models/Payment';
import { PaymentAllOf } from '../models/PaymentAllOf';
import { PayoutWallet } from '../models/PayoutWallet';
import { PayoutWalletAllOf } from '../models/PayoutWalletAllOf';
import { Product } from '../models/Product';
import { ProductAllOf } from '../models/ProductAllOf';
import { Transaction } from '../models/Transaction';
import { TransactionAllOf } from '../models/TransactionAllOf';
import { Transfer } from '../models/Transfer';
import { TransferAllOf } from '../models/TransferAllOf';
import { UpdateAccountBody } from '../models/UpdateAccountBody';
import { UpdateCustomerBody } from '../models/UpdateCustomerBody';
import { UpdateInvoiceBody } from '../models/UpdateInvoiceBody';
import { UpdatePayoutWalletBody } from '../models/UpdatePayoutWalletBody';
import { UpdateProductBody } from '../models/UpdateProductBody';
import { UpdateWalletBody } from '../models/UpdateWalletBody';
import { UpdateWebhookBody } from '../models/UpdateWebhookBody';
import { Wallet } from '../models/Wallet';
import { WalletAllOf } from '../models/WalletAllOf';
import { Webhook } from '../models/Webhook';
import { WebhookAllOf } from '../models/WebhookAllOf';
import { ObservableAccountsApi } from './ObservableAPI';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class PromiseAccountsApi {
    private api: ObservableAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Account
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param create_account_body 
     */
    public create(prism_account?: string, create_account_body?: CreateAccountBody, _options?: Configuration): Promise<Account> {
        const result = this.api.create(prism_account, create_account_body, _options);
        return result.toPromise();
    }

    /**
     * List Accounts
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListAccountsResponse> {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Account By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Account> {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Update Account By Id
     * @param id 
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param update_account_body 
     */
    public update(id: string, prism_account?: string, update_account_body?: UpdateAccountBody, _options?: Configuration): Promise<Account> {
        const result = this.api.update(id, prism_account, update_account_body, _options);
        return result.toPromise();
    }


}



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
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param create_customer_body 
     */
    public create(prism_account?: string, create_customer_body?: CreateCustomerBody, _options?: Configuration): Promise<Customer> {
        const result = this.api.create(prism_account, create_customer_body, _options);
        return result.toPromise();
    }

    /**
     * List Customers
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListCustomersResponse> {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Customer By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Customer> {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Update Customer By Id
     * @param id 
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param update_customer_body 
     */
    public update(id: string, prism_account?: string, update_customer_body?: UpdateCustomerBody, _options?: Configuration): Promise<Customer> {
        const result = this.api.update(id, prism_account, update_customer_body, _options);
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
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public _delete(id: string, prism_account?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(id, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Create Fee
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param create_fee_body 
     */
    public create(prism_account?: string, create_fee_body?: CreateFeeBody, _options?: Configuration): Promise<Fee> {
        const result = this.api.create(prism_account, create_fee_body, _options);
        return result.toPromise();
    }

    /**
     * List Fees
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListFeesResponse> {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Fee By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Fee> {
        const result = this.api.retrieve(id, expand, prism_account, _options);
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
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param create_invoice_body 
     */
    public create(prism_account?: string, create_invoice_body?: CreateInvoiceBody, _options?: Configuration): Promise<Invoice> {
        const result = this.api.create(prism_account, create_invoice_body, _options);
        return result.toPromise();
    }

    /**
     * List Invoices
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListInvoicesResponse> {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Poll Invoice By ID
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public poll(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<void> {
        const result = this.api.poll(id, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Invoice By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Invoice> {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Update Invoice By Id
     * @param id 
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param update_invoice_body 
     */
    public update(id: string, prism_account?: string, update_invoice_body?: UpdateInvoiceBody, _options?: Configuration): Promise<Invoice> {
        const result = this.api.update(id, prism_account, update_invoice_body, _options);
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
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListLogsResponse> {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Log By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Log> {
        const result = this.api.retrieve(id, expand, prism_account, _options);
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
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListPaymentsResponse> {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Payment By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Payment> {
        const result = this.api.retrieve(id, expand, prism_account, _options);
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
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public _delete(id: string, prism_account?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(id, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Create Payout Wallets
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param create_payout_wallet_body 
     */
    public create(prism_account?: string, create_payout_wallet_body?: CreatePayoutWalletBody, _options?: Configuration): Promise<PayoutWallet> {
        const result = this.api.create(prism_account, create_payout_wallet_body, _options);
        return result.toPromise();
    }

    /**
     * List Payout Wallets
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListPayoutWalletsResponse> {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Payout Wallet By ID
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<PayoutWallet> {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Update Payout Wallet By ID
     * @param id 
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param update_payout_wallet_body 
     */
    public update(id: string, prism_account?: string, update_payout_wallet_body?: UpdatePayoutWalletBody, _options?: Configuration): Promise<PayoutWallet> {
        const result = this.api.update(id, prism_account, update_payout_wallet_body, _options);
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
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public _delete(id: string, prism_account?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(id, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Create Product
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param create_product_body 
     */
    public create(prism_account?: string, create_product_body?: CreateProductBody, _options?: Configuration): Promise<Product> {
        const result = this.api.create(prism_account, create_product_body, _options);
        return result.toPromise();
    }

    /**
     * List Products
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListProductsResponse> {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Product By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Product> {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Update Product By Id
     * @param id 
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param update_product_body 
     */
    public update(id: string, prism_account?: string, update_product_body?: UpdateProductBody, _options?: Configuration): Promise<Product> {
        const result = this.api.update(id, prism_account, update_product_body, _options);
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
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param create_transfer_body 
     */
    public create(prism_account?: string, create_transfer_body?: CreateTransferBody, _options?: Configuration): Promise<Transfer> {
        const result = this.api.create(prism_account, create_transfer_body, _options);
        return result.toPromise();
    }

    /**
     * List Transfers
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListTransfersResponse> {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Transfer By ID
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Transfer> {
        const result = this.api.retrieve(id, expand, prism_account, _options);
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
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public _delete(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(id, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Create Wallet
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param create_wallet_body 
     */
    public create(prism_account?: string, create_wallet_body?: CreateWalletBody, _options?: Configuration): Promise<Wallet> {
        const result = this.api.create(prism_account, create_wallet_body, _options);
        return result.toPromise();
    }

    /**
     * List Wallets
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListWalletsResponse> {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Wallet By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Wallet> {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Update Wallet By Id
     * @param id 
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param update_wallet_body 
     */
    public update(id: string, prism_account?: string, update_wallet_body?: UpdateWalletBody, _options?: Configuration): Promise<Wallet> {
        const result = this.api.update(id, prism_account, update_wallet_body, _options);
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
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public _delete(id: string, prism_account?: string, _options?: Configuration): Promise<void> {
        const result = this.api._delete(id, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Create Webhook
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param create_webhook_body 
     */
    public create(prism_account?: string, create_webhook_body?: CreateWebhookBody, _options?: Configuration): Promise<Webhook> {
        const result = this.api.create(prism_account, create_webhook_body, _options);
        return result.toPromise();
    }

    /**
     * List Webhooks
     * @param limit A limit on the number of objects to be returned between 1 and 100.
     * @param page Index of the page to be returned in a paginated response.
     * @param sort Specifies whether documents are sorted in an ascending or descending order.
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListWebhooksResponse> {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Retrieve Webhook By Id
     * @param id 
     * @param expand Specifies which fields to populate in the response.
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     */
    public retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Webhook> {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }

    /**
     * Update Webhook By Id
     * @param id 
     * @param prism_account The ID of the connected Prism account you are making a request on behalf on.
     * @param update_webhook_body 
     */
    public update(id: string, prism_account?: string, update_webhook_body?: UpdateWebhookBody, _options?: Configuration): Promise<Webhook> {
        const result = this.api.update(id, prism_account, update_webhook_body, _options);
        return result.toPromise();
    }


}



