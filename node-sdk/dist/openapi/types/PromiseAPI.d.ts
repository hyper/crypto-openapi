import { Configuration } from '../configuration';
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
export declare class PromiseCustomersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor);
    create(prism_account?: string, customer_data?: CustomerData, _options?: Configuration): Promise<Customer>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListCustomersResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Customer>;
    update(id: string, prism_account?: string, inline_object?: InlineObject, _options?: Configuration): Promise<Customer>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export declare class PromiseFeesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<void>;
    create(prism_account?: string, fee_data?: FeeData, _options?: Configuration): Promise<Fee>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListFeesResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Fee>;
}
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor } from "../apis/InvoicesApi";
export declare class PromiseInvoicesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor);
    create(prism_account?: string, invoice_data?: InvoiceData, _options?: Configuration): Promise<Invoice>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListInvoicesResponse>;
    poll(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<void>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Invoice>;
    update(id: string, prism_account?: string, inline_object1?: InlineObject1, _options?: Configuration): Promise<Invoice>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export declare class PromiseLogsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListLogsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Log>;
}
import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor } from "../apis/PaymentsApi";
export declare class PromisePaymentsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentsApiRequestFactory, responseProcessor?: PaymentsApiResponseProcessor);
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListPaymentsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Payment>;
}
import { PayoutWalletsApiRequestFactory, PayoutWalletsApiResponseProcessor } from "../apis/PayoutWalletsApi";
export declare class PromisePayoutWalletsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PayoutWalletsApiRequestFactory, responseProcessor?: PayoutWalletsApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<void>;
    create(prism_account?: string, payout_wallet_data?: PayoutWalletData, _options?: Configuration): Promise<PayoutWallet>;
    list(prism_account?: string, limit?: number, page?: number, sort?: any, expand?: string, data?: Data, _options?: Configuration): Promise<void>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<PayoutWallet>;
    update(id: string, prism_account?: string, body?: any, _options?: Configuration): Promise<PayoutWallet>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export declare class PromiseProductsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<void>;
    create(prism_account?: string, product_data?: ProductData, _options?: Configuration): Promise<Product>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListProductsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Product>;
    update(id: string, prism_account?: string, inline_object2?: InlineObject2, _options?: Configuration): Promise<Product>;
}
import { TransfersApiRequestFactory, TransfersApiResponseProcessor } from "../apis/TransfersApi";
export declare class PromiseTransfersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TransfersApiRequestFactory, responseProcessor?: TransfersApiResponseProcessor);
    create(prism_account?: string, transfer_data?: TransferData, _options?: Configuration): Promise<void>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListTransfersResponse>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<Transfer>;
}
import { WalletsApiRequestFactory, WalletsApiResponseProcessor } from "../apis/WalletsApi";
export declare class PromiseWalletsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<void>;
    create(prism_account?: string, wallet_data?: WalletData, _options?: Configuration): Promise<Wallet>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListWalletsResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Wallet>;
    update(id: string, prism_account?: string, inline_object3?: InlineObject3, _options?: Configuration): Promise<Wallet>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export declare class PromiseWebhooksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(id: string, prism_account?: string, _options?: Configuration): Promise<void>;
    create(prism_account?: string, webhook_data?: WebhookData, _options?: Configuration): Promise<Webhook>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prism_account?: string, _options?: Configuration): Promise<ListWebhooksResponse>;
    retrieve(id: string, expand?: string, prism_account?: string, _options?: Configuration): Promise<Webhook>;
    update(id: string, prism_account?: string, inline_object4?: InlineObject4, _options?: Configuration): Promise<Webhook>;
}
