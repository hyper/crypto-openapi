"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableWebhooksApi = exports.ObservableWalletsApi = exports.ObservableTransfersApi = exports.ObservableProductsApi = exports.ObservablePayoutWalletsApi = exports.ObservablePaymentsApi = exports.ObservableLogsApi = exports.ObservableInvoicesApi = exports.ObservableFeesApi = exports.ObservableCustomersApi = void 0;
const rxjsStub_1 = require("../rxjsStub");
const rxjsStub_2 = require("../rxjsStub");
const CustomersApi_1 = require("../apis/CustomersApi");
class ObservableCustomersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomersApi_1.CustomersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomersApi_1.CustomersApiResponseProcessor();
    }
    create(prismAccount, customerData, _options) {
        const requestContextPromise = this.requestFactory.create(prismAccount, customerData, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create(rsp)));
        }));
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list(rsp)));
        }));
    }
    retrieve(id, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve(rsp)));
        }));
    }
    update(id, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.update(id, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update(rsp)));
        }));
    }
}
exports.ObservableCustomersApi = ObservableCustomersApi;
const FeesApi_1 = require("../apis/FeesApi");
class ObservableFeesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FeesApi_1.FeesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FeesApi_1.FeesApiResponseProcessor();
    }
    _delete(id, prismAccount, _options) {
        const requestContextPromise = this.requestFactory._delete(id, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete(rsp)));
        }));
    }
    create(prismAccount, feeData, _options) {
        const requestContextPromise = this.requestFactory.create(prismAccount, feeData, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create(rsp)));
        }));
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list(rsp)));
        }));
    }
    retrieve(id, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve(rsp)));
        }));
    }
}
exports.ObservableFeesApi = ObservableFeesApi;
const InvoicesApi_1 = require("../apis/InvoicesApi");
class ObservableInvoicesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InvoicesApi_1.InvoicesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InvoicesApi_1.InvoicesApiResponseProcessor();
    }
    create(prismAccount, invoiceData, _options) {
        const requestContextPromise = this.requestFactory.create(prismAccount, invoiceData, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create(rsp)));
        }));
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list(rsp)));
        }));
    }
    poll(id, prismAccount, expand, _options) {
        const requestContextPromise = this.requestFactory.poll(id, prismAccount, expand, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.poll(rsp)));
        }));
    }
    retrieve(id, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve(rsp)));
        }));
    }
    update(id, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.update(id, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update(rsp)));
        }));
    }
}
exports.ObservableInvoicesApi = ObservableInvoicesApi;
const LogsApi_1 = require("../apis/LogsApi");
class ObservableLogsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LogsApi_1.LogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogsApi_1.LogsApiResponseProcessor();
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list(rsp)));
        }));
    }
    retrieve(id, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve(rsp)));
        }));
    }
}
exports.ObservableLogsApi = ObservableLogsApi;
const PaymentsApi_1 = require("../apis/PaymentsApi");
class ObservablePaymentsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentsApi_1.PaymentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentsApi_1.PaymentsApiResponseProcessor();
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list(rsp)));
        }));
    }
    retrieve(id, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve(rsp)));
        }));
    }
}
exports.ObservablePaymentsApi = ObservablePaymentsApi;
const PayoutWalletsApi_1 = require("../apis/PayoutWalletsApi");
class ObservablePayoutWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PayoutWalletsApi_1.PayoutWalletsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PayoutWalletsApi_1.PayoutWalletsApiResponseProcessor();
    }
    _delete(id, prismAccount, _options) {
        const requestContextPromise = this.requestFactory._delete(id, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete(rsp)));
        }));
    }
    create(prismAccount, payoutWalletData, _options) {
        const requestContextPromise = this.requestFactory.create(prismAccount, payoutWalletData, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create(rsp)));
        }));
    }
    list(prismAccount, limit, page, sort, expand, data, _options) {
        const requestContextPromise = this.requestFactory.list(prismAccount, limit, page, sort, expand, data, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list(rsp)));
        }));
    }
    retrieve(id, prismAccount, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, prismAccount, expand, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve(rsp)));
        }));
    }
    update(id, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.update(id, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update(rsp)));
        }));
    }
}
exports.ObservablePayoutWalletsApi = ObservablePayoutWalletsApi;
const ProductsApi_1 = require("../apis/ProductsApi");
class ObservableProductsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsApi_1.ProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsApi_1.ProductsApiResponseProcessor();
    }
    _delete(id, prismAccount, _options) {
        const requestContextPromise = this.requestFactory._delete(id, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete(rsp)));
        }));
    }
    create(prismAccount, productData, _options) {
        const requestContextPromise = this.requestFactory.create(prismAccount, productData, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create(rsp)));
        }));
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list(rsp)));
        }));
    }
    retrieve(id, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve(rsp)));
        }));
    }
    update(id, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.update(id, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update(rsp)));
        }));
    }
}
exports.ObservableProductsApi = ObservableProductsApi;
const TransfersApi_1 = require("../apis/TransfersApi");
class ObservableTransfersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransfersApi_1.TransfersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransfersApi_1.TransfersApiResponseProcessor();
    }
    create(prismAccount, transferData, _options) {
        const requestContextPromise = this.requestFactory.create(prismAccount, transferData, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create(rsp)));
        }));
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list(rsp)));
        }));
    }
    retrieve(id, prismAccount, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, prismAccount, expand, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve(rsp)));
        }));
    }
}
exports.ObservableTransfersApi = ObservableTransfersApi;
const WalletsApi_1 = require("../apis/WalletsApi");
class ObservableWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WalletsApi_1.WalletsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WalletsApi_1.WalletsApiResponseProcessor();
    }
    _delete(id, prismAccount, expand, _options) {
        const requestContextPromise = this.requestFactory._delete(id, prismAccount, expand, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete(rsp)));
        }));
    }
    create(prismAccount, walletData, _options) {
        const requestContextPromise = this.requestFactory.create(prismAccount, walletData, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create(rsp)));
        }));
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list(rsp)));
        }));
    }
    retrieve(id, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve(rsp)));
        }));
    }
    update(id, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.update(id, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update(rsp)));
        }));
    }
}
exports.ObservableWalletsApi = ObservableWalletsApi;
const WebhooksApi_1 = require("../apis/WebhooksApi");
class ObservableWebhooksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhooksApi_1.WebhooksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhooksApi_1.WebhooksApiResponseProcessor();
    }
    _delete(id, prismAccount, _options) {
        const requestContextPromise = this.requestFactory._delete(id, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete(rsp)));
        }));
    }
    create(prismAccount, webhookData, _options) {
        const requestContextPromise = this.requestFactory.create(prismAccount, webhookData, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create(rsp)));
        }));
    }
    list(limit, page, sort, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list(rsp)));
        }));
    }
    retrieve(id, expand, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve(rsp)));
        }));
    }
    update(id, prismAccount, _options) {
        const requestContextPromise = this.requestFactory.update(id, prismAccount, _options);
        let middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => middleware.pre(ctx)));
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap((ctx) => this.configuration.httpApi.send(ctx))).
            pipe(rxjsStub_2.mergeMap((response) => {
            let middlewarePostObservable = rxjsStub_1.of(response);
            for (let middleware of this.configuration.middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap((rsp) => middleware.post(rsp)));
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update(rsp)));
        }));
    }
}
exports.ObservableWebhooksApi = ObservableWebhooksApi;
//# sourceMappingURL=ObservableAPI.js.map