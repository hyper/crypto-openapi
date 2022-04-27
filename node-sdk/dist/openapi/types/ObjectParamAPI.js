"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectWebhooksApi = exports.ObjectWalletsApi = exports.ObjectProductsApi = exports.ObjectPaymentsApi = exports.ObjectLogsApi = exports.ObjectInvoicesApi = exports.ObjectFeesApi = exports.ObjectDefaultApi = exports.ObjectCustomersApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class ObjectCustomersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }
    create(param = {}, options) {
        return this.api.create(param.prismAccount, param.inlineObject, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prismAccount, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prismAccount, options).toPromise();
    }
}
exports.ObjectCustomersApi = ObjectCustomersApi;
const ObservableAPI_2 = require("./ObservableAPI");
class ObjectDefaultApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    getInvoicesInvoiceIdPoll(param, options) {
        return this.api.getInvoicesInvoiceIdPoll(param.id, param.prismAccount, param.expand, options).toPromise();
    }
    getTransfers(param = {}, options) {
        return this.api.getTransfers(param.limit, param.page, param.sort, param.expand, param.prismAccount, options).toPromise();
    }
    getTransfersTransferId(param, options) {
        return this.api.getTransfersTransferId(param.id, param.prismAccount, param.expand, options).toPromise();
    }
    postTransfersId(param, options) {
        return this.api.postTransfersId(param.id, param.prismAccount, param.inlineObject6, options).toPromise();
    }
    wallets(param = {}, options) {
        return this.api.wallets(param.prismAccount, param.limit, param.page, param.sort, param.expand, param.inlineObject3, options).toPromise();
    }
    walletsId(param, options) {
        return this.api.walletsId(param.id, param.prismAccount, options).toPromise();
    }
    walletsId_1(param, options) {
        return this.api.walletsId_1(param.id, param.prismAccount, options).toPromise();
    }
    walletsPayoutWalletId(param, options) {
        return this.api.walletsPayoutWalletId(param.id, param.prismAccount, param.expand, options).toPromise();
    }
    wallets_2(param = {}, options) {
        return this.api.wallets_2(param.prismAccount, param.inlineObject4, options).toPromise();
    }
}
exports.ObjectDefaultApi = ObjectDefaultApi;
const ObservableAPI_3 = require("./ObservableAPI");
class ObjectFeesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableFeesApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.prismAccount, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prismAccount, param.inlineObject1, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prismAccount, options).toPromise();
    }
}
exports.ObjectFeesApi = ObjectFeesApi;
const ObservableAPI_4 = require("./ObservableAPI");
class ObjectInvoicesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }
    create(param = {}, options) {
        return this.api.create(param.prismAccount, param.inlineObject2, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prismAccount, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prismAccount, options).toPromise();
    }
}
exports.ObjectInvoicesApi = ObjectInvoicesApi;
const ObservableAPI_5 = require("./ObservableAPI");
class ObjectLogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prismAccount, options).toPromise();
    }
}
exports.ObjectLogsApi = ObjectLogsApi;
const ObservableAPI_6 = require("./ObservableAPI");
class ObjectPaymentsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prismAccount, options).toPromise();
    }
}
exports.ObjectPaymentsApi = ObjectPaymentsApi;
const ObservableAPI_7 = require("./ObservableAPI");
class ObjectProductsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.prismAccount, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prismAccount, param.inlineObject5, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prismAccount, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prismAccount, options).toPromise();
    }
}
exports.ObjectProductsApi = ObjectProductsApi;
const ObservableAPI_8 = require("./ObservableAPI");
class ObjectWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.prismAccount, param.expand, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prismAccount, param.inlineObject7, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prismAccount, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prismAccount, options).toPromise();
    }
}
exports.ObjectWalletsApi = ObjectWalletsApi;
const ObservableAPI_9 = require("./ObservableAPI");
class ObjectWebhooksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.prismAccount, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prismAccount, param.inlineObject8, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prismAccount, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prismAccount, options).toPromise();
    }
}
exports.ObjectWebhooksApi = ObjectWebhooksApi;
//# sourceMappingURL=ObjectParamAPI.js.map