"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseWebhooksApi = exports.PromiseWalletsApi = exports.PromiseTransfersApi = exports.PromiseSubscriptionsApi = exports.PromiseProductsApi = exports.PromisePricesApi = exports.PromisePayoutWalletsApi = exports.PromisePaymentLinksApi = exports.PromisePaymentIntentsApi = exports.PromiseLogsApi = exports.PromiseInvoicesApi = exports.PromiseFeesApi = exports.PromiseCustomersApi = exports.PromiseCouponsApi = exports.PromiseCheckoutsApi = exports.PromiseAccountsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseAccountsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }
    connect(id, pluto_account, account_connect_request, _options) {
        const result = this.api.connect(id, pluto_account, account_connect_request, _options);
        return result.toPromise();
    }
    connect_1(id, pluto_account, account_connect_request, _options) {
        const result = this.api.connect_1(id, pluto_account, account_connect_request, _options);
        return result.toPromise();
    }
    create(pluto_account, account_create_request, _options) {
        const result = this.api.create(pluto_account, account_create_request, _options);
        return result.toPromise();
    }
    create_2(pluto_account, account_create_request, _options) {
        const result = this.api.create_2(pluto_account, account_create_request, _options);
        return result.toPromise();
    }
    dashboardAccess(id, pluto_account, expand, account_dashboard_access_request, _options) {
        const result = this.api.dashboardAccess(id, pluto_account, expand, account_dashboard_access_request, _options);
        return result.toPromise();
    }
    dashboardAccess_3(id, pluto_account, expand, account_dashboard_access_request, _options) {
        const result = this.api.dashboardAccess_3(id, pluto_account, expand, account_dashboard_access_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_4(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_4(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    patch(id, pluto_account, account_update_request, _options) {
        const result = this.api.patch(id, pluto_account, account_update_request, _options);
        return result.toPromise();
    }
    patch_5(id, pluto_account, account_update_request, _options) {
        const result = this.api.patch_5(id, pluto_account, account_update_request, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_6(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_6(id, pluto_account, expand, _options);
        return result.toPromise();
    }
}
exports.PromiseAccountsApi = PromiseAccountsApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseCheckoutsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableCheckoutsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    _delete_1(id, pluto_account, _options) {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, checkout_create_request, _options) {
        const result = this.api.create(pluto_account, checkout_create_request, _options);
        return result.toPromise();
    }
    create_2(pluto_account, checkout_create_request, _options) {
        const result = this.api.create_2(pluto_account, checkout_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_4(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }
}
exports.PromiseCheckoutsApi = PromiseCheckoutsApi;
const ObservableAPI_3 = require("./ObservableAPI");
class PromiseCouponsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableCouponsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    _delete_1(id, pluto_account, _options) {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, coupon_create_request, _options) {
        const result = this.api.create(pluto_account, coupon_create_request, _options);
        return result.toPromise();
    }
    create_2(pluto_account, coupon_create_request, _options) {
        const result = this.api.create_2(pluto_account, coupon_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_4(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    update(id, pluto_account, coupon_update_request, _options) {
        const result = this.api.update(id, pluto_account, coupon_update_request, _options);
        return result.toPromise();
    }
    update_5(id, pluto_account, coupon_update_request, _options) {
        const result = this.api.update_5(id, pluto_account, coupon_update_request, _options);
        return result.toPromise();
    }
}
exports.PromiseCouponsApi = PromiseCouponsApi;
const ObservableAPI_4 = require("./ObservableAPI");
class PromiseCustomersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }
    create(pluto_account, customer_create_request, _options) {
        const result = this.api.create(pluto_account, customer_create_request, _options);
        return result.toPromise();
    }
    create_1(pluto_account, customer_create_request, _options) {
        const result = this.api.create_1(pluto_account, customer_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, email, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, email, _options);
        return result.toPromise();
    }
    list_2(pluto_account, limit, page, sort, expand, email, _options) {
        const result = this.api.list_2(pluto_account, limit, page, sort, expand, email, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_3(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_3(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    update(id, pluto_account, customer_update_request, _options) {
        const result = this.api.update(id, pluto_account, customer_update_request, _options);
        return result.toPromise();
    }
    update_4(id, pluto_account, customer_update_request, _options) {
        const result = this.api.update_4(id, pluto_account, customer_update_request, _options);
        return result.toPromise();
    }
}
exports.PromiseCustomersApi = PromiseCustomersApi;
const ObservableAPI_5 = require("./ObservableAPI");
class PromiseFeesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableFeesApi(configuration, requestFactory, responseProcessor);
    }
    create(pluto_account, fee_create_request, _options) {
        const result = this.api.create(pluto_account, fee_create_request, _options);
        return result.toPromise();
    }
    create_1(pluto_account, fee_create_request, _options) {
        const result = this.api.create_1(pluto_account, fee_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_2(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_2(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_3(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_3(id, pluto_account, expand, _options);
        return result.toPromise();
    }
}
exports.PromiseFeesApi = PromiseFeesApi;
const ObservableAPI_6 = require("./ObservableAPI");
class PromiseInvoicesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    _delete_1(id, pluto_account, _options) {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, invoice_create_request, _options) {
        const result = this.api.create(pluto_account, invoice_create_request, _options);
        return result.toPromise();
    }
    create_2(pluto_account, invoice_create_request, _options) {
        const result = this.api.create_2(pluto_account, invoice_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    pay(id, pluto_account, invoice_pay_request, _options) {
        const result = this.api.pay(id, pluto_account, invoice_pay_request, _options);
        return result.toPromise();
    }
    pay_4(id, pluto_account, invoice_pay_request, _options) {
        const result = this.api.pay_4(id, pluto_account, invoice_pay_request, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_5(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_5(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    update(id, pluto_account, invoice_update_request, _options) {
        const result = this.api.update(id, pluto_account, invoice_update_request, _options);
        return result.toPromise();
    }
    update_6(id, pluto_account, invoice_update_request, _options) {
        const result = this.api.update_6(id, pluto_account, invoice_update_request, _options);
        return result.toPromise();
    }
}
exports.PromiseInvoicesApi = PromiseInvoicesApi;
const ObservableAPI_7 = require("./ObservableAPI");
class PromiseLogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }
    list(pluto_account, _options) {
        const result = this.api.list(pluto_account, _options);
        return result.toPromise();
    }
    list_1(pluto_account, _options) {
        const result = this.api.list_1(pluto_account, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_2(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_2(id, pluto_account, expand, _options);
        return result.toPromise();
    }
}
exports.PromiseLogsApi = PromiseLogsApi;
const ObservableAPI_8 = require("./ObservableAPI");
class PromisePaymentIntentsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservablePaymentIntentsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    _delete_1(id, pluto_account, _options) {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, payment_intent_create_request, _options) {
        const result = this.api.create(pluto_account, payment_intent_create_request, _options);
        return result.toPromise();
    }
    create_2(pluto_account, payment_intent_create_request, _options) {
        const result = this.api.create_2(pluto_account, payment_intent_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, status, customer, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, status, customer, _options);
        return result.toPromise();
    }
    list_3(pluto_account, limit, page, sort, expand, status, customer, _options) {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, status, customer, _options);
        return result.toPromise();
    }
    poll(id, pluto_account, expand, _options) {
        const result = this.api.poll(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    poll_4(id, pluto_account, expand, _options) {
        const result = this.api.poll_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_5(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_5(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    sendReceipt(id, pluto_account, _options) {
        const result = this.api.sendReceipt(id, pluto_account, _options);
        return result.toPromise();
    }
    sendReceipt_6(id, pluto_account, _options) {
        const result = this.api.sendReceipt_6(id, pluto_account, _options);
        return result.toPromise();
    }
    update(id, pluto_account, payment_intent_update_request, _options) {
        const result = this.api.update(id, pluto_account, payment_intent_update_request, _options);
        return result.toPromise();
    }
    update_7(id, pluto_account, payment_intent_update_request, _options) {
        const result = this.api.update_7(id, pluto_account, payment_intent_update_request, _options);
        return result.toPromise();
    }
}
exports.PromisePaymentIntentsApi = PromisePaymentIntentsApi;
const ObservableAPI_9 = require("./ObservableAPI");
class PromisePaymentLinksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservablePaymentLinksApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    _delete_1(id, pluto_account, _options) {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, payment_link_create_request, _options) {
        const result = this.api.create(pluto_account, payment_link_create_request, _options);
        return result.toPromise();
    }
    create_2(pluto_account, payment_link_create_request, _options) {
        const result = this.api.create_2(pluto_account, payment_link_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_4(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    update(id, pluto_account, payment_link_update_request, _options) {
        const result = this.api.update(id, pluto_account, payment_link_update_request, _options);
        return result.toPromise();
    }
    update_5(id, pluto_account, payment_link_update_request, _options) {
        const result = this.api.update_5(id, pluto_account, payment_link_update_request, _options);
        return result.toPromise();
    }
}
exports.PromisePaymentLinksApi = PromisePaymentLinksApi;
const ObservableAPI_10 = require("./ObservableAPI");
class PromisePayoutWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservablePayoutWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    _delete_1(id, pluto_account, _options) {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, payout_wallet_create_request, _options) {
        const result = this.api.create(pluto_account, payout_wallet_create_request, _options);
        return result.toPromise();
    }
    create_2(pluto_account, payout_wallet_create_request, _options) {
        const result = this.api.create_2(pluto_account, payout_wallet_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_4(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    update(id, pluto_account, payout_wallet_update_request, _options) {
        const result = this.api.update(id, pluto_account, payout_wallet_update_request, _options);
        return result.toPromise();
    }
    update_5(id, pluto_account, payout_wallet_update_request, _options) {
        const result = this.api.update_5(id, pluto_account, payout_wallet_update_request, _options);
        return result.toPromise();
    }
}
exports.PromisePayoutWalletsApi = PromisePayoutWalletsApi;
const ObservableAPI_11 = require("./ObservableAPI");
class PromisePricesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservablePricesApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    _delete_1(id, pluto_account, _options) {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, price_create_request, _options) {
        const result = this.api.create(pluto_account, price_create_request, _options);
        return result.toPromise();
    }
    create_2(pluto_account, price_create_request, _options) {
        const result = this.api.create_2(pluto_account, price_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_4(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    update(id, pluto_account, price_update_request, _options) {
        const result = this.api.update(id, pluto_account, price_update_request, _options);
        return result.toPromise();
    }
    update_5(id, pluto_account, price_update_request, _options) {
        const result = this.api.update_5(id, pluto_account, price_update_request, _options);
        return result.toPromise();
    }
}
exports.PromisePricesApi = PromisePricesApi;
const ObservableAPI_12 = require("./ObservableAPI");
class PromiseProductsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    _delete_1(id, pluto_account, _options) {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, product_create_request, _options) {
        const result = this.api.create(pluto_account, product_create_request, _options);
        return result.toPromise();
    }
    create_2(pluto_account, product_create_request, _options) {
        const result = this.api.create_2(pluto_account, product_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_4(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    update(id, pluto_account, product_update_request, _options) {
        const result = this.api.update(id, pluto_account, product_update_request, _options);
        return result.toPromise();
    }
    update_5(id, pluto_account, product_update_request, _options) {
        const result = this.api.update_5(id, pluto_account, product_update_request, _options);
        return result.toPromise();
    }
}
exports.PromiseProductsApi = PromiseProductsApi;
const ObservableAPI_13 = require("./ObservableAPI");
class PromiseSubscriptionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    _delete_1(id, pluto_account, _options) {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, subscription_create_request, _options) {
        const result = this.api.create(pluto_account, subscription_create_request, _options);
        return result.toPromise();
    }
    create_2(pluto_account, subscription_create_request, _options) {
        const result = this.api.create_2(pluto_account, subscription_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_4(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    update(id, pluto_account, subscription_update_request, _options) {
        const result = this.api.update(id, pluto_account, subscription_update_request, _options);
        return result.toPromise();
    }
    update_5(id, pluto_account, subscription_update_request, _options) {
        const result = this.api.update_5(id, pluto_account, subscription_update_request, _options);
        return result.toPromise();
    }
}
exports.PromiseSubscriptionsApi = PromiseSubscriptionsApi;
const ObservableAPI_14 = require("./ObservableAPI");
class PromiseTransfersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableTransfersApi(configuration, requestFactory, responseProcessor);
    }
    create(pluto_account, transfer_create_request, _options) {
        const result = this.api.create(pluto_account, transfer_create_request, _options);
        return result.toPromise();
    }
    create_1(pluto_account, transfer_create_request, _options) {
        const result = this.api.create_1(pluto_account, transfer_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_2(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_2(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_3(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_3(id, pluto_account, expand, _options);
        return result.toPromise();
    }
}
exports.PromiseTransfersApi = PromiseTransfersApi;
const ObservableAPI_15 = require("./ObservableAPI");
class PromiseWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    _delete_1(id, pluto_account, _options) {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, wallet_create_request, _options) {
        const result = this.api.create(pluto_account, wallet_create_request, _options);
        return result.toPromise();
    }
    create_2(pluto_account, wallet_create_request, _options) {
        const result = this.api.create_2(pluto_account, wallet_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_4(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    update(id, pluto_account, wallet_update_request, _options) {
        const result = this.api.update(id, pluto_account, wallet_update_request, _options);
        return result.toPromise();
    }
    update_5(id, pluto_account, wallet_update_request, _options) {
        const result = this.api.update_5(id, pluto_account, wallet_update_request, _options);
        return result.toPromise();
    }
}
exports.PromiseWalletsApi = PromiseWalletsApi;
const ObservableAPI_16 = require("./ObservableAPI");
class PromiseWebhooksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    _delete_1(id, pluto_account, _options) {
        const result = this.api._delete_1(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, webhook_create_request, _options) {
        const result = this.api.create(pluto_account, webhook_create_request, _options);
        return result.toPromise();
    }
    create_2(pluto_account, webhook_create_request, _options) {
        const result = this.api.create_2(pluto_account, webhook_create_request, _options);
        return result.toPromise();
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const result = this.api.list_3(pluto_account, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve_4(id, pluto_account, expand, _options) {
        const result = this.api.retrieve_4(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    update(id, pluto_account, webhook_update_request, _options) {
        const result = this.api.update(id, pluto_account, webhook_update_request, _options);
        return result.toPromise();
    }
    update_5(id, pluto_account, webhook_update_request, _options) {
        const result = this.api.update_5(id, pluto_account, webhook_update_request, _options);
        return result.toPromise();
    }
}
exports.PromiseWebhooksApi = PromiseWebhooksApi;
//# sourceMappingURL=PromiseAPI.js.map