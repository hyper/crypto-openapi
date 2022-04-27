"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseWebhooksApi = exports.PromiseWalletsApi = exports.PromiseProductsApi = exports.PromisePaymentsApi = exports.PromiseLogsApi = exports.PromiseInvoicesApi = exports.PromiseFeesApi = exports.PromiseDefaultApi = exports.PromiseCustomersApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseCustomersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }
    create(prismAccount, inlineObject, _options) {
        const result = this.api.create(prismAccount, inlineObject, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prismAccount, _options) {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }
    update(id, prismAccount, _options) {
        const result = this.api.update(id, prismAccount, _options);
        return result.toPromise();
    }
}
exports.PromiseCustomersApi = PromiseCustomersApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseDefaultApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    getInvoicesInvoiceIdPoll(id, prismAccount, expand, _options) {
        const result = this.api.getInvoicesInvoiceIdPoll(id, prismAccount, expand, _options);
        return result.toPromise();
    }
    getTransfers(limit, page, sort, expand, prismAccount, _options) {
        const result = this.api.getTransfers(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }
    getTransfersTransferId(id, prismAccount, expand, _options) {
        const result = this.api.getTransfersTransferId(id, prismAccount, expand, _options);
        return result.toPromise();
    }
    postTransfersId(id, prismAccount, inlineObject6, _options) {
        const result = this.api.postTransfersId(id, prismAccount, inlineObject6, _options);
        return result.toPromise();
    }
    wallets(prismAccount, limit, page, sort, expand, inlineObject3, _options) {
        const result = this.api.wallets(prismAccount, limit, page, sort, expand, inlineObject3, _options);
        return result.toPromise();
    }
    walletsId(id, prismAccount, _options) {
        const result = this.api.walletsId(id, prismAccount, _options);
        return result.toPromise();
    }
    walletsId_1(id, prismAccount, _options) {
        const result = this.api.walletsId_1(id, prismAccount, _options);
        return result.toPromise();
    }
    walletsPayoutWalletId(id, prismAccount, expand, _options) {
        const result = this.api.walletsPayoutWalletId(id, prismAccount, expand, _options);
        return result.toPromise();
    }
    wallets_2(prismAccount, inlineObject4, _options) {
        const result = this.api.wallets_2(prismAccount, inlineObject4, _options);
        return result.toPromise();
    }
}
exports.PromiseDefaultApi = PromiseDefaultApi;
const ObservableAPI_3 = require("./ObservableAPI");
class PromiseFeesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableFeesApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, prismAccount, _options) {
        const result = this.api._delete(id, prismAccount, _options);
        return result.toPromise();
    }
    create(prismAccount, inlineObject1, _options) {
        const result = this.api.create(prismAccount, inlineObject1, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prismAccount, _options) {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }
}
exports.PromiseFeesApi = PromiseFeesApi;
const ObservableAPI_4 = require("./ObservableAPI");
class PromiseInvoicesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }
    create(prismAccount, inlineObject2, _options) {
        const result = this.api.create(prismAccount, inlineObject2, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prismAccount, _options) {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }
    update(id, prismAccount, _options) {
        const result = this.api.update(id, prismAccount, _options);
        return result.toPromise();
    }
}
exports.PromiseInvoicesApi = PromiseInvoicesApi;
const ObservableAPI_5 = require("./ObservableAPI");
class PromiseLogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prismAccount, _options) {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }
}
exports.PromiseLogsApi = PromiseLogsApi;
const ObservableAPI_6 = require("./ObservableAPI");
class PromisePaymentsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prismAccount, _options) {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }
}
exports.PromisePaymentsApi = PromisePaymentsApi;
const ObservableAPI_7 = require("./ObservableAPI");
class PromiseProductsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, prismAccount, _options) {
        const result = this.api._delete(id, prismAccount, _options);
        return result.toPromise();
    }
    create(prismAccount, inlineObject5, _options) {
        const result = this.api.create(prismAccount, inlineObject5, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prismAccount, _options) {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }
    update(id, prismAccount, _options) {
        const result = this.api.update(id, prismAccount, _options);
        return result.toPromise();
    }
}
exports.PromiseProductsApi = PromiseProductsApi;
const ObservableAPI_8 = require("./ObservableAPI");
class PromiseWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, prismAccount, expand, _options) {
        const result = this.api._delete(id, prismAccount, expand, _options);
        return result.toPromise();
    }
    create(prismAccount, inlineObject7, _options) {
        const result = this.api.create(prismAccount, inlineObject7, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prismAccount, _options) {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }
    update(id, prismAccount, _options) {
        const result = this.api.update(id, prismAccount, _options);
        return result.toPromise();
    }
}
exports.PromiseWalletsApi = PromiseWalletsApi;
const ObservableAPI_9 = require("./ObservableAPI");
class PromiseWebhooksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, prismAccount, _options) {
        const result = this.api._delete(id, prismAccount, _options);
        return result.toPromise();
    }
    create(prismAccount, inlineObject8, _options) {
        const result = this.api.create(prismAccount, inlineObject8, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prismAccount, _options) {
        const result = this.api.retrieve(id, expand, prismAccount, _options);
        return result.toPromise();
    }
    update(id, prismAccount, _options) {
        const result = this.api.update(id, prismAccount, _options);
        return result.toPromise();
    }
}
exports.PromiseWebhooksApi = PromiseWebhooksApi;
//# sourceMappingURL=PromiseAPI.js.map