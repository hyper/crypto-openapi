import { Configuration } from '../configuration';
import { AccountConnectRequest } from '../models/AccountConnectRequest';
import { AccountCreateRequest } from '../models/AccountCreateRequest';
import { AccountDashboardAccessRequest } from '../models/AccountDashboardAccessRequest';
import { AccountDashboardAccessResponse } from '../models/AccountDashboardAccessResponse';
import { AccountListResponse } from '../models/AccountListResponse';
import { AccountUpdateRequest } from '../models/AccountUpdateRequest';
import { CheckoutCreateRequest } from '../models/CheckoutCreateRequest';
import { CheckoutListResponse } from '../models/CheckoutListResponse';
import { CustomerCreateRequest } from '../models/CustomerCreateRequest';
import { CustomerListResponse } from '../models/CustomerListResponse';
import { CustomerUpdateRequest } from '../models/CustomerUpdateRequest';
import { FeeCreateRequest } from '../models/FeeCreateRequest';
import { FeeListResponse } from '../models/FeeListResponse';
import { IAccount } from '../models/IAccount';
import { ICheckout } from '../models/ICheckout';
import { ICustomer } from '../models/ICustomer';
import { IFee } from '../models/IFee';
import { IInvoice } from '../models/IInvoice';
import { ILog } from '../models/ILog';
import { IPaymentIntent } from '../models/IPaymentIntent';
import { IPaymentLink } from '../models/IPaymentLink';
import { IPayoutWallet } from '../models/IPayoutWallet';
import { IPrice } from '../models/IPrice';
import { IProduct } from '../models/IProduct';
import { ISubscription } from '../models/ISubscription';
import { ITransfer } from '../models/ITransfer';
import { IWallet } from '../models/IWallet';
import { IWebhook } from '../models/IWebhook';
import { InvoiceCreateRequest } from '../models/InvoiceCreateRequest';
import { InvoiceListResponse } from '../models/InvoiceListResponse';
import { InvoiceUpdateRequest } from '../models/InvoiceUpdateRequest';
import { LogListResponse } from '../models/LogListResponse';
import { PaymentIntentCreateRequest } from '../models/PaymentIntentCreateRequest';
import { PaymentIntentListResponse } from '../models/PaymentIntentListResponse';
import { PaymentIntentUpdateRequest } from '../models/PaymentIntentUpdateRequest';
import { PaymentLinkCreateRequest } from '../models/PaymentLinkCreateRequest';
import { PaymentLinkListResponse } from '../models/PaymentLinkListResponse';
import { PaymentLinkUpdateRequest } from '../models/PaymentLinkUpdateRequest';
import { PayoutWalletCreateRequest } from '../models/PayoutWalletCreateRequest';
import { PayoutWalletListResponse } from '../models/PayoutWalletListResponse';
import { PayoutWalletUpdateRequest } from '../models/PayoutWalletUpdateRequest';
import { PriceCreateRequest } from '../models/PriceCreateRequest';
import { PriceListResponse } from '../models/PriceListResponse';
import { PriceUpdateRequest } from '../models/PriceUpdateRequest';
import { ProductCreateRequest } from '../models/ProductCreateRequest';
import { ProductListResponse } from '../models/ProductListResponse';
import { ProductUpdateRequest } from '../models/ProductUpdateRequest';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import { SubscriptionListResponse } from '../models/SubscriptionListResponse';
import { SubscriptionUpdateRequest } from '../models/SubscriptionUpdateRequest';
import { TransferCreateRequest } from '../models/TransferCreateRequest';
import { TransferListResponse } from '../models/TransferListResponse';
import { WalletCreateRequest } from '../models/WalletCreateRequest';
import { WalletListResponse } from '../models/WalletListResponse';
import { WalletUpdateRequest } from '../models/WalletUpdateRequest';
import { WebhookCreateRequest } from '../models/WebhookCreateRequest';
import { WebhookListResponse } from '../models/WebhookListResponse';
import { WebhookUpdateRequest } from '../models/WebhookUpdateRequest';
import { AccountsApiRequestFactory, AccountsApiResponseProcessor } from "../apis/AccountsApi";
export interface AccountsApiConnectRequest {
    id: string;
    pluto_account?: string;
    account_connect_request?: AccountConnectRequest;
}
export interface AccountsApiConnect0Request {
    id: string;
    pluto_account?: string;
    account_connect_request?: AccountConnectRequest;
}
export interface AccountsApiCreateRequest {
    pluto_account?: string;
    account_create_request?: AccountCreateRequest;
}
export interface AccountsApiCreate0Request {
    pluto_account?: string;
    account_create_request?: AccountCreateRequest;
}
export interface AccountsApiDashboardAccessRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
    account_dashboard_access_request?: AccountDashboardAccessRequest;
}
export interface AccountsApiDashboardAccess0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
    account_dashboard_access_request?: AccountDashboardAccessRequest;
}
export interface AccountsApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface AccountsApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface AccountsApiPatchRequest {
    id: string;
    pluto_account?: string;
    account_update_request?: AccountUpdateRequest;
}
export interface AccountsApiPatch0Request {
    id: string;
    pluto_account?: string;
    account_update_request?: AccountUpdateRequest;
}
export interface AccountsApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface AccountsApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export declare class ObjectAccountsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor);
    connect(param: AccountsApiConnectRequest, options?: Configuration): Promise<IAccount>;
    connect_1(param: AccountsApiConnect0Request, options?: Configuration): Promise<IAccount>;
    create(param?: AccountsApiCreateRequest, options?: Configuration): Promise<IAccount>;
    create_2(param?: AccountsApiCreate0Request, options?: Configuration): Promise<IAccount>;
    dashboardAccess(param: AccountsApiDashboardAccessRequest, options?: Configuration): Promise<AccountDashboardAccessResponse>;
    dashboardAccess_3(param: AccountsApiDashboardAccess0Request, options?: Configuration): Promise<AccountDashboardAccessResponse>;
    list(param?: AccountsApiListRequest, options?: Configuration): Promise<AccountListResponse>;
    list_4(param?: AccountsApiList0Request, options?: Configuration): Promise<AccountListResponse>;
    patch(param: AccountsApiPatchRequest, options?: Configuration): Promise<IAccount>;
    patch_5(param: AccountsApiPatch0Request, options?: Configuration): Promise<IAccount>;
    retrieve(param: AccountsApiRetrieveRequest, options?: Configuration): Promise<IAccount>;
    retrieve_6(param: AccountsApiRetrieve0Request, options?: Configuration): Promise<IAccount>;
}
import { CheckoutsApiRequestFactory, CheckoutsApiResponseProcessor } from "../apis/CheckoutsApi";
export interface CheckoutsApiDeleteRequest {
    id: string;
    pluto_account?: string;
}
export interface CheckoutsApiDelete0Request {
    id: string;
    pluto_account?: string;
}
export interface CheckoutsApiCreateRequest {
    pluto_account?: string;
    checkout_create_request?: CheckoutCreateRequest;
}
export interface CheckoutsApiCreate0Request {
    pluto_account?: string;
    checkout_create_request?: CheckoutCreateRequest;
}
export interface CheckoutsApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface CheckoutsApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface CheckoutsApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface CheckoutsApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export declare class ObjectCheckoutsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CheckoutsApiRequestFactory, responseProcessor?: CheckoutsApiResponseProcessor);
    _delete(param: CheckoutsApiDeleteRequest, options?: Configuration): Promise<ICheckout>;
    _delete_1(param: CheckoutsApiDelete0Request, options?: Configuration): Promise<ICheckout>;
    create(param?: CheckoutsApiCreateRequest, options?: Configuration): Promise<ICheckout>;
    create_2(param?: CheckoutsApiCreate0Request, options?: Configuration): Promise<ICheckout>;
    list(param?: CheckoutsApiListRequest, options?: Configuration): Promise<CheckoutListResponse>;
    list_3(param?: CheckoutsApiList0Request, options?: Configuration): Promise<CheckoutListResponse>;
    retrieve(param: CheckoutsApiRetrieveRequest, options?: Configuration): Promise<ICheckout>;
    retrieve_4(param: CheckoutsApiRetrieve0Request, options?: Configuration): Promise<ICheckout>;
}
import { CustomersApiRequestFactory, CustomersApiResponseProcessor } from "../apis/CustomersApi";
export interface CustomersApiCreateRequest {
    pluto_account?: string;
    customer_create_request?: CustomerCreateRequest;
}
export interface CustomersApiCreate0Request {
    pluto_account?: string;
    customer_create_request?: CustomerCreateRequest;
}
export interface CustomersApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
    email?: string;
}
export interface CustomersApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
    email?: string;
}
export interface CustomersApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface CustomersApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface CustomersApiUpdateRequest {
    id: string;
    pluto_account?: string;
    customer_update_request?: CustomerUpdateRequest;
}
export interface CustomersApiUpdate0Request {
    id: string;
    pluto_account?: string;
    customer_update_request?: CustomerUpdateRequest;
}
export declare class ObjectCustomersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor);
    create(param?: CustomersApiCreateRequest, options?: Configuration): Promise<ICustomer>;
    create_1(param?: CustomersApiCreate0Request, options?: Configuration): Promise<ICustomer>;
    list(param?: CustomersApiListRequest, options?: Configuration): Promise<CustomerListResponse>;
    list_2(param?: CustomersApiList0Request, options?: Configuration): Promise<CustomerListResponse>;
    retrieve(param: CustomersApiRetrieveRequest, options?: Configuration): Promise<ICustomer>;
    retrieve_3(param: CustomersApiRetrieve0Request, options?: Configuration): Promise<ICustomer>;
    update(param: CustomersApiUpdateRequest, options?: Configuration): Promise<ICustomer>;
    update_4(param: CustomersApiUpdate0Request, options?: Configuration): Promise<ICustomer>;
}
import { FeesApiRequestFactory, FeesApiResponseProcessor } from "../apis/FeesApi";
export interface FeesApiCreateRequest {
    pluto_account?: string;
    fee_create_request?: FeeCreateRequest;
}
export interface FeesApiCreate0Request {
    pluto_account?: string;
    fee_create_request?: FeeCreateRequest;
}
export interface FeesApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface FeesApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface FeesApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface FeesApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export declare class ObjectFeesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: FeesApiRequestFactory, responseProcessor?: FeesApiResponseProcessor);
    create(param?: FeesApiCreateRequest, options?: Configuration): Promise<IFee>;
    create_1(param?: FeesApiCreate0Request, options?: Configuration): Promise<IFee>;
    list(param?: FeesApiListRequest, options?: Configuration): Promise<FeeListResponse>;
    list_2(param?: FeesApiList0Request, options?: Configuration): Promise<FeeListResponse>;
    retrieve(param: FeesApiRetrieveRequest, options?: Configuration): Promise<IFee>;
    retrieve_3(param: FeesApiRetrieve0Request, options?: Configuration): Promise<IFee>;
}
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor } from "../apis/InvoicesApi";
export interface InvoicesApiDeleteRequest {
    id: string;
    pluto_account?: string;
}
export interface InvoicesApiDelete0Request {
    id: string;
    pluto_account?: string;
}
export interface InvoicesApiCreateRequest {
    pluto_account?: string;
    invoice_create_request?: InvoiceCreateRequest;
}
export interface InvoicesApiCreate0Request {
    pluto_account?: string;
    invoice_create_request?: InvoiceCreateRequest;
}
export interface InvoicesApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface InvoicesApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface InvoicesApiPayRequest {
    id: string;
    pluto_account?: string;
}
export interface InvoicesApiPay0Request {
    id: string;
    pluto_account?: string;
}
export interface InvoicesApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface InvoicesApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface InvoicesApiUpdateRequest {
    id: string;
    pluto_account?: string;
    invoice_update_request?: InvoiceUpdateRequest;
}
export interface InvoicesApiUpdate0Request {
    id: string;
    pluto_account?: string;
    invoice_update_request?: InvoiceUpdateRequest;
}
export declare class ObjectInvoicesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor);
    _delete(param: InvoicesApiDeleteRequest, options?: Configuration): Promise<IInvoice>;
    _delete_1(param: InvoicesApiDelete0Request, options?: Configuration): Promise<IInvoice>;
    create(param?: InvoicesApiCreateRequest, options?: Configuration): Promise<IInvoice>;
    create_2(param?: InvoicesApiCreate0Request, options?: Configuration): Promise<IInvoice>;
    list(param?: InvoicesApiListRequest, options?: Configuration): Promise<InvoiceListResponse>;
    list_3(param?: InvoicesApiList0Request, options?: Configuration): Promise<InvoiceListResponse>;
    pay(param: InvoicesApiPayRequest, options?: Configuration): Promise<IPaymentIntent>;
    pay_4(param: InvoicesApiPay0Request, options?: Configuration): Promise<IPaymentIntent>;
    retrieve(param: InvoicesApiRetrieveRequest, options?: Configuration): Promise<IInvoice>;
    retrieve_5(param: InvoicesApiRetrieve0Request, options?: Configuration): Promise<IInvoice>;
    update(param: InvoicesApiUpdateRequest, options?: Configuration): Promise<IInvoice>;
    update_6(param: InvoicesApiUpdate0Request, options?: Configuration): Promise<IInvoice>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export interface LogsApiListRequest {
    pluto_account?: string;
}
export interface LogsApiList0Request {
    pluto_account?: string;
}
export interface LogsApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface LogsApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export declare class ObjectLogsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    list(param?: LogsApiListRequest, options?: Configuration): Promise<LogListResponse>;
    list_1(param?: LogsApiList0Request, options?: Configuration): Promise<LogListResponse>;
    retrieve(param: LogsApiRetrieveRequest, options?: Configuration): Promise<ILog>;
    retrieve_2(param: LogsApiRetrieve0Request, options?: Configuration): Promise<ILog>;
}
import { PaymentIntentsApiRequestFactory, PaymentIntentsApiResponseProcessor } from "../apis/PaymentIntentsApi";
export interface PaymentIntentsApiDeleteRequest {
    id: string;
    pluto_account?: string;
}
export interface PaymentIntentsApiDelete0Request {
    id: string;
    pluto_account?: string;
}
export interface PaymentIntentsApiCreateRequest {
    pluto_account?: string;
    payment_intent_create_request?: PaymentIntentCreateRequest;
}
export interface PaymentIntentsApiCreate0Request {
    pluto_account?: string;
    payment_intent_create_request?: PaymentIntentCreateRequest;
}
export interface PaymentIntentsApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
    status?: string;
    customer?: string;
}
export interface PaymentIntentsApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
    status?: string;
    customer?: string;
}
export interface PaymentIntentsApiPollRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface PaymentIntentsApiPoll0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface PaymentIntentsApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface PaymentIntentsApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface PaymentIntentsApiSendReceiptRequest {
    id: string;
    pluto_account?: string;
}
export interface PaymentIntentsApiSendReceipt0Request {
    id: string;
    pluto_account?: string;
}
export interface PaymentIntentsApiUpdateRequest {
    id: string;
    pluto_account?: string;
    payment_intent_update_request?: PaymentIntentUpdateRequest;
}
export interface PaymentIntentsApiUpdate0Request {
    id: string;
    pluto_account?: string;
    payment_intent_update_request?: PaymentIntentUpdateRequest;
}
export declare class ObjectPaymentIntentsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentIntentsApiRequestFactory, responseProcessor?: PaymentIntentsApiResponseProcessor);
    _delete(param: PaymentIntentsApiDeleteRequest, options?: Configuration): Promise<IPaymentIntent>;
    _delete_1(param: PaymentIntentsApiDelete0Request, options?: Configuration): Promise<IPaymentIntent>;
    create(param?: PaymentIntentsApiCreateRequest, options?: Configuration): Promise<IPaymentIntent>;
    create_2(param?: PaymentIntentsApiCreate0Request, options?: Configuration): Promise<IPaymentIntent>;
    list(param?: PaymentIntentsApiListRequest, options?: Configuration): Promise<PaymentIntentListResponse>;
    list_3(param?: PaymentIntentsApiList0Request, options?: Configuration): Promise<PaymentIntentListResponse>;
    poll(param: PaymentIntentsApiPollRequest, options?: Configuration): Promise<IPaymentIntent>;
    poll_4(param: PaymentIntentsApiPoll0Request, options?: Configuration): Promise<IPaymentIntent>;
    retrieve(param: PaymentIntentsApiRetrieveRequest, options?: Configuration): Promise<IPaymentIntent>;
    retrieve_5(param: PaymentIntentsApiRetrieve0Request, options?: Configuration): Promise<IPaymentIntent>;
    sendReceipt(param: PaymentIntentsApiSendReceiptRequest, options?: Configuration): Promise<IPaymentIntent>;
    sendReceipt_6(param: PaymentIntentsApiSendReceipt0Request, options?: Configuration): Promise<IPaymentIntent>;
    update(param: PaymentIntentsApiUpdateRequest, options?: Configuration): Promise<IPaymentIntent>;
    update_7(param: PaymentIntentsApiUpdate0Request, options?: Configuration): Promise<IPaymentIntent>;
}
import { PaymentLinksApiRequestFactory, PaymentLinksApiResponseProcessor } from "../apis/PaymentLinksApi";
export interface PaymentLinksApiDeleteRequest {
    id: string;
    pluto_account?: string;
}
export interface PaymentLinksApiDelete0Request {
    id: string;
    pluto_account?: string;
}
export interface PaymentLinksApiCreateRequest {
    pluto_account?: string;
    payment_link_create_request?: PaymentLinkCreateRequest;
}
export interface PaymentLinksApiCreate0Request {
    pluto_account?: string;
    payment_link_create_request?: PaymentLinkCreateRequest;
}
export interface PaymentLinksApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface PaymentLinksApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface PaymentLinksApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface PaymentLinksApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface PaymentLinksApiUpdateRequest {
    id: string;
    pluto_account?: string;
    payment_link_update_request?: PaymentLinkUpdateRequest;
}
export interface PaymentLinksApiUpdate0Request {
    id: string;
    pluto_account?: string;
    payment_link_update_request?: PaymentLinkUpdateRequest;
}
export declare class ObjectPaymentLinksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PaymentLinksApiRequestFactory, responseProcessor?: PaymentLinksApiResponseProcessor);
    _delete(param: PaymentLinksApiDeleteRequest, options?: Configuration): Promise<IPaymentLink>;
    _delete_1(param: PaymentLinksApiDelete0Request, options?: Configuration): Promise<IPaymentLink>;
    create(param?: PaymentLinksApiCreateRequest, options?: Configuration): Promise<IPaymentLink>;
    create_2(param?: PaymentLinksApiCreate0Request, options?: Configuration): Promise<IPaymentLink>;
    list(param?: PaymentLinksApiListRequest, options?: Configuration): Promise<PaymentLinkListResponse>;
    list_3(param?: PaymentLinksApiList0Request, options?: Configuration): Promise<PaymentLinkListResponse>;
    retrieve(param: PaymentLinksApiRetrieveRequest, options?: Configuration): Promise<IPaymentLink>;
    retrieve_4(param: PaymentLinksApiRetrieve0Request, options?: Configuration): Promise<IPaymentLink>;
    update(param: PaymentLinksApiUpdateRequest, options?: Configuration): Promise<IPaymentLink>;
    update_5(param: PaymentLinksApiUpdate0Request, options?: Configuration): Promise<IPaymentLink>;
}
import { PayoutWalletsApiRequestFactory, PayoutWalletsApiResponseProcessor } from "../apis/PayoutWalletsApi";
export interface PayoutWalletsApiDeleteRequest {
    id: string;
    pluto_account?: string;
}
export interface PayoutWalletsApiDelete0Request {
    id: string;
    pluto_account?: string;
}
export interface PayoutWalletsApiCreateRequest {
    pluto_account?: string;
    payout_wallet_create_request?: PayoutWalletCreateRequest;
}
export interface PayoutWalletsApiCreate0Request {
    pluto_account?: string;
    payout_wallet_create_request?: PayoutWalletCreateRequest;
}
export interface PayoutWalletsApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface PayoutWalletsApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface PayoutWalletsApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface PayoutWalletsApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface PayoutWalletsApiUpdateRequest {
    id: string;
    pluto_account?: string;
    payout_wallet_update_request?: PayoutWalletUpdateRequest;
}
export interface PayoutWalletsApiUpdate0Request {
    id: string;
    pluto_account?: string;
    payout_wallet_update_request?: PayoutWalletUpdateRequest;
}
export declare class ObjectPayoutWalletsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PayoutWalletsApiRequestFactory, responseProcessor?: PayoutWalletsApiResponseProcessor);
    _delete(param: PayoutWalletsApiDeleteRequest, options?: Configuration): Promise<IPayoutWallet>;
    _delete_1(param: PayoutWalletsApiDelete0Request, options?: Configuration): Promise<IPayoutWallet>;
    create(param?: PayoutWalletsApiCreateRequest, options?: Configuration): Promise<IPayoutWallet>;
    create_2(param?: PayoutWalletsApiCreate0Request, options?: Configuration): Promise<IPayoutWallet>;
    list(param?: PayoutWalletsApiListRequest, options?: Configuration): Promise<PayoutWalletListResponse>;
    list_3(param?: PayoutWalletsApiList0Request, options?: Configuration): Promise<PayoutWalletListResponse>;
    retrieve(param: PayoutWalletsApiRetrieveRequest, options?: Configuration): Promise<IPayoutWallet>;
    retrieve_4(param: PayoutWalletsApiRetrieve0Request, options?: Configuration): Promise<IPayoutWallet>;
    update(param: PayoutWalletsApiUpdateRequest, options?: Configuration): Promise<IPayoutWallet>;
    update_5(param: PayoutWalletsApiUpdate0Request, options?: Configuration): Promise<IPayoutWallet>;
}
import { PricesApiRequestFactory, PricesApiResponseProcessor } from "../apis/PricesApi";
export interface PricesApiDeleteRequest {
    id: string;
    pluto_account?: string;
}
export interface PricesApiDelete0Request {
    id: string;
    pluto_account?: string;
}
export interface PricesApiCreateRequest {
    pluto_account?: string;
    price_create_request?: PriceCreateRequest;
}
export interface PricesApiCreate0Request {
    pluto_account?: string;
    price_create_request?: PriceCreateRequest;
}
export interface PricesApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface PricesApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface PricesApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface PricesApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface PricesApiUpdateRequest {
    id: string;
    pluto_account?: string;
    price_update_request?: PriceUpdateRequest;
}
export interface PricesApiUpdate0Request {
    id: string;
    pluto_account?: string;
    price_update_request?: PriceUpdateRequest;
}
export declare class ObjectPricesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PricesApiRequestFactory, responseProcessor?: PricesApiResponseProcessor);
    _delete(param: PricesApiDeleteRequest, options?: Configuration): Promise<IPrice>;
    _delete_1(param: PricesApiDelete0Request, options?: Configuration): Promise<IPrice>;
    create(param?: PricesApiCreateRequest, options?: Configuration): Promise<IPrice>;
    create_2(param?: PricesApiCreate0Request, options?: Configuration): Promise<IPrice>;
    list(param?: PricesApiListRequest, options?: Configuration): Promise<PriceListResponse>;
    list_3(param?: PricesApiList0Request, options?: Configuration): Promise<PriceListResponse>;
    retrieve(param: PricesApiRetrieveRequest, options?: Configuration): Promise<IPrice>;
    retrieve_4(param: PricesApiRetrieve0Request, options?: Configuration): Promise<IPrice>;
    update(param: PricesApiUpdateRequest, options?: Configuration): Promise<IPrice>;
    update_5(param: PricesApiUpdate0Request, options?: Configuration): Promise<IPrice>;
}
import { ProductsApiRequestFactory, ProductsApiResponseProcessor } from "../apis/ProductsApi";
export interface ProductsApiDeleteRequest {
    id: string;
    pluto_account?: string;
}
export interface ProductsApiDelete0Request {
    id: string;
    pluto_account?: string;
}
export interface ProductsApiCreateRequest {
    pluto_account?: string;
    product_create_request?: ProductCreateRequest;
}
export interface ProductsApiCreate0Request {
    pluto_account?: string;
    product_create_request?: ProductCreateRequest;
}
export interface ProductsApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface ProductsApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface ProductsApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface ProductsApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface ProductsApiUpdateRequest {
    id: string;
    pluto_account?: string;
    product_update_request?: ProductUpdateRequest;
}
export interface ProductsApiUpdate0Request {
    id: string;
    pluto_account?: string;
    product_update_request?: ProductUpdateRequest;
}
export declare class ObjectProductsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor);
    _delete(param: ProductsApiDeleteRequest, options?: Configuration): Promise<IProduct>;
    _delete_1(param: ProductsApiDelete0Request, options?: Configuration): Promise<IProduct>;
    create(param?: ProductsApiCreateRequest, options?: Configuration): Promise<IProduct>;
    create_2(param?: ProductsApiCreate0Request, options?: Configuration): Promise<IProduct>;
    list(param?: ProductsApiListRequest, options?: Configuration): Promise<ProductListResponse>;
    list_3(param?: ProductsApiList0Request, options?: Configuration): Promise<ProductListResponse>;
    retrieve(param: ProductsApiRetrieveRequest, options?: Configuration): Promise<IProduct>;
    retrieve_4(param: ProductsApiRetrieve0Request, options?: Configuration): Promise<IProduct>;
    update(param: ProductsApiUpdateRequest, options?: Configuration): Promise<IProduct>;
    update_5(param: ProductsApiUpdate0Request, options?: Configuration): Promise<IProduct>;
}
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor } from "../apis/SubscriptionsApi";
export interface SubscriptionsApiDeleteRequest {
    id: string;
    pluto_account?: string;
}
export interface SubscriptionsApiDelete0Request {
    id: string;
    pluto_account?: string;
}
export interface SubscriptionsApiCreateRequest {
    pluto_account?: string;
    subscription_create_request?: SubscriptionCreateRequest;
}
export interface SubscriptionsApiCreate0Request {
    pluto_account?: string;
    subscription_create_request?: SubscriptionCreateRequest;
}
export interface SubscriptionsApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface SubscriptionsApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface SubscriptionsApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface SubscriptionsApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface SubscriptionsApiUpdateRequest {
    id: string;
    pluto_account?: string;
    subscription_update_request?: SubscriptionUpdateRequest;
}
export interface SubscriptionsApiUpdate0Request {
    id: string;
    pluto_account?: string;
    subscription_update_request?: SubscriptionUpdateRequest;
}
export declare class ObjectSubscriptionsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor);
    _delete(param: SubscriptionsApiDeleteRequest, options?: Configuration): Promise<ISubscription>;
    _delete_1(param: SubscriptionsApiDelete0Request, options?: Configuration): Promise<ISubscription>;
    create(param?: SubscriptionsApiCreateRequest, options?: Configuration): Promise<ISubscription>;
    create_2(param?: SubscriptionsApiCreate0Request, options?: Configuration): Promise<ISubscription>;
    list(param?: SubscriptionsApiListRequest, options?: Configuration): Promise<SubscriptionListResponse>;
    list_3(param?: SubscriptionsApiList0Request, options?: Configuration): Promise<SubscriptionListResponse>;
    retrieve(param: SubscriptionsApiRetrieveRequest, options?: Configuration): Promise<ISubscription>;
    retrieve_4(param: SubscriptionsApiRetrieve0Request, options?: Configuration): Promise<ISubscription>;
    update(param: SubscriptionsApiUpdateRequest, options?: Configuration): Promise<ISubscription>;
    update_5(param: SubscriptionsApiUpdate0Request, options?: Configuration): Promise<ISubscription>;
}
import { TransfersApiRequestFactory, TransfersApiResponseProcessor } from "../apis/TransfersApi";
export interface TransfersApiCreateRequest {
    pluto_account?: string;
    transfer_create_request?: TransferCreateRequest;
}
export interface TransfersApiCreate0Request {
    pluto_account?: string;
    transfer_create_request?: TransferCreateRequest;
}
export interface TransfersApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface TransfersApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface TransfersApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface TransfersApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export declare class ObjectTransfersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TransfersApiRequestFactory, responseProcessor?: TransfersApiResponseProcessor);
    create(param?: TransfersApiCreateRequest, options?: Configuration): Promise<ITransfer>;
    create_1(param?: TransfersApiCreate0Request, options?: Configuration): Promise<ITransfer>;
    list(param?: TransfersApiListRequest, options?: Configuration): Promise<TransferListResponse>;
    list_2(param?: TransfersApiList0Request, options?: Configuration): Promise<TransferListResponse>;
    retrieve(param: TransfersApiRetrieveRequest, options?: Configuration): Promise<ITransfer>;
    retrieve_3(param: TransfersApiRetrieve0Request, options?: Configuration): Promise<ITransfer>;
}
import { WalletsApiRequestFactory, WalletsApiResponseProcessor } from "../apis/WalletsApi";
export interface WalletsApiDeleteRequest {
    id: string;
    pluto_account?: string;
}
export interface WalletsApiDelete0Request {
    id: string;
    pluto_account?: string;
}
export interface WalletsApiCreateRequest {
    pluto_account?: string;
    wallet_create_request?: WalletCreateRequest;
}
export interface WalletsApiCreate0Request {
    pluto_account?: string;
    wallet_create_request?: WalletCreateRequest;
}
export interface WalletsApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface WalletsApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface WalletsApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface WalletsApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface WalletsApiUpdateRequest {
    id: string;
    pluto_account?: string;
    wallet_update_request?: WalletUpdateRequest;
}
export interface WalletsApiUpdate0Request {
    id: string;
    pluto_account?: string;
    wallet_update_request?: WalletUpdateRequest;
}
export declare class ObjectWalletsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WalletsApiRequestFactory, responseProcessor?: WalletsApiResponseProcessor);
    _delete(param: WalletsApiDeleteRequest, options?: Configuration): Promise<IWallet>;
    _delete_1(param: WalletsApiDelete0Request, options?: Configuration): Promise<IWallet>;
    create(param?: WalletsApiCreateRequest, options?: Configuration): Promise<IWallet>;
    create_2(param?: WalletsApiCreate0Request, options?: Configuration): Promise<IWallet>;
    list(param?: WalletsApiListRequest, options?: Configuration): Promise<WalletListResponse>;
    list_3(param?: WalletsApiList0Request, options?: Configuration): Promise<WalletListResponse>;
    retrieve(param: WalletsApiRetrieveRequest, options?: Configuration): Promise<IWallet>;
    retrieve_4(param: WalletsApiRetrieve0Request, options?: Configuration): Promise<IWallet>;
    update(param: WalletsApiUpdateRequest, options?: Configuration): Promise<IWallet>;
    update_5(param: WalletsApiUpdate0Request, options?: Configuration): Promise<IWallet>;
}
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor } from "../apis/WebhooksApi";
export interface WebhooksApiDeleteRequest {
    id: string;
    pluto_account?: string;
}
export interface WebhooksApiDelete0Request {
    id: string;
    pluto_account?: string;
}
export interface WebhooksApiCreateRequest {
    pluto_account?: string;
    webhook_create_request?: WebhookCreateRequest;
}
export interface WebhooksApiCreate0Request {
    pluto_account?: string;
    webhook_create_request?: WebhookCreateRequest;
}
export interface WebhooksApiListRequest {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface WebhooksApiList0Request {
    pluto_account?: string;
    limit?: number;
    page?: number;
    sort?: number;
    expand?: string;
}
export interface WebhooksApiRetrieveRequest {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface WebhooksApiRetrieve0Request {
    id: string;
    pluto_account?: string;
    expand?: string;
}
export interface WebhooksApiUpdateRequest {
    id: string;
    pluto_account?: string;
    webhook_update_request?: WebhookUpdateRequest;
}
export interface WebhooksApiUpdate0Request {
    id: string;
    pluto_account?: string;
    webhook_update_request?: WebhookUpdateRequest;
}
export declare class ObjectWebhooksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor);
    _delete(param: WebhooksApiDeleteRequest, options?: Configuration): Promise<IWebhook>;
    _delete_1(param: WebhooksApiDelete0Request, options?: Configuration): Promise<IWebhook>;
    create(param?: WebhooksApiCreateRequest, options?: Configuration): Promise<IWebhook>;
    create_2(param?: WebhooksApiCreate0Request, options?: Configuration): Promise<IWebhook>;
    list(param?: WebhooksApiListRequest, options?: Configuration): Promise<WebhookListResponse>;
    list_3(param?: WebhooksApiList0Request, options?: Configuration): Promise<WebhookListResponse>;
    retrieve(param: WebhooksApiRetrieveRequest, options?: Configuration): Promise<IWebhook>;
    retrieve_4(param: WebhooksApiRetrieve0Request, options?: Configuration): Promise<IWebhook>;
    update(param: WebhooksApiUpdateRequest, options?: Configuration): Promise<IWebhook>;
    update_5(param: WebhooksApiUpdate0Request, options?: Configuration): Promise<IWebhook>;
}
