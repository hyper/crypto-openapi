"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseWebhooksApi = exports.PromiseWalletsApi = exports.PromiseTransfersApi = exports.PromiseSubscriptionsApi = exports.PromiseProductsApi = exports.PromisePricesApi = exports.PromisePayoutWalletsApi = exports.PromisePaymentIntentsApi = exports.PromiseLogsApi = exports.PromiseInvoicesApi = exports.PromiseFeesApi = exports.PromiseCustomersApi = exports.PromiseAccountsApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseAccountsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }
    create(pluto_account, account, _options) {
        const result = this.api.create(pluto_account, account, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, pluto_account, _options) {
        const result = this.api.list(limit, page, sort, expand, pluto_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, pluto_account, _options) {
        const result = this.api.retrieve(id, expand, pluto_account, _options);
        return result.toPromise();
    }
    update(id, pluto_account, account, _options) {
        const result = this.api.update(id, pluto_account, account, _options);
        return result.toPromise();
    }
}
exports.PromiseAccountsApi = PromiseAccountsApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseCustomersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }
    create(pluto_account, create_customer_body, _options) {
        const result = this.api.create(pluto_account, create_customer_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, pluto_account, email, _options) {
        const result = this.api.list(limit, page, sort, expand, pluto_account, email, _options);
        return result.toPromise();
    }
    retrieve(id, expand, pluto_account, _options) {
        const result = this.api.retrieve(id, expand, pluto_account, _options);
        return result.toPromise();
    }
    update(id, pluto_account, update_customer_body, _options) {
        const result = this.api.update(id, pluto_account, update_customer_body, _options);
        return result.toPromise();
    }
}
exports.PromiseCustomersApi = PromiseCustomersApi;
const ObservableAPI_3 = require("./ObservableAPI");
class PromiseFeesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableFeesApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, create_fee_body, _options) {
        const result = this.api.create(pluto_account, create_fee_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, pluto_account, _options) {
        const result = this.api.list(limit, page, sort, expand, pluto_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, pluto_account, _options) {
        const result = this.api.retrieve(id, expand, pluto_account, _options);
        return result.toPromise();
    }
}
exports.PromiseFeesApi = PromiseFeesApi;
const ObservableAPI_4 = require("./ObservableAPI");
class PromiseInvoicesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }
    create(pluto_account, invoice, _options) {
        const result = this.api.create(pluto_account, invoice, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, pluto_account, _options) {
        const result = this.api.list(limit, page, sort, expand, pluto_account, _options);
        return result.toPromise();
    }
    pay(id, pluto_account, _options) {
        const result = this.api.pay(id, pluto_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, pluto_account, _options) {
        const result = this.api.retrieve(id, expand, pluto_account, _options);
        return result.toPromise();
    }
    update(id, pluto_account, invoice, _options) {
        const result = this.api.update(id, pluto_account, invoice, _options);
        return result.toPromise();
    }
}
exports.PromiseInvoicesApi = PromiseInvoicesApi;
const ObservableAPI_5 = require("./ObservableAPI");
class PromiseLogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }
    list(limit, page, sort, expand, pluto_account, _options) {
        const result = this.api.list(limit, page, sort, expand, pluto_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, pluto_account, _options) {
        const result = this.api.retrieve(id, expand, pluto_account, _options);
        return result.toPromise();
    }
}
exports.PromiseLogsApi = PromiseLogsApi;
const ObservableAPI_6 = require("./ObservableAPI");
class PromisePaymentIntentsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservablePaymentIntentsApi(configuration, requestFactory, responseProcessor);
    }
    cancel(id, pluto_account, _options) {
        const result = this.api.cancel(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, payment_intent, _options) {
        const result = this.api.create(pluto_account, payment_intent, _options);
        return result.toPromise();
    }
    list(pluto_account, expand, limit, page, sort, status, customer, _options) {
        const result = this.api.list(pluto_account, expand, limit, page, sort, status, customer, _options);
        return result.toPromise();
    }
    poll(id, pluto_account, expand, _options) {
        const result = this.api.poll(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    update(id, pluto_account, update_payment_intent_body, _options) {
        const result = this.api.update(id, pluto_account, update_payment_intent_body, _options);
        return result.toPromise();
    }
}
exports.PromisePaymentIntentsApi = PromisePaymentIntentsApi;
const ObservableAPI_7 = require("./ObservableAPI");
class PromisePayoutWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservablePayoutWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, create_payout_wallet_body, _options) {
        const result = this.api.create(pluto_account, create_payout_wallet_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, pluto_account, _options) {
        const result = this.api.list(limit, page, sort, expand, pluto_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, pluto_account, _options) {
        const result = this.api.retrieve(id, expand, pluto_account, _options);
        return result.toPromise();
    }
    update(id, pluto_account, payout_wallet, _options) {
        const result = this.api.update(id, pluto_account, payout_wallet, _options);
        return result.toPromise();
    }
}
exports.PromisePayoutWalletsApi = PromisePayoutWalletsApi;
const ObservableAPI_8 = require("./ObservableAPI");
class PromisePricesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservablePricesApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, price, _options) {
        const result = this.api.create(pluto_account, price, _options);
        return result.toPromise();
    }
    list(pluto_account, expand, limit, page, sort, _options) {
        const result = this.api.list(pluto_account, expand, limit, page, sort, _options);
        return result.toPromise();
    }
    retrieve(id, pluto_account, expand, _options) {
        const result = this.api.retrieve(id, pluto_account, expand, _options);
        return result.toPromise();
    }
    update(id, pluto_account, update_price_body, _options) {
        const result = this.api.update(id, pluto_account, update_price_body, _options);
        return result.toPromise();
    }
}
exports.PromisePricesApi = PromisePricesApi;
const ObservableAPI_9 = require("./ObservableAPI");
class PromiseProductsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, create_product_body, _options) {
        const result = this.api.create(pluto_account, create_product_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, pluto_account, _options) {
        const result = this.api.list(limit, page, sort, expand, pluto_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, pluto_account, _options) {
        const result = this.api.retrieve(id, expand, pluto_account, _options);
        return result.toPromise();
    }
    update(id, pluto_account, update_product_body, _options) {
        const result = this.api.update(id, pluto_account, update_product_body, _options);
        return result.toPromise();
    }
}
exports.PromiseProductsApi = PromiseProductsApi;
const ObservableAPI_10 = require("./ObservableAPI");
class PromiseSubscriptionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }
    cancel(id, pluto_account, _options) {
        const result = this.api.cancel(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, subscription, _options) {
        const result = this.api.create(pluto_account, subscription, _options);
        return result.toPromise();
    }
    list(expand, limit, page, sort, pluto_account, _options) {
        const result = this.api.list(expand, limit, page, sort, pluto_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, pluto_account, _options) {
        const result = this.api.retrieve(id, expand, pluto_account, _options);
        return result.toPromise();
    }
    update(id, pluto_account, subscription, _options) {
        const result = this.api.update(id, pluto_account, subscription, _options);
        return result.toPromise();
    }
}
exports.PromiseSubscriptionsApi = PromiseSubscriptionsApi;
const ObservableAPI_11 = require("./ObservableAPI");
class PromiseTransfersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableTransfersApi(configuration, requestFactory, responseProcessor);
    }
    create(pluto_account, create_transfer_body, _options) {
        const result = this.api.create(pluto_account, create_transfer_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, pluto_account, _options) {
        const result = this.api.list(limit, page, sort, expand, pluto_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, pluto_account, _options) {
        const result = this.api.retrieve(id, expand, pluto_account, _options);
        return result.toPromise();
    }
}
exports.PromiseTransfersApi = PromiseTransfersApi;
const ObservableAPI_12 = require("./ObservableAPI");
class PromiseWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, expand, pluto_account, _options) {
        const result = this.api._delete(id, expand, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, create_wallet_body, _options) {
        const result = this.api.create(pluto_account, create_wallet_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, pluto_account, _options) {
        const result = this.api.list(limit, page, sort, expand, pluto_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, pluto_account, _options) {
        const result = this.api.retrieve(id, expand, pluto_account, _options);
        return result.toPromise();
    }
    update(id, pluto_account, update_wallet_body, _options) {
        const result = this.api.update(id, pluto_account, update_wallet_body, _options);
        return result.toPromise();
    }
}
exports.PromiseWalletsApi = PromiseWalletsApi;
const ObservableAPI_13 = require("./ObservableAPI");
class PromiseWebhooksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, pluto_account, _options) {
        const result = this.api._delete(id, pluto_account, _options);
        return result.toPromise();
    }
    create(pluto_account, create_webhook_body, _options) {
        const result = this.api.create(pluto_account, create_webhook_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, pluto_account, _options) {
        const result = this.api.list(limit, page, sort, expand, pluto_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, pluto_account, _options) {
        const result = this.api.retrieve(id, expand, pluto_account, _options);
        return result.toPromise();
    }
    update(id, pluto_account, update_webhook_body, _options) {
        const result = this.api.update(id, pluto_account, update_webhook_body, _options);
        return result.toPromise();
    }
}
exports.PromiseWebhooksApi = PromiseWebhooksApi;
//# sourceMappingURL=PromiseAPI.js.map