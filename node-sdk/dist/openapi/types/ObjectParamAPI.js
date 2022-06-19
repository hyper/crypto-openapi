"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectWebhooksApi = exports.ObjectWalletsApi = exports.ObjectTransfersApi = exports.ObjectSubscriptionsApi = exports.ObjectProductsApi = exports.ObjectPricesApi = exports.ObjectPayoutWalletsApi = exports.ObjectPaymentIntentsApi = exports.ObjectLogsApi = exports.ObjectInvoicesApi = exports.ObjectFeesApi = exports.ObjectCustomersApi = exports.ObjectAccountsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class ObjectAccountsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.create_account_body, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prism_account, param.update_account_body, options).toPromise();
    }
}
exports.ObjectAccountsApi = ObjectAccountsApi;
const ObservableAPI_2 = require("./ObservableAPI");
class ObjectCustomersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.create_customer_body, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prism_account, param.update_customer_body, options).toPromise();
    }
}
exports.ObjectCustomersApi = ObjectCustomersApi;
const ObservableAPI_3 = require("./ObservableAPI");
class ObjectFeesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableFeesApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.prism_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.create_fee_body, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
}
exports.ObjectFeesApi = ObjectFeesApi;
const ObservableAPI_4 = require("./ObservableAPI");
class ObjectInvoicesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.invoice, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prism_account, param.update_invoice_body, options).toPromise();
    }
}
exports.ObjectInvoicesApi = ObjectInvoicesApi;
const ObservableAPI_5 = require("./ObservableAPI");
class ObjectLogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
}
exports.ObjectLogsApi = ObjectLogsApi;
const ObservableAPI_6 = require("./ObservableAPI");
class ObjectPaymentIntentsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservablePaymentIntentsApi(configuration, requestFactory, responseProcessor);
    }
    cancel(param, options) {
        return this.api.cancel(param.id, param.prism_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.payment_intent, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.prism_account, param.expand, param.limit, param.page, param.sort, param.status, param.customer, options).toPromise();
    }
    poll(param, options) {
        return this.api.poll(param.id, param.prism_account, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.prism_account, param.expand, options).toPromise();
    }
    updateHash(param, options) {
        return this.api.updateHash(param.id, param.prism_account, param.body, options).toPromise();
    }
}
exports.ObjectPaymentIntentsApi = ObjectPaymentIntentsApi;
const ObservableAPI_7 = require("./ObservableAPI");
class ObjectPayoutWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservablePayoutWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.prism_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.create_payout_wallet_body, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prism_account, param.payout_wallet, options).toPromise();
    }
}
exports.ObjectPayoutWalletsApi = ObjectPayoutWalletsApi;
const ObservableAPI_8 = require("./ObservableAPI");
class ObjectPricesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservablePricesApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.prism_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.price, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.prism_account, param.expand, param.limit, param.page, param.sort, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.prism_account, param.expand, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prism_account, param.update_price_body, options).toPromise();
    }
}
exports.ObjectPricesApi = ObjectPricesApi;
const ObservableAPI_9 = require("./ObservableAPI");
class ObjectProductsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.prism_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.create_product_body, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prism_account, param.update_product_body, options).toPromise();
    }
}
exports.ObjectProductsApi = ObjectProductsApi;
const ObservableAPI_10 = require("./ObservableAPI");
class ObjectSubscriptionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }
    cancel(param, options) {
        return this.api.cancel(param.id, param.prism_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.subscription, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.expand, param.limit, param.page, param.sort, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prism_account, param.subscription, options).toPromise();
    }
}
exports.ObjectSubscriptionsApi = ObjectSubscriptionsApi;
const ObservableAPI_11 = require("./ObservableAPI");
class ObjectTransfersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableTransfersApi(configuration, requestFactory, responseProcessor);
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.create_transfer_body, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
}
exports.ObjectTransfersApi = ObjectTransfersApi;
const ObservableAPI_12 = require("./ObservableAPI");
class ObjectWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.expand, param.prism_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.create_wallet_body, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prism_account, param.update_wallet_body, options).toPromise();
    }
}
exports.ObjectWalletsApi = ObjectWalletsApi;
const ObservableAPI_13 = require("./ObservableAPI");
class ObjectWebhooksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.prism_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.create_webhook_body, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prism_account, param.update_webhook_body, options).toPromise();
    }
}
exports.ObjectWebhooksApi = ObjectWebhooksApi;
//# sourceMappingURL=ObjectParamAPI.js.map