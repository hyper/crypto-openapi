import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { Customer } from '../models/Customer';
import { Fee } from '../models/Fee';
import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { Invoice } from '../models/Invoice';
import { Log } from '../models/Log';
import { Payment } from '../models/Payment';
import { Product } from '../models/Product';
import { Wallet } from '../models/Wallet';
import { Webhook } from '../models/Webhook';
import { CustomersApiRequestFactory, CustomersApiResponseProcessor } from "../apis/CustomersApi";
export declare class ObservableCustomersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor);
    create(prismAccount?: string, inlineObject?: InlineObject, _options?: Configuration): Observable<Customer>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse200>;
    retrieve(customerId: string, expand?: string, prismAccount?: string, _options?: Configuration): Observable<Customer>;
    update(customerId: string, prismAccount?: string, _options?: Configuration): Observable<Customer>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export declare class ObservableFeesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor);
    _delete(feeId: string, prismAccount?: string, _options?: Configuration): Observable<void>;
    create(prismAccount?: string, inlineObject1?: InlineObject1, _options?: Configuration): Observable<Fee>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2001>;
    retrieve(feeId: string, expand?: string, prismAccount?: string, _options?: Configuration): Observable<Fee>;
}
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor } from "../apis/InvoicesApi";
export declare class ObservableInvoicesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor);
    create(prismAccount?: string, inlineObject2?: InlineObject2, _options?: Configuration): Observable<Invoice>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2002>;
    retrieve(invoiceId: string, expand?: string, prismAccount?: string, _options?: Configuration): Observable<Invoice>;
    update(invoiceId: string, prismAccount?: string, _options?: Configuration): Observable<Invoice>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export declare class ObservableLogsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2003>;
    retrieve(logId: string, expand?: string, prismAccount?: string, _options?: Configuration): Observable<Log>;
}
import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor } from "../apis/PaymentsApi";
export declare class ObservablePaymentsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PaymentsApiRequestFactory, responseProcessor?: PaymentsApiResponseProcessor);
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2004>;
    retrieve(paymentId: string, expand?: string, prismAccount?: string, _options?: Configuration): Observable<Payment>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export declare class ObservableProductsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    _delete(productId: string, prismAccount?: string, _options?: Configuration): Observable<void>;
    create(prismAccount?: string, inlineObject3?: InlineObject3, _options?: Configuration): Observable<Product>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2005>;
    retrieve(productId: string, expand?: string, prismAccount?: string, _options?: Configuration): Observable<Product>;
    update(productId: string, prismAccount?: string, _options?: Configuration): Observable<Product>;
}
import { WalletsApiRequestFactory, WalletsApiResponseProcessor } from "../apis/WalletsApi";
export declare class ObservableWalletsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(walletId: string, prismAccount?: string, _options?: Configuration): Observable<void>;
    create(prismAccount?: string, inlineObject4?: InlineObject4, _options?: Configuration): Observable<Wallet>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2006>;
    retrieve(walletId: string, expand?: string, prismAccount?: string, _options?: Configuration): Observable<Wallet>;
    update(walletId: string, prismAccount?: string, _options?: Configuration): Observable<Wallet>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export declare class ObservableWebhooksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(webhookId: string, prismAccount?: string, _options?: Configuration): Observable<void>;
    create(prismAccount?: string, inlineObject5?: InlineObject5, _options?: Configuration): Observable<Webhook>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2007>;
    retrieve(webhookId: string, expand?: string, prismAccount?: string, _options?: Configuration): Observable<Webhook>;
    update(webhookId: string, prismAccount?: string, _options?: Configuration): Observable<Webhook>;
}
