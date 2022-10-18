"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectWebhooksApi = exports.ObjectWalletsApi = exports.ObjectTransfersApi = exports.ObjectSubscriptionsApi = exports.ObjectProductsApi = exports.ObjectPricesApi = exports.ObjectPayoutWalletsApi = exports.ObjectPaymentLinksApi = exports.ObjectPaymentIntentsApi = exports.ObjectLogsApi = exports.ObjectInvoicesApi = exports.ObjectFeesApi = exports.ObjectCustomersApi = exports.ObjectCheckoutsApi = exports.ObjectAccountsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class ObjectAccountsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }
    connect(param, options) {
        return this.api.connect(param.id, param.pluto_account, param.account_connect_request, options).toPromise();
    }
    connect_1(param, options) {
        return this.api.connect_1(param.id, param.pluto_account, param.account_connect_request, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.account_create_request, options).toPromise();
    }
    create_2(param = {}, options) {
        return this.api.create_2(param.pluto_account, param.account_create_request, options).toPromise();
    }
    dashboardAccess(param, options) {
        return this.api.dashboardAccess(param.id, param.pluto_account, param.expand, param.account_dashboard_access_request, options).toPromise();
    }
    dashboardAccess_3(param, options) {
        return this.api.dashboardAccess_3(param.id, param.pluto_account, param.expand, param.account_dashboard_access_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    list_4(param = {}, options) {
        return this.api.list_4(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    patch(param, options) {
        return this.api.patch(param.id, param.pluto_account, param.account_update_request, options).toPromise();
    }
    patch_5(param, options) {
        return this.api.patch_5(param.id, param.pluto_account, param.account_update_request, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_6(param, options) {
        return this.api.retrieve_6(param.id, param.pluto_account, param.expand, options).toPromise();
    }
}
exports.ObjectAccountsApi = ObjectAccountsApi;
const ObservableAPI_2 = require("./ObservableAPI");
class ObjectCheckoutsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableCheckoutsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.pluto_account, options).toPromise();
    }
    _delete_1(param, options) {
        return this.api._delete_1(param.id, param.pluto_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.checkout_create_request, options).toPromise();
    }
    create_2(param = {}, options) {
        return this.api.create_2(param.pluto_account, param.checkout_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    list_3(param = {}, options) {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_4(param, options) {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand, options).toPromise();
    }
}
exports.ObjectCheckoutsApi = ObjectCheckoutsApi;
const ObservableAPI_3 = require("./ObservableAPI");
class ObjectCustomersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.customer_create_request, options).toPromise();
    }
    create_1(param = {}, options) {
        return this.api.create_1(param.pluto_account, param.customer_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, param.email, options).toPromise();
    }
    list_2(param = {}, options) {
        return this.api.list_2(param.pluto_account, param.limit, param.page, param.sort, param.expand, param.email, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_3(param, options) {
        return this.api.retrieve_3(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.pluto_account, param.customer_update_request, options).toPromise();
    }
    update_4(param, options) {
        return this.api.update_4(param.id, param.pluto_account, param.customer_update_request, options).toPromise();
    }
}
exports.ObjectCustomersApi = ObjectCustomersApi;
const ObservableAPI_4 = require("./ObservableAPI");
class ObjectFeesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableFeesApi(configuration, requestFactory, responseProcessor);
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.fee_create_request, options).toPromise();
    }
    create_1(param = {}, options) {
        return this.api.create_1(param.pluto_account, param.fee_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    list_2(param = {}, options) {
        return this.api.list_2(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_3(param, options) {
        return this.api.retrieve_3(param.id, param.pluto_account, param.expand, options).toPromise();
    }
}
exports.ObjectFeesApi = ObjectFeesApi;
const ObservableAPI_5 = require("./ObservableAPI");
class ObjectInvoicesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.pluto_account, options).toPromise();
    }
    _delete_1(param, options) {
        return this.api._delete_1(param.id, param.pluto_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.invoice_create_request, options).toPromise();
    }
    create_2(param = {}, options) {
        return this.api.create_2(param.pluto_account, param.invoice_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    list_3(param = {}, options) {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    pay(param, options) {
        return this.api.pay(param.id, param.pluto_account, options).toPromise();
    }
    pay_4(param, options) {
        return this.api.pay_4(param.id, param.pluto_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_5(param, options) {
        return this.api.retrieve_5(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.pluto_account, param.invoice_update_request, options).toPromise();
    }
    update_6(param, options) {
        return this.api.update_6(param.id, param.pluto_account, param.invoice_update_request, options).toPromise();
    }
}
exports.ObjectInvoicesApi = ObjectInvoicesApi;
const ObservableAPI_6 = require("./ObservableAPI");
class ObjectLogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, options).toPromise();
    }
    list_1(param = {}, options) {
        return this.api.list_1(param.pluto_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_2(param, options) {
        return this.api.retrieve_2(param.id, param.pluto_account, param.expand, options).toPromise();
    }
}
exports.ObjectLogsApi = ObjectLogsApi;
const ObservableAPI_7 = require("./ObservableAPI");
class ObjectPaymentIntentsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservablePaymentIntentsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.pluto_account, options).toPromise();
    }
    _delete_1(param, options) {
        return this.api._delete_1(param.id, param.pluto_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.payment_intent_create_request, options).toPromise();
    }
    create_2(param = {}, options) {
        return this.api.create_2(param.pluto_account, param.payment_intent_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, param.status, param.customer, options).toPromise();
    }
    list_3(param = {}, options) {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand, param.status, param.customer, options).toPromise();
    }
    poll(param, options) {
        return this.api.poll(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    poll_4(param, options) {
        return this.api.poll_4(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_5(param, options) {
        return this.api.retrieve_5(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    sendReceipt(param, options) {
        return this.api.sendReceipt(param.id, param.pluto_account, options).toPromise();
    }
    sendReceipt_6(param, options) {
        return this.api.sendReceipt_6(param.id, param.pluto_account, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.pluto_account, param.payment_intent_update_request, options).toPromise();
    }
    update_7(param, options) {
        return this.api.update_7(param.id, param.pluto_account, param.payment_intent_update_request, options).toPromise();
    }
}
exports.ObjectPaymentIntentsApi = ObjectPaymentIntentsApi;
const ObservableAPI_8 = require("./ObservableAPI");
class ObjectPaymentLinksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservablePaymentLinksApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.pluto_account, options).toPromise();
    }
    _delete_1(param, options) {
        return this.api._delete_1(param.id, param.pluto_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.payment_link_create_request, options).toPromise();
    }
    create_2(param = {}, options) {
        return this.api.create_2(param.pluto_account, param.payment_link_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    list_3(param = {}, options) {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_4(param, options) {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.pluto_account, param.payment_link_update_request, options).toPromise();
    }
    update_5(param, options) {
        return this.api.update_5(param.id, param.pluto_account, param.payment_link_update_request, options).toPromise();
    }
}
exports.ObjectPaymentLinksApi = ObjectPaymentLinksApi;
const ObservableAPI_9 = require("./ObservableAPI");
class ObjectPayoutWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservablePayoutWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.pluto_account, options).toPromise();
    }
    _delete_1(param, options) {
        return this.api._delete_1(param.id, param.pluto_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.payout_wallet_create_request, options).toPromise();
    }
    create_2(param = {}, options) {
        return this.api.create_2(param.pluto_account, param.payout_wallet_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    list_3(param = {}, options) {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_4(param, options) {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.pluto_account, param.payout_wallet_update_request, options).toPromise();
    }
    update_5(param, options) {
        return this.api.update_5(param.id, param.pluto_account, param.payout_wallet_update_request, options).toPromise();
    }
}
exports.ObjectPayoutWalletsApi = ObjectPayoutWalletsApi;
const ObservableAPI_10 = require("./ObservableAPI");
class ObjectPricesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservablePricesApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.pluto_account, options).toPromise();
    }
    _delete_1(param, options) {
        return this.api._delete_1(param.id, param.pluto_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.price_create_request, options).toPromise();
    }
    create_2(param = {}, options) {
        return this.api.create_2(param.pluto_account, param.price_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    list_3(param = {}, options) {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_4(param, options) {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.pluto_account, param.price_update_request, options).toPromise();
    }
    update_5(param, options) {
        return this.api.update_5(param.id, param.pluto_account, param.price_update_request, options).toPromise();
    }
}
exports.ObjectPricesApi = ObjectPricesApi;
const ObservableAPI_11 = require("./ObservableAPI");
class ObjectProductsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.pluto_account, options).toPromise();
    }
    _delete_1(param, options) {
        return this.api._delete_1(param.id, param.pluto_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.product_create_request, options).toPromise();
    }
    create_2(param = {}, options) {
        return this.api.create_2(param.pluto_account, param.product_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    list_3(param = {}, options) {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_4(param, options) {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.pluto_account, param.product_update_request, options).toPromise();
    }
    update_5(param, options) {
        return this.api.update_5(param.id, param.pluto_account, param.product_update_request, options).toPromise();
    }
}
exports.ObjectProductsApi = ObjectProductsApi;
const ObservableAPI_12 = require("./ObservableAPI");
class ObjectSubscriptionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.pluto_account, options).toPromise();
    }
    _delete_1(param, options) {
        return this.api._delete_1(param.id, param.pluto_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.subscription_create_request, options).toPromise();
    }
    create_2(param = {}, options) {
        return this.api.create_2(param.pluto_account, param.subscription_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    list_3(param = {}, options) {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_4(param, options) {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.pluto_account, param.subscription_update_request, options).toPromise();
    }
    update_5(param, options) {
        return this.api.update_5(param.id, param.pluto_account, param.subscription_update_request, options).toPromise();
    }
}
exports.ObjectSubscriptionsApi = ObjectSubscriptionsApi;
const ObservableAPI_13 = require("./ObservableAPI");
class ObjectTransfersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableTransfersApi(configuration, requestFactory, responseProcessor);
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.transfer_create_request, options).toPromise();
    }
    create_1(param = {}, options) {
        return this.api.create_1(param.pluto_account, param.transfer_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    list_2(param = {}, options) {
        return this.api.list_2(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_3(param, options) {
        return this.api.retrieve_3(param.id, param.pluto_account, param.expand, options).toPromise();
    }
}
exports.ObjectTransfersApi = ObjectTransfersApi;
const ObservableAPI_14 = require("./ObservableAPI");
class ObjectWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.pluto_account, options).toPromise();
    }
    _delete_1(param, options) {
        return this.api._delete_1(param.id, param.pluto_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.wallet_create_request, options).toPromise();
    }
    create_2(param = {}, options) {
        return this.api.create_2(param.pluto_account, param.wallet_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    list_3(param = {}, options) {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_4(param, options) {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.pluto_account, param.wallet_update_request, options).toPromise();
    }
    update_5(param, options) {
        return this.api.update_5(param.id, param.pluto_account, param.wallet_update_request, options).toPromise();
    }
}
exports.ObjectWalletsApi = ObjectWalletsApi;
const ObservableAPI_15 = require("./ObservableAPI");
class ObjectWebhooksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.pluto_account, options).toPromise();
    }
    _delete_1(param, options) {
        return this.api._delete_1(param.id, param.pluto_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.pluto_account, param.webhook_create_request, options).toPromise();
    }
    create_2(param = {}, options) {
        return this.api.create_2(param.pluto_account, param.webhook_create_request, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    list_3(param = {}, options) {
        return this.api.list_3(param.pluto_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    retrieve_4(param, options) {
        return this.api.retrieve_4(param.id, param.pluto_account, param.expand, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.pluto_account, param.webhook_update_request, options).toPromise();
    }
    update_5(param, options) {
        return this.api.update_5(param.id, param.pluto_account, param.webhook_update_request, options).toPromise();
    }
}
exports.ObjectWebhooksApi = ObjectWebhooksApi;
//# sourceMappingURL=ObjectParamAPI.js.map