import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { Account } from '../models/Account';
import { CreateAccountBody } from '../models/CreateAccountBody';
import { CreateCustomerBody } from '../models/CreateCustomerBody';
import { CreateFeeBody } from '../models/CreateFeeBody';
import { CreatePayoutWalletBody } from '../models/CreatePayoutWalletBody';
import { CreateProductBody } from '../models/CreateProductBody';
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
import { ListPaymentIntentsResponse } from '../models/ListPaymentIntentsResponse';
import { ListPayoutWalletsResponse } from '../models/ListPayoutWalletsResponse';
import { ListPricesResponse } from '../models/ListPricesResponse';
import { ListProductsResponse } from '../models/ListProductsResponse';
import { ListSubscriptionsResponse } from '../models/ListSubscriptionsResponse';
import { ListTransfersResponse } from '../models/ListTransfersResponse';
import { ListWalletsResponse } from '../models/ListWalletsResponse';
import { ListWebhooksResponse } from '../models/ListWebhooksResponse';
import { Log } from '../models/Log';
import { PaymentIntent } from '../models/PaymentIntent';
import { PayoutWallet } from '../models/PayoutWallet';
import { Price } from '../models/Price';
import { Product } from '../models/Product';
import { Subscription } from '../models/Subscription';
import { Transfer } from '../models/Transfer';
import { UpdateAccountBody } from '../models/UpdateAccountBody';
import { UpdateCustomerBody } from '../models/UpdateCustomerBody';
import { UpdateInvoiceBody } from '../models/UpdateInvoiceBody';
import { UpdatePaymentIntentBody } from '../models/UpdatePaymentIntentBody';
import { UpdatePriceBody } from '../models/UpdatePriceBody';
import { UpdateProductBody } from '../models/UpdateProductBody';
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
    create(prism_account?: string, invoice?: Invoice, _options?: Configuration): Observable<Invoice>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListInvoicesResponse>;
    pay(id: string, prism_account?: string, _options?: Configuration): Observable<PaymentIntent>;
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
import { PaymentIntentsApiRequestFactory, PaymentIntentsApiResponseProcessor } from "../apis/PaymentIntentsApi";
export declare class ObservablePaymentIntentsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PaymentIntentsApiRequestFactory, responseProcessor?: PaymentIntentsApiResponseProcessor);
    cancel(id: string, prism_account?: string, _options?: Configuration): Observable<PaymentIntent>;
    create(prism_account?: string, payment_intent?: PaymentIntent, _options?: Configuration): Observable<PaymentIntent>;
    list(prism_account?: string, expand?: string, limit?: number, page?: number, sort?: any, status?: 'processing' | 'succeeded' | 'failed' | 'canceled', customer?: string, _options?: Configuration): Observable<ListPaymentIntentsResponse>;
    poll(id: string, prism_account?: string, expand?: string, _options?: Configuration): Observable<PaymentIntent>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Observable<PaymentIntent>;
    update(id: string, prism_account?: string, update_payment_intent_body?: UpdatePaymentIntentBody, _options?: Configuration): Observable<PaymentIntent>;
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
    create(prism_account?: string, price?: Price, _options?: Configuration): Observable<Price>;
    list(prism_account?: string, expand?: string, limit?: number, page?: number, sort?: any, _options?: Configuration): Observable<ListPricesResponse>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Observable<Price>;
    update(id: string, prism_account?: string, update_price_body?: UpdatePriceBody, _options?: Configuration): Observable<Price>;
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
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor } from "../apis/SubscriptionsApi";
export declare class ObservableSubscriptionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor);
    cancel(id: string, prism_account?: string, _options?: Configuration): Observable<Subscription>;
    create(prism_account?: string, subscription?: Subscription, _options?: Configuration): Observable<Subscription>;
    list(expand?: string, limit?: number, page?: number, sort?: any, prism_account?: string, _options?: Configuration): Observable<ListSubscriptionsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Subscription>;
    update(id: string, prism_account?: string, subscription?: Subscription, _options?: Configuration): Observable<Subscription>;
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
