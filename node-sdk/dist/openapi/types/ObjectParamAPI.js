"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectWebhooksApi = exports.ObjectWalletsApi = exports.ObjectTransfersApi = exports.ObjectProductsApi = exports.ObjectPayoutWalletsApi = exports.ObjectPaymentsApi = exports.ObjectLogsApi = exports.ObjectInvoicesApi = exports.ObjectFeesApi = exports.ObjectCustomersApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class ObjectCustomersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCustomersApi(configuration, requestFactory, responseProcessor);
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
const ObservableAPI_2 = require("./ObservableAPI");
class ObjectFeesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableFeesApi(configuration, requestFactory, responseProcessor);
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
const ObservableAPI_3 = require("./ObservableAPI");
class ObjectInvoicesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.create_invoice_body, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    poll(param, options) {
        return this.api.poll(param.id, param.prism_account, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prism_account, param.update_invoice_body, options).toPromise();
    }
}
exports.ObjectInvoicesApi = ObjectInvoicesApi;
const ObservableAPI_4 = require("./ObservableAPI");
class ObjectLogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
}
exports.ObjectLogsApi = ObjectLogsApi;
const ObservableAPI_5 = require("./ObservableAPI");
class ObjectPaymentsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.expand, param.prism_account, options).toPromise();
    }
}
exports.ObjectPaymentsApi = ObjectPaymentsApi;
const ObservableAPI_6 = require("./ObservableAPI");
class ObjectPayoutWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservablePayoutWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.prism_account, options).toPromise();
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.create_payout_wallet_body, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.prism_account, param.limit, param.page, param.sort, param.expand, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.prism_account, param.expand, options).toPromise();
    }
    update(param, options) {
        return this.api.update(param.id, param.prism_account, param.update_payout_wallet_body, options).toPromise();
    }
}
exports.ObjectPayoutWalletsApi = ObjectPayoutWalletsApi;
const ObservableAPI_7 = require("./ObservableAPI");
class ObjectProductsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableProductsApi(configuration, requestFactory, responseProcessor);
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
const ObservableAPI_8 = require("./ObservableAPI");
class ObjectTransfersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableTransfersApi(configuration, requestFactory, responseProcessor);
    }
    create(param = {}, options) {
        return this.api.create(param.prism_account, param.create_transfer_body, options).toPromise();
    }
    list(param = {}, options) {
        return this.api.list(param.limit, param.page, param.sort, param.expand, param.prism_account, options).toPromise();
    }
    retrieve(param, options) {
        return this.api.retrieve(param.id, param.prism_account, param.expand, options).toPromise();
    }
}
exports.ObjectTransfersApi = ObjectTransfersApi;
const ObservableAPI_9 = require("./ObservableAPI");
class ObjectWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(param, options) {
        return this.api._delete(param.id, param.prism_account, param.expand, options).toPromise();
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
const ObservableAPI_10 = require("./ObservableAPI");
class ObjectWebhooksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
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