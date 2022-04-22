import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse20010 } from '../models/InlineResponse20010';
import { InlineResponse20011 } from '../models/InlineResponse20011';
import { InlineResponse20012 } from '../models/InlineResponse20012';
import { InlineResponse20013 } from '../models/InlineResponse20013';
import { InlineResponse20014 } from '../models/InlineResponse20014';
import { InlineResponse20015 } from '../models/InlineResponse20015';
import { InlineResponse20016 } from '../models/InlineResponse20016';
import { InlineResponse20017 } from '../models/InlineResponse20017';
import { InlineResponse20018 } from '../models/InlineResponse20018';
import { InlineResponse20019 } from '../models/InlineResponse20019';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse20020 } from '../models/InlineResponse20020';
import { InlineResponse20021 } from '../models/InlineResponse20021';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { InlineResponse2008 } from '../models/InlineResponse2008';
import { InlineResponse2009 } from '../models/InlineResponse2009';
import { CustomersApiRequestFactory, CustomersApiResponseProcessor } from "../apis/CustomersApi";
export declare class ObservableCustomersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor);
    create(prismAccount?: string, inlineObject?: InlineObject, _options?: Configuration): Observable<InlineResponse2001>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse200>;
    retrieve(customerId: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2001>;
    update(customerId: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2002>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export declare class ObservableFeesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor);
    _delete(feeId: string, prismAccount?: string, _options?: Configuration): Observable<void>;
    create(prismAccount?: string, inlineObject1?: InlineObject1, _options?: Configuration): Observable<InlineResponse2004>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2003>;
    retrieve(feeId: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2005>;
}
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor } from "../apis/InvoicesApi";
export declare class ObservableInvoicesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor);
    create(prismAccount?: string, inlineObject2?: InlineObject2, _options?: Configuration): Observable<InlineResponse2007>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2006>;
    retrieve(invoiceId: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2008>;
    update(invoiceId: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2008>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export declare class ObservableLogsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse2009>;
    retrieve(logId: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse20010>;
}
import { PaymentsApiRequestFactory, PaymentsApiResponseProcessor } from "../apis/PaymentsApi";
export declare class ObservablePaymentsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PaymentsApiRequestFactory, responseProcessor?: PaymentsApiResponseProcessor);
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse20011>;
    retrieve(paymentId: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse20012>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export declare class ObservableProductsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    _delete(productId: string, prismAccount?: string, _options?: Configuration): Observable<void>;
    create(prismAccount?: string, inlineObject3?: InlineObject3, _options?: Configuration): Observable<InlineResponse20014>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse20013>;
    retrieve(productId: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse20015>;
    update(productId: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse20016>;
}
import { WalletsApiRequestFactory, WalletsApiResponseProcessor } from "../apis/WalletsApi";
export declare class ObservableWalletsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(walletId: string, prismAccount?: string, _options?: Configuration): Observable<void>;
    create(prismAccount?: string, inlineObject4?: InlineObject4, _options?: Configuration): Observable<InlineResponse20018>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse20017>;
    retrieve(walletId: string, limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse20018>;
    update(walletId: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse20018>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export declare class ObservableWebhooksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(webhookId: string, prismAccount?: string, _options?: Configuration): Observable<void>;
    create(prismAccount?: string, inlineObject5?: InlineObject5, _options?: Configuration): Observable<InlineResponse20020>;
    list(limit?: number, page?: number, sort?: any, expand?: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse20019>;
    retrieve(webhookId: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse20021>;
    update(webhookId: string, prismAccount?: string, _options?: Configuration): Observable<InlineResponse20020>;
}
