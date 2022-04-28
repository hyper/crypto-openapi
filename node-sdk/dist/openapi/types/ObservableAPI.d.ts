import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { Customer } from '../models/Customer';
import { CustomerData } from '../models/CustomerData';
import { Data } from '../models/Data';
import { Fee } from '../models/Fee';
import { FeeData } from '../models/FeeData';
import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject4 } from '../models/InlineObject4';
import { Invoice } from '../models/Invoice';
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
import { Payment } from '../models/Payment';
import { PayoutWallet } from '../models/PayoutWallet';
import { PayoutWalletData } from '../models/PayoutWalletData';
import { Product } from '../models/Product';
import { ProductData } from '../models/ProductData';
import { Transfer } from '../models/Transfer';
import { TransferData } from '../models/TransferData';
import { Wallet } from '../models/Wallet';
import { WalletData } from '../models/WalletData';
import { Webhook } from '../models/Webhook';
import { WebhookData } from '../models/WebhookData';
import { CustomersApiRequestFactory, CustomersApiResponseProcessor } from "../apis/CustomersApi";
export declare class ObservableCustomersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor);
    create(prism_account?: string, customer_data?: CustomerData, _options?: Configuration): Observable<Customer>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListCustomersResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Customer>;
    update(id: string, prism_account?: string, inline_object?: InlineObject, _options?: Configuration): Observable<Customer>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export declare class ObservableFeesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Observable<void>;
    create(prism_account?: string, fee_data?: FeeData, _options?: Configuration): Observable<Fee>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListFeesResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Fee>;
}
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor } from "../apis/InvoicesApi";
export declare class ObservableInvoicesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor);
    create(prism_account?: string, invoice_data?: InvoiceData, _options?: Configuration): Observable<Invoice>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListInvoicesResponse>;
    poll(id: string, prism_account?: string, expand?: string, _options?: Configuration): Observable<void>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Invoice>;
    update(id: string, prism_account?: string, inline_object1?: InlineObject1, _options?: Configuration): Observable<Invoice>;
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
    create(prism_account?: string, payout_wallet_data?: PayoutWalletData, _options?: Configuration): Observable<PayoutWallet>;
    list(prism_account?: string, limit?: number, page?: number, sort?: any, expand?: string, data?: Data, _options?: Configuration): Observable<void>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Observable<PayoutWallet>;
    update(id: string, prism_account?: string, body?: any, _options?: Configuration): Observable<PayoutWallet>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export declare class ObservableProductsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Observable<void>;
    create(prism_account?: string, product_data?: ProductData, _options?: Configuration): Observable<Product>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListProductsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Product>;
    update(id: string, prism_account?: string, inline_object2?: InlineObject2, _options?: Configuration): Observable<Product>;
}
import { TransfersApiRequestFactory, TransfersApiResponseProcessor } from "../apis/TransfersApi";
export declare class ObservableTransfersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TransfersApiRequestFactory, responseProcessor?: TransfersApiResponseProcessor);
    create(prism_account?: string, transfer_data?: TransferData, _options?: Configuration): Observable<void>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListTransfersResponse>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Observable<Transfer>;
}
import { WalletsApiRequestFactory, WalletsApiResponseProcessor } from "../apis/WalletsApi";
export declare class ObservableWalletsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(id: string, prism_account?: string, expand?: string, _options?: Configuration): Observable<void>;
    create(prism_account?: string, wallet_data?: WalletData, _options?: Configuration): Observable<Wallet>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListWalletsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Wallet>;
    update(id: string, prism_account?: string, inline_object3?: InlineObject3, _options?: Configuration): Observable<Wallet>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export declare class ObservableWebhooksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Observable<void>;
    create(prism_account?: string, webhook_data?: WebhookData, _options?: Configuration): Observable<Webhook>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Observable<ListWebhooksResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Observable<Webhook>;
    update(id: string, prism_account?: string, inline_object4?: InlineObject4, _options?: Configuration): Observable<Webhook>;
}
