"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseWebhooksApi = exports.PromiseWalletsApi = exports.PromiseProductsApi = exports.PromisePaymentsApi = exports.PromiseLogsApi = exports.PromiseInvoicesApi = exports.PromiseFeesApi = exports.PromiseCustomersApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseCustomersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }
    create(inlineObject, _options) {
        const result = this.api.create(inlineObject, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, _options) {
        const result = this.api.list(limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(customerId, _options) {
        const result = this.api.retrieve(customerId, _options);
        return result.toPromise();
    }
    update(customerId, _options) {
        const result = this.api.update(customerId, _options);
        return result.toPromise();
    }
}
exports.PromiseCustomersApi = PromiseCustomersApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseFeesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableFeesApi(configuration, requestFactory, responseProcessor);
    }
    _delete(feeId, _options) {
        const result = this.api._delete(feeId, _options);
        return result.toPromise();
    }
    create(inlineObject1, _options) {
        const result = this.api.create(inlineObject1, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, _options) {
        const result = this.api.list(limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(feeId, _options) {
        const result = this.api.retrieve(feeId, _options);
        return result.toPromise();
    }
}
exports.PromiseFeesApi = PromiseFeesApi;
const ObservableAPI_3 = require("./ObservableAPI");
class PromiseInvoicesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }
    create(inlineObject2, _options) {
        const result = this.api.create(inlineObject2, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, _options) {
        const result = this.api.list(limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(invoiceId, _options) {
        const result = this.api.retrieve(invoiceId, _options);
        return result.toPromise();
    }
    update(invoiceId, _options) {
        const result = this.api.update(invoiceId, _options);
        return result.toPromise();
    }
}
exports.PromiseInvoicesApi = PromiseInvoicesApi;
const ObservableAPI_4 = require("./ObservableAPI");
class PromiseLogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }
    list(limit, page, sort, expand, _options) {
        const result = this.api.list(limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(logId, _options) {
        const result = this.api.retrieve(logId, _options);
        return result.toPromise();
    }
}
exports.PromiseLogsApi = PromiseLogsApi;
const ObservableAPI_5 = require("./ObservableAPI");
class PromisePaymentsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }
    list(limit, page, sort, expand, _options) {
        const result = this.api.list(limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(paymentId, _options) {
        const result = this.api.retrieve(paymentId, _options);
        return result.toPromise();
    }
}
exports.PromisePaymentsApi = PromisePaymentsApi;
const ObservableAPI_6 = require("./ObservableAPI");
class PromiseProductsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(productId, _options) {
        const result = this.api._delete(productId, _options);
        return result.toPromise();
    }
    create(inlineObject3, _options) {
        const result = this.api.create(inlineObject3, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, _options) {
        const result = this.api.list(limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(productId, _options) {
        const result = this.api.retrieve(productId, _options);
        return result.toPromise();
    }
    update(productId, _options) {
        const result = this.api.update(productId, _options);
        return result.toPromise();
    }
}
exports.PromiseProductsApi = PromiseProductsApi;
const ObservableAPI_7 = require("./ObservableAPI");
class PromiseWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(walletId, _options) {
        const result = this.api._delete(walletId, _options);
        return result.toPromise();
    }
    create(inlineObject4, _options) {
        const result = this.api.create(inlineObject4, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, _options) {
        const result = this.api.list(limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(walletId, limit, page, sort, expand, _options) {
        const result = this.api.retrieve(walletId, limit, page, sort, expand, _options);
        return result.toPromise();
    }
    update(walletId, _options) {
        const result = this.api.update(walletId, _options);
        return result.toPromise();
    }
}
exports.PromiseWalletsApi = PromiseWalletsApi;
const ObservableAPI_8 = require("./ObservableAPI");
class PromiseWebhooksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }
    _delete(webhookId, _options) {
        const result = this.api._delete(webhookId, _options);
        return result.toPromise();
    }
    create(inlineObject5, _options) {
        const result = this.api.create(inlineObject5, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, _options) {
        const result = this.api.list(limit, page, sort, expand, _options);
        return result.toPromise();
    }
    retrieve(webhookId, _options) {
        const result = this.api.retrieve(webhookId, _options);
        return result.toPromise();
    }
    update(webhookId, _options) {
        const result = this.api.update(webhookId, _options);
        return result.toPromise();
    }
}
exports.PromiseWebhooksApi = PromiseWebhooksApi;
//# sourceMappingURL=PromiseAPI.js.map