"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseWebhooksApi = exports.PromiseWalletsApi = exports.PromiseTransfersApi = exports.PromiseProductsApi = exports.PromisePayoutWalletsApi = exports.PromisePaymentsApi = exports.PromiseLogsApi = exports.PromiseInvoicesApi = exports.PromiseFeesApi = exports.PromiseCustomersApi = void 0;
const ObservableAPI_1 = require("./ObservableAPI");
class PromiseCustomersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }
    create(prism_account, create_customer_body, _options) {
        const result = this.api.create(prism_account, create_customer_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prism_account, _options) {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prism_account, _options) {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }
    update(id, prism_account, update_customer_body, _options) {
        const result = this.api.update(id, prism_account, update_customer_body, _options);
        return result.toPromise();
    }
}
exports.PromiseCustomersApi = PromiseCustomersApi;
const ObservableAPI_2 = require("./ObservableAPI");
class PromiseFeesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableFeesApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, prism_account, _options) {
        const result = this.api._delete(id, prism_account, _options);
        return result.toPromise();
    }
    create(prism_account, create_fee_body, _options) {
        const result = this.api.create(prism_account, create_fee_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prism_account, _options) {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prism_account, _options) {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }
}
exports.PromiseFeesApi = PromiseFeesApi;
const ObservableAPI_3 = require("./ObservableAPI");
class PromiseInvoicesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }
    create(prism_account, create_invoice_body, _options) {
        const result = this.api.create(prism_account, create_invoice_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prism_account, _options) {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }
    poll(id, expand, prism_account, _options) {
        const result = this.api.poll(id, expand, prism_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prism_account, _options) {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }
    update(id, prism_account, update_invoice_body, _options) {
        const result = this.api.update(id, prism_account, update_invoice_body, _options);
        return result.toPromise();
    }
}
exports.PromiseInvoicesApi = PromiseInvoicesApi;
const ObservableAPI_4 = require("./ObservableAPI");
class PromiseLogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }
    list(limit, page, sort, expand, prism_account, _options) {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prism_account, _options) {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }
}
exports.PromiseLogsApi = PromiseLogsApi;
const ObservableAPI_5 = require("./ObservableAPI");
class PromisePaymentsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservablePaymentsApi(configuration, requestFactory, responseProcessor);
    }
    list(limit, page, sort, expand, prism_account, _options) {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prism_account, _options) {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }
}
exports.PromisePaymentsApi = PromisePaymentsApi;
const ObservableAPI_6 = require("./ObservableAPI");
class PromisePayoutWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservablePayoutWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, prism_account, _options) {
        const result = this.api._delete(id, prism_account, _options);
        return result.toPromise();
    }
    create(prism_account, create_payout_wallet_body, _options) {
        const result = this.api.create(prism_account, create_payout_wallet_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prism_account, _options) {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prism_account, _options) {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }
    update(id, prism_account, update_payout_wallet_body, _options) {
        const result = this.api.update(id, prism_account, update_payout_wallet_body, _options);
        return result.toPromise();
    }
}
exports.PromisePayoutWalletsApi = PromisePayoutWalletsApi;
const ObservableAPI_7 = require("./ObservableAPI");
class PromiseProductsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, prism_account, _options) {
        const result = this.api._delete(id, prism_account, _options);
        return result.toPromise();
    }
    create(prism_account, create_product_body, _options) {
        const result = this.api.create(prism_account, create_product_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prism_account, _options) {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prism_account, _options) {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }
    update(id, prism_account, update_product_body, _options) {
        const result = this.api.update(id, prism_account, update_product_body, _options);
        return result.toPromise();
    }
}
exports.PromiseProductsApi = PromiseProductsApi;
const ObservableAPI_8 = require("./ObservableAPI");
class PromiseTransfersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableTransfersApi(configuration, requestFactory, responseProcessor);
    }
    create(prism_account, create_transfer_body, _options) {
        const result = this.api.create(prism_account, create_transfer_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prism_account, _options) {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prism_account, _options) {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }
}
exports.PromiseTransfersApi = PromiseTransfersApi;
const ObservableAPI_9 = require("./ObservableAPI");
class PromiseWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableWalletsApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, expand, prism_account, _options) {
        const result = this.api._delete(id, expand, prism_account, _options);
        return result.toPromise();
    }
    create(prism_account, create_wallet_body, _options) {
        const result = this.api.create(prism_account, create_wallet_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prism_account, _options) {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prism_account, _options) {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }
    update(id, prism_account, update_wallet_body, _options) {
        const result = this.api.update(id, prism_account, update_wallet_body, _options);
        return result.toPromise();
    }
}
exports.PromiseWalletsApi = PromiseWalletsApi;
const ObservableAPI_10 = require("./ObservableAPI");
class PromiseWebhooksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }
    _delete(id, prism_account, _options) {
        const result = this.api._delete(id, prism_account, _options);
        return result.toPromise();
    }
    create(prism_account, create_webhook_body, _options) {
        const result = this.api.create(prism_account, create_webhook_body, _options);
        return result.toPromise();
    }
    list(limit, page, sort, expand, prism_account, _options) {
        const result = this.api.list(limit, page, sort, expand, prism_account, _options);
        return result.toPromise();
    }
    retrieve(id, expand, prism_account, _options) {
        const result = this.api.retrieve(id, expand, prism_account, _options);
        return result.toPromise();
    }
    update(id, prism_account, update_webhook_body, _options) {
        const result = this.api.update(id, prism_account, update_webhook_body, _options);
        return result.toPromise();
    }
}
exports.PromiseWebhooksApi = PromiseWebhooksApi;
//# sourceMappingURL=PromiseAPI.js.map