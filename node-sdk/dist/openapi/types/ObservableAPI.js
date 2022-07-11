"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableWebhooksApi = exports.ObservableWalletsApi = exports.ObservableTransfersApi = exports.ObservableSubscriptionsApi = exports.ObservableProductsApi = exports.ObservablePricesApi = exports.ObservablePayoutWalletsApi = exports.ObservablePaymentIntentsApi = exports.ObservableLogsApi = exports.ObservableInvoicesApi = exports.ObservableFeesApi = exports.ObservableCustomersApi = exports.ObservableAccountsApi = void 0;
const rxjsStub_1 = require("../rxjsStub");
const rxjsStub_2 = require("../rxjsStub");
const AccountsApi_1 = require("../apis/AccountsApi");
class ObservableAccountsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountsApi_1.AccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountsApi_1.AccountsApiResponseProcessor();
    }
    create(pluto_account, account, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, account, _options);
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
    list(limit, page, sort, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, pluto_account, _options);
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
    retrieve(id, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, pluto_account, _options);
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
    update(id, pluto_account, account, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, account, _options);
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
exports.ObservableAccountsApi = ObservableAccountsApi;
const CustomersApi_1 = require("../apis/CustomersApi");
class ObservableCustomersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomersApi_1.CustomersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomersApi_1.CustomersApiResponseProcessor();
    }
    create(pluto_account, create_customer_body, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, create_customer_body, _options);
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
    list(limit, page, sort, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, pluto_account, _options);
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
    retrieve(id, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, pluto_account, _options);
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
    update(id, pluto_account, update_customer_body, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, update_customer_body, _options);
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
    _delete(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);
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
    create(pluto_account, create_fee_body, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, create_fee_body, _options);
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
    list(limit, page, sort, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, pluto_account, _options);
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
    retrieve(id, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, pluto_account, _options);
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
    create(pluto_account, invoice, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, invoice, _options);
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
    list(limit, page, sort, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, pluto_account, _options);
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
    pay(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.pay(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.pay(rsp)));
        }));
    }
    retrieve(id, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, pluto_account, _options);
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
    update(id, pluto_account, invoice, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, invoice, _options);
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
    list(limit, page, sort, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, pluto_account, _options);
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
    retrieve(id, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, pluto_account, _options);
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
const PaymentIntentsApi_1 = require("../apis/PaymentIntentsApi");
class ObservablePaymentIntentsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentIntentsApi_1.PaymentIntentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentIntentsApi_1.PaymentIntentsApiResponseProcessor();
    }
    cancel(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.cancel(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.cancel(rsp)));
        }));
    }
    create(pluto_account, payment_intent, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, payment_intent, _options);
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
    list(pluto_account, expand, limit, page, sort, status, customer, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, expand, limit, page, sort, status, customer, _options);
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
    poll(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.poll(id, pluto_account, expand, _options);
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
    retrieve(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);
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
    update(id, pluto_account, update_payment_intent_body, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, update_payment_intent_body, _options);
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
exports.ObservablePaymentIntentsApi = ObservablePaymentIntentsApi;
const PayoutWalletsApi_1 = require("../apis/PayoutWalletsApi");
class ObservablePayoutWalletsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PayoutWalletsApi_1.PayoutWalletsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PayoutWalletsApi_1.PayoutWalletsApiResponseProcessor();
    }
    _delete(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);
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
    create(pluto_account, create_payout_wallet_body, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, create_payout_wallet_body, _options);
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
    list(limit, page, sort, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, pluto_account, _options);
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
    retrieve(id, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, pluto_account, _options);
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
    update(id, pluto_account, payout_wallet, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, payout_wallet, _options);
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
const PricesApi_1 = require("../apis/PricesApi");
class ObservablePricesApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PricesApi_1.PricesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PricesApi_1.PricesApiResponseProcessor();
    }
    _delete(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);
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
    create(pluto_account, price, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, price, _options);
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
    list(pluto_account, expand, limit, page, sort, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, expand, limit, page, sort, _options);
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
    retrieve(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, pluto_account, expand, _options);
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
    update(id, pluto_account, update_price_body, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, update_price_body, _options);
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
exports.ObservablePricesApi = ObservablePricesApi;
const ProductsApi_1 = require("../apis/ProductsApi");
class ObservableProductsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsApi_1.ProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsApi_1.ProductsApiResponseProcessor();
    }
    _delete(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);
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
    create(pluto_account, create_product_body, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, create_product_body, _options);
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
    list(limit, page, sort, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, pluto_account, _options);
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
    retrieve(id, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, pluto_account, _options);
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
    update(id, pluto_account, update_product_body, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, update_product_body, _options);
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
const SubscriptionsApi_1 = require("../apis/SubscriptionsApi");
class ObservableSubscriptionsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SubscriptionsApi_1.SubscriptionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SubscriptionsApi_1.SubscriptionsApiResponseProcessor();
    }
    cancel(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.cancel(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.cancel(rsp)));
        }));
    }
    create(pluto_account, subscription, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, subscription, _options);
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
    list(expand, limit, page, sort, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list(expand, limit, page, sort, pluto_account, _options);
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
    retrieve(id, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, pluto_account, _options);
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
    update(id, pluto_account, subscription, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, subscription, _options);
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
exports.ObservableSubscriptionsApi = ObservableSubscriptionsApi;
const TransfersApi_1 = require("../apis/TransfersApi");
class ObservableTransfersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransfersApi_1.TransfersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransfersApi_1.TransfersApiResponseProcessor();
    }
    create(pluto_account, create_transfer_body, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, create_transfer_body, _options);
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
    list(limit, page, sort, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, pluto_account, _options);
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
    retrieve(id, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, pluto_account, _options);
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
    _delete(id, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete(id, expand, pluto_account, _options);
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
    create(pluto_account, create_wallet_body, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, create_wallet_body, _options);
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
    list(limit, page, sort, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, pluto_account, _options);
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
    retrieve(id, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, pluto_account, _options);
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
    update(id, pluto_account, update_wallet_body, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, update_wallet_body, _options);
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
    _delete(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete(id, pluto_account, _options);
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
    create(pluto_account, create_webhook_body, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, create_webhook_body, _options);
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
    list(limit, page, sort, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list(limit, page, sort, expand, pluto_account, _options);
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
    retrieve(id, expand, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.retrieve(id, expand, pluto_account, _options);
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
    update(id, pluto_account, update_webhook_body, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, update_webhook_body, _options);
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