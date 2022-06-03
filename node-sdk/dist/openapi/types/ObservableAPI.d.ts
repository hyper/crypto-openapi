import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { Account } from '../models/Account';
import { CreateAccountBody } from '../models/CreateAccountBody';
import { CreateCustomerBody } from '../models/CreateCustomerBody';
import { CreateFeeBody } from '../models/CreateFeeBody';
import { CreateInvoiceBody } from '../models/CreateInvoiceBody';
import { CreatePayoutWalletBody } from '../models/CreatePayoutWalletBody';
import { CreatePriceBody } from '../models/CreatePriceBody';
import { CreateProductBody } from '../models/CreateProductBody';
import { CreateSubscriptionBody } from '../models/CreateSubscriptionBody';
import { CreateTransactionBody } from '../models/CreateTransactionBody';
import { CreateTransferBody } from '../models/CreateTransferBody';
import { CreateWalletBody } from '../models/CreateWalletBody';
import { CreateWebhookBody } from '../models/CreateWebhookBody';
import { Customer } from '../models/Customer';
import { Fee } from '../models/Fee';
import { Invoice } from '../models/Invoice';
import { ListAccountsResponse } from '../models/ListAccountsResponse';
import { ListCustomersResponse } from '../models/ListCustomersResponse';
import { ListFeesResponse } from '../models/ListFeesResponse';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { ListLogsResponse } from '../models/ListLogsResponse';
import { ListPaymentsResponse } from '../models/ListPaymentsResponse';
import { ListPayoutWalletsResponse } from '../models/ListPayoutWalletsResponse';
import { ListPricesResponse } from '../models/ListPricesResponse';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { ListSubscriptionPeriodsResponse } from '../models/ListSubscriptionPeriodsResponse';
import { ListSubscriptionsResponse } from '../models/ListSubscriptionsResponse';
import { ListTransactionsResponse } from '../models/ListTransactionsResponse';
import { ListTransfersResponse } from '../models/ListTransfersResponse';
import { ListWalletsResponse } from '../models/ListWalletsResponse';
import { ListWebhooksResponse } from '../models/ListWebhooksResponse';
import { Log } from '../models/Log';
import { Payment } from '../models/Payment';
import { PayoutWallet } from '../models/PayoutWallet';
import { Price } from '../models/Price';
import { Product } from '../models/Product';
import { Subscription } from '../models/Subscription';
import { SubscriptionPeriod } from '../models/SubscriptionPeriod';
import { Transaction } from '../models/Transaction';
import { Transfer } from '../models/Transfer';
import { UpdateAccountBody } from '../models/UpdateAccountBody';
import { UpdateCustomerBody } from '../models/UpdateCustomerBody';
import { UpdateInvoiceBody } from '../models/UpdateInvoiceBody';
import { UpdateProductBody } from '../models/UpdateProductBody';
import { UpdateSubscriptionBody } from '../models/UpdateSubscriptionBody';
import { UpdateSubscriptionPeriodBody } from '../models/UpdateSubscriptionPeriodBody';
import { UpdateWalletBody } from '../models/UpdateWalletBody';
import { UpdateWebhookBody } from '../models/UpdateWebhookBody';
import { Wallet } from '../models/Wallet';
import { Webhook } from '../models/Webhook';
import { AccountsApiRequestFactory, AccountsApiResponseProcessor } from "../apis/AccountsApi";
export declare class ObservableAccountsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor);
    create(prism_account?: string, create_account_body?: CreateAccountBody, _options?: Configuration): Observable<Account>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListAccountsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Account>;
    update(id: string, prism_account?: string, update_account_body?: UpdateAccountBody, _options?: Configuration): Observable<Account>;
}
import { CustomersApiRequestFactory, CustomersApiResponseProcessor } from "../apis/CustomersApi";
export declare class ObservableCustomersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor);
    create(prism_account?: string, create_customer_body?: CreateCustomerBody, _options?: Configuration): Observable<Customer>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListCustomersResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Customer>;
    update(id: string, prism_account?: string, update_customer_body?: UpdateCustomerBody, _options?: Configuration): Observable<Customer>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export declare class ObservableFeesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Observable<void>;
    create(prism_account?: string, create_fee_body?: CreateFeeBody, _options?: Configuration): Observable<Fee>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListFeesResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Fee>;
}
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor } from "../apis/InvoicesApi";
export declare class ObservableInvoicesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor);
    create(prism_account?: string, create_invoice_body?: CreateInvoiceBody, _options?: Configuration): Observable<Invoice>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListInvoicesResponse>;
    poll(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Invoice>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Invoice>;
    update(id: string, prism_account?: string, update_invoice_body?: UpdateInvoiceBody, _options?: Configuration): Observable<Invoice>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export declare class ObservableLogsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListLogsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Log>;
}
import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor } from "../apis/PaymentsApi";
export declare class ObservablePaymentsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PaymentsApiRequestFactory, responseProcessor?: PaymentsApiResponseProcessor);
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListPaymentsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Payment>;
}
import { PayoutWalletsApiRequestFactory, PayoutWalletsApiResponseProcessor } from "../apis/PayoutWalletsApi";
export declare class ObservablePayoutWalletsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PayoutWalletsApiRequestFactory, responseProcessor?: PayoutWalletsApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Observable<void>;
    create(prism_account?: string, create_payout_wallet_body?: CreatePayoutWalletBody, _options?: Configuration): Observable<PayoutWallet>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListPayoutWalletsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<PayoutWallet>;
    update(id: string, prism_account?: string, payout_wallet?: PayoutWallet, _options?: Configuration): Observable<PayoutWallet>;
}
import { PricesApiRequestFactory, PricesApiResponseProcessor } from "../apis/PricesApi";
export declare class ObservablePricesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PricesApiRequestFactory, responseProcessor?: PricesApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Observable<void>;
    create(prism_account?: string, create_price_body?: CreatePriceBody, _options?: Configuration): Observable<Price>;
    list(prism_account?: string, expand?: string, limit?: number, page?: number, sort?: any, _options?: Configuration): Observable<ListPricesResponse>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Observable<Price>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export declare class ObservableProductsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Observable<void>;
    create(prism_account?: string, create_product_body?: CreateProductBody, _options?: Configuration): Observable<Product>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListProductsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Product>;
    update(id: string, prism_account?: string, update_product_body?: UpdateProductBody, _options?: Configuration): Observable<Product>;
}
import { SubscriptionPeriodsApiRequestFactory, SubscriptionPeriodsApiResponseProcessor } from "../apis/SubscriptionPeriodsApi";
export declare class ObservableSubscriptionPeriodsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SubscriptionPeriodsApiRequestFactory, responseProcessor?: SubscriptionPeriodsApiResponseProcessor);
    list(prism_account?: string, expand?: string, limit?: number, page?: number, sort?: any, _options?: Configuration): Observable<ListSubscriptionPeriodsResponse>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Observable<SubscriptionPeriod>;
    update(id: string, prism_account?: string, update_subscription_period_body?: UpdateSubscriptionPeriodBody, _options?: Configuration): Observable<SubscriptionPeriod>;
}
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor } from "../apis/SubscriptionsApi";
export declare class ObservableSubscriptionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Observable<void>;
    create(prism_account?: string, create_subscription_body?: CreateSubscriptionBody, _options?: Configuration): Observable<Subscription>;
    list(expand?: string, limit?: number, page?: number, sort?: any, prism_account?: string, _options?: Configuration): Observable<ListSubscriptionsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Subscription>;
    update(id: string, prism_account?: string, update_subscription_body?: UpdateSubscriptionBody, _options?: Configuration): Observable<Subscription>;
}
import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor } from "../apis/TransactionsApi";
export declare class ObservableTransactionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TransactionsApiRequestFactory, responseProcessor?: TransactionsApiResponseProcessor);
    create(prism_account?: string, create_transaction_body?: CreateTransactionBody, _options?: Configuration): Observable<Transaction>;
    list(prism_account?: string, expand?: string, limit?: number, page?: number, sort?: any, _options?: Configuration): Observable<ListTransactionsResponse>;
    poll(id: string, prism_account?: string, expand?: string, _options?: Configuration): Observable<Transaction>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Observable<Transaction>;
}
import { TransfersApiRequestFactory, TransfersApiResponseProcessor } from "../apis/TransfersApi";
export declare class ObservableTransfersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TransfersApiRequestFactory, responseProcessor?: TransfersApiResponseProcessor);
    create(prism_account?: string, create_transfer_body?: CreateTransferBody, _options?: Configuration): Observable<Transfer>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListTransfersResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Transfer>;
}
import { WalletsApiRequestFactory, WalletsApiResponseProcessor } from "../apis/WalletsApi";
export declare class ObservableWalletsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<void>;
    create(prism_account?: string, create_wallet_body?: CreateWalletBody, _options?: Configuration): Observable<Wallet>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListWalletsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Wallet>;
    update(id: string, prism_account?: string, update_wallet_body?: UpdateWalletBody, _options?: Configuration): Observable<Wallet>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export declare class ObservableWebhooksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Observable<void>;
    create(prism_account?: string, create_webhook_body?: CreateWebhookBody, _options?: Configuration): Observable<Webhook>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListWebhooksResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Webhook>;
    update(id: string, prism_account?: string, update_webhook_body?: UpdateWebhookBody, _options?: Configuration): Observable<Webhook>;
}
