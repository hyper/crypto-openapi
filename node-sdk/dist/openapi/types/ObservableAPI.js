"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableWebhooksApi = exports.ObservableWalletsApi = exports.ObservableTransfersApi = exports.ObservableSubscriptionsApi = exports.ObservableProductsApi = exports.ObservablePricesApi = exports.ObservablePayoutWalletsApi = exports.ObservablePaymentLinksApi = exports.ObservablePaymentIntentsApi = exports.ObservableLogsApi = exports.ObservableInvoicesApi = exports.ObservableFeesApi = exports.ObservableCustomersApi = exports.ObservableCouponsApi = exports.ObservableCheckoutsApi = exports.ObservableAccountsApi = void 0;
const rxjsStub_1 = require("../rxjsStub");
const rxjsStub_2 = require("../rxjsStub");
const AccountsApi_1 = require("../apis/AccountsApi");
class ObservableAccountsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountsApi_1.AccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountsApi_1.AccountsApiResponseProcessor();
    }
    connect(id, pluto_account, account_connect_request, _options) {
        const requestContextPromise = this.requestFactory.connect(id, pluto_account, account_connect_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.connect(rsp)));
        }));
    }
    connect_1(id, pluto_account, account_connect_request, _options) {
        const requestContextPromise = this.requestFactory.connect_1(id, pluto_account, account_connect_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.connect_1(rsp)));
        }));
    }
    create(pluto_account, account_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, account_create_request, _options);
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
    create_2(pluto_account, account_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, account_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_2(rsp)));
        }));
    }
    dashboardAccess(id, pluto_account, expand, account_dashboard_access_request, _options) {
        const requestContextPromise = this.requestFactory.dashboardAccess(id, pluto_account, expand, account_dashboard_access_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.dashboardAccess(rsp)));
        }));
    }
    dashboardAccess_3(id, pluto_account, expand, account_dashboard_access_request, _options) {
        const requestContextPromise = this.requestFactory.dashboardAccess_3(id, pluto_account, expand, account_dashboard_access_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.dashboardAccess_3(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_4(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_4(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_4(rsp)));
        }));
    }
    patch(id, pluto_account, account_update_request, _options) {
        const requestContextPromise = this.requestFactory.patch(id, pluto_account, account_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.patch(rsp)));
        }));
    }
    patch_5(id, pluto_account, account_update_request, _options) {
        const requestContextPromise = this.requestFactory.patch_5(id, pluto_account, account_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.patch_5(rsp)));
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
    retrieve_6(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_6(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_6(rsp)));
        }));
    }
}
exports.ObservableAccountsApi = ObservableAccountsApi;
const CheckoutsApi_1 = require("../apis/CheckoutsApi");
class ObservableCheckoutsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CheckoutsApi_1.CheckoutsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CheckoutsApi_1.CheckoutsApiResponseProcessor();
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
    _delete_1(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete_1(rsp)));
        }));
    }
    create(pluto_account, checkout_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, checkout_create_request, _options);
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
    create_2(pluto_account, checkout_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, checkout_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_2(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_3(rsp)));
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
    retrieve_4(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_4(rsp)));
        }));
    }
}
exports.ObservableCheckoutsApi = ObservableCheckoutsApi;
const CouponsApi_1 = require("../apis/CouponsApi");
class ObservableCouponsApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CouponsApi_1.CouponsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CouponsApi_1.CouponsApiResponseProcessor();
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
    _delete_1(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete_1(rsp)));
        }));
    }
    create(pluto_account, coupon_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, coupon_create_request, _options);
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
    create_2(pluto_account, coupon_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, coupon_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_2(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_3(rsp)));
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
    retrieve_4(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_4(rsp)));
        }));
    }
    update(id, pluto_account, coupon_update_request, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, coupon_update_request, _options);
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
    update_5(id, pluto_account, coupon_update_request, _options) {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, coupon_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update_5(rsp)));
        }));
    }
}
exports.ObservableCouponsApi = ObservableCouponsApi;
const CustomersApi_1 = require("../apis/CustomersApi");
class ObservableCustomersApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomersApi_1.CustomersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomersApi_1.CustomersApiResponseProcessor();
    }
    create(pluto_account, customer_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, customer_create_request, _options);
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
    create_1(pluto_account, customer_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_1(pluto_account, customer_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_1(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, email, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, email, _options);
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
    list_2(pluto_account, limit, page, sort, expand, email, _options) {
        const requestContextPromise = this.requestFactory.list_2(pluto_account, limit, page, sort, expand, email, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_2(rsp)));
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
    retrieve_3(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_3(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_3(rsp)));
        }));
    }
    update(id, pluto_account, customer_update_request, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, customer_update_request, _options);
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
    update_4(id, pluto_account, customer_update_request, _options) {
        const requestContextPromise = this.requestFactory.update_4(id, pluto_account, customer_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update_4(rsp)));
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
    create(pluto_account, fee_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, fee_create_request, _options);
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
    create_1(pluto_account, fee_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_1(pluto_account, fee_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_1(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_2(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_2(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_2(rsp)));
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
    retrieve_3(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_3(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_3(rsp)));
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
    _delete_1(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete_1(rsp)));
        }));
    }
    create(pluto_account, invoice_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, invoice_create_request, _options);
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
    create_2(pluto_account, invoice_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, invoice_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_2(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_3(rsp)));
        }));
    }
    pay(id, pluto_account, invoice_pay_request, _options) {
        const requestContextPromise = this.requestFactory.pay(id, pluto_account, invoice_pay_request, _options);
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
    pay_4(id, pluto_account, invoice_pay_request, _options) {
        const requestContextPromise = this.requestFactory.pay_4(id, pluto_account, invoice_pay_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.pay_4(rsp)));
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
    retrieve_5(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_5(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_5(rsp)));
        }));
    }
    update(id, pluto_account, invoice_update_request, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, invoice_update_request, _options);
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
    update_6(id, pluto_account, invoice_update_request, _options) {
        const requestContextPromise = this.requestFactory.update_6(id, pluto_account, invoice_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update_6(rsp)));
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
    list(pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, _options);
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
    list_1(pluto_account, _options) {
        const requestContextPromise = this.requestFactory.list_1(pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_1(rsp)));
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
    retrieve_2(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_2(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_2(rsp)));
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
    _delete_1(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete_1(rsp)));
        }));
    }
    create(pluto_account, payment_intent_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, payment_intent_create_request, _options);
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
    create_2(pluto_account, payment_intent_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, payment_intent_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_2(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, status, customer, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, status, customer, _options);
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
    list_3(pluto_account, limit, page, sort, expand, status, customer, _options) {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, status, customer, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_3(rsp)));
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
    poll_4(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.poll_4(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.poll_4(rsp)));
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
    retrieve_5(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_5(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_5(rsp)));
        }));
    }
    sendReceipt(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.sendReceipt(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.sendReceipt(rsp)));
        }));
    }
    sendReceipt_6(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory.sendReceipt_6(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.sendReceipt_6(rsp)));
        }));
    }
    update(id, pluto_account, payment_intent_update_request, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, payment_intent_update_request, _options);
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
    update_7(id, pluto_account, payment_intent_update_request, _options) {
        const requestContextPromise = this.requestFactory.update_7(id, pluto_account, payment_intent_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update_7(rsp)));
        }));
    }
}
exports.ObservablePaymentIntentsApi = ObservablePaymentIntentsApi;
const PaymentLinksApi_1 = require("../apis/PaymentLinksApi");
class ObservablePaymentLinksApi {
    constructor(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentLinksApi_1.PaymentLinksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentLinksApi_1.PaymentLinksApiResponseProcessor();
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
    _delete_1(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete_1(rsp)));
        }));
    }
    create(pluto_account, payment_link_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, payment_link_create_request, _options);
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
    create_2(pluto_account, payment_link_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, payment_link_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_2(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_3(rsp)));
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
    retrieve_4(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_4(rsp)));
        }));
    }
    update(id, pluto_account, payment_link_update_request, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, payment_link_update_request, _options);
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
    update_5(id, pluto_account, payment_link_update_request, _options) {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, payment_link_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update_5(rsp)));
        }));
    }
}
exports.ObservablePaymentLinksApi = ObservablePaymentLinksApi;
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
    _delete_1(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete_1(rsp)));
        }));
    }
    create(pluto_account, payout_wallet_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, payout_wallet_create_request, _options);
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
    create_2(pluto_account, payout_wallet_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, payout_wallet_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_2(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_3(rsp)));
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
    retrieve_4(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_4(rsp)));
        }));
    }
    update(id, pluto_account, payout_wallet_update_request, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, payout_wallet_update_request, _options);
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
    update_5(id, pluto_account, payout_wallet_update_request, _options) {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, payout_wallet_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update_5(rsp)));
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
    _delete_1(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete_1(rsp)));
        }));
    }
    create(pluto_account, price_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, price_create_request, _options);
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
    create_2(pluto_account, price_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, price_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_2(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_3(rsp)));
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
    retrieve_4(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_4(rsp)));
        }));
    }
    update(id, pluto_account, price_update_request, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, price_update_request, _options);
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
    update_5(id, pluto_account, price_update_request, _options) {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, price_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update_5(rsp)));
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
    _delete_1(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete_1(rsp)));
        }));
    }
    create(pluto_account, product_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, product_create_request, _options);
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
    create_2(pluto_account, product_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, product_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_2(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_3(rsp)));
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
    retrieve_4(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_4(rsp)));
        }));
    }
    update(id, pluto_account, product_update_request, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, product_update_request, _options);
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
    update_5(id, pluto_account, product_update_request, _options) {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, product_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update_5(rsp)));
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
    _delete_1(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete_1(rsp)));
        }));
    }
    create(pluto_account, subscription_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, subscription_create_request, _options);
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
    create_2(pluto_account, subscription_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, subscription_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_2(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_3(rsp)));
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
    retrieve_4(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_4(rsp)));
        }));
    }
    update(id, pluto_account, subscription_update_request, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, subscription_update_request, _options);
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
    update_5(id, pluto_account, subscription_update_request, _options) {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, subscription_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update_5(rsp)));
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
    create(pluto_account, transfer_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, transfer_create_request, _options);
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
    create_1(pluto_account, transfer_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_1(pluto_account, transfer_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_1(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_2(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_2(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_2(rsp)));
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
    retrieve_3(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_3(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_3(rsp)));
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
    _delete_1(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete_1(rsp)));
        }));
    }
    create(pluto_account, wallet_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, wallet_create_request, _options);
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
    create_2(pluto_account, wallet_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, wallet_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_2(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_3(rsp)));
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
    retrieve_4(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_4(rsp)));
        }));
    }
    update(id, pluto_account, wallet_update_request, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, wallet_update_request, _options);
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
    update_5(id, pluto_account, wallet_update_request, _options) {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, wallet_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update_5(rsp)));
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
    _delete_1(id, pluto_account, _options) {
        const requestContextPromise = this.requestFactory._delete_1(id, pluto_account, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor._delete_1(rsp)));
        }));
    }
    create(pluto_account, webhook_create_request, _options) {
        const requestContextPromise = this.requestFactory.create(pluto_account, webhook_create_request, _options);
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
    create_2(pluto_account, webhook_create_request, _options) {
        const requestContextPromise = this.requestFactory.create_2(pluto_account, webhook_create_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.create_2(rsp)));
        }));
    }
    list(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list(pluto_account, limit, page, sort, expand, _options);
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
    list_3(pluto_account, limit, page, sort, expand, _options) {
        const requestContextPromise = this.requestFactory.list_3(pluto_account, limit, page, sort, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.list_3(rsp)));
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
    retrieve_4(id, pluto_account, expand, _options) {
        const requestContextPromise = this.requestFactory.retrieve_4(id, pluto_account, expand, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.retrieve_4(rsp)));
        }));
    }
    update(id, pluto_account, webhook_update_request, _options) {
        const requestContextPromise = this.requestFactory.update(id, pluto_account, webhook_update_request, _options);
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
    update_5(id, pluto_account, webhook_update_request, _options) {
        const requestContextPromise = this.requestFactory.update_5(id, pluto_account, webhook_update_request, _options);
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
            return middlewarePostObservable.pipe(rxjsStub_2.map((rsp) => this.responseProcessor.update_5(rsp)));
        }));
    }
}
exports.ObservableWebhooksApi = ObservableWebhooksApi;
//# sourceMappingURL=ObservableAPI.js.map