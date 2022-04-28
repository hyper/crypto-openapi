"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prism = void 0;
const index_1 = require("./openapi/index");
const convertCasing_1 = require("./helpers/convertCasing");
__exportStar(require("./openapi/models/all"), exports);
__exportStar(require("./openapi/apis/exception"), exports);
const VERSION = '0.0.0';
class UserAgentMiddleware {
    pre(context) {
        context.setHeaderParam('User-Agent', `prism-node/${VERSION}/javascript`);
        return Promise.resolve(context);
    }
    post(context) {
        return Promise.resolve(context);
    }
}
class Prism {
    constructor(token, options) {
        const envs = ['dev', 'stg', 'prd'];
        const baseServer = (options === null || options === void 0 ? void 0 : options.env) ? index_1.servers[envs.indexOf(options.env)] : index_1.servers[2];
        const config = index_1.createConfiguration({
            baseServer,
            promiseMiddleware: [new UserAgentMiddleware()],
            authMethods: {
                default: {
                    getName: () => 'ApiKey',
                    applySecurityAuthentication: (context) => context.setHeaderParam('Authorization', 'Bearer ' + token),
                },
            },
        });
        this.customers = new CustomersApiLayer(config);
        this.fees = new FeesApiLayer(config);
        this.invoices = new InvoicesApiLayer(config);
        this.logs = new LogsApiLayer(config);
        this.payments = new PaymentsApiLayer(config);
        this.products = new ProductsApiLayer(config);
        this.wallets = new WalletsApiLayer(config);
        this.webhooks = new WebhooksApiLayer(config);
    }
}
exports.Prism = Prism;
class CustomersApiLayer {
    constructor(config) {
        this.api = new index_1.CustomersApi(config);
    }
    create(customerData, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.create(Object.assign(Object.assign({}, convertCasing_1.default(options)), { customer_data: customerData }));
        });
    }
    retrieve(id, params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), params));
        });
    }
    update(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.update(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), data));
        });
    }
    list(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign(Object.assign({}, convertCasing_1.default(options)), params));
        });
    }
}
class FeesApiLayer {
    constructor(config) {
        this.api = new index_1.FeesApi(config);
    }
    create(feeData, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.create(Object.assign(Object.assign({}, convertCasing_1.default(options)), { fee_data: feeData }));
        });
    }
    retrieve(id, params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), params));
        });
    }
    list(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign(Object.assign({}, convertCasing_1.default(options)), params));
        });
    }
}
class InvoicesApiLayer {
    constructor(config) {
        this.api = new index_1.InvoicesApi(config);
    }
    create(invoiceData, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.create(Object.assign(Object.assign({}, convertCasing_1.default(options)), { invoice_data: invoiceData }));
        });
    }
    retrieve(id, params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), params));
        });
    }
    update(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.update(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), data));
        });
    }
    list(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign(Object.assign({}, convertCasing_1.default(options)), params));
        });
    }
}
class LogsApiLayer {
    constructor(config) {
        this.api = new index_1.LogsApi(config);
    }
    retrieve(id, params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), params));
        });
    }
    list(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign(Object.assign({}, convertCasing_1.default(options)), params));
        });
    }
}
class PaymentsApiLayer {
    constructor(config) {
        this.api = new index_1.PaymentsApi(config);
    }
    retrieve(id, params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), params));
        });
    }
    list(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign(Object.assign({}, convertCasing_1.default(options)), params));
        });
    }
}
class ProductsApiLayer {
    constructor(config) {
        this.api = new index_1.ProductsApi(config);
    }
    create(productData, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.create(Object.assign(Object.assign({}, convertCasing_1.default(options)), { product_data: productData }));
        });
    }
    retrieve(id, params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), params));
        });
    }
    update(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.update(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), data));
        });
    }
    list(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign(Object.assign({}, convertCasing_1.default(options)), params));
        });
    }
}
class WalletsApiLayer {
    constructor(config) {
        this.api = new index_1.WalletsApi(config);
    }
    create(walletData, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.create(Object.assign(Object.assign({}, convertCasing_1.default(options)), { wallet_data: walletData }));
        });
    }
    retrieve(id, params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), params));
        });
    }
    update(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.update(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), data));
        });
    }
    list(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign(Object.assign({}, convertCasing_1.default(options)), params));
        });
    }
}
class WebhooksApiLayer {
    constructor(config) {
        this.api = new index_1.WebhooksApi(config);
    }
    create(webhookData, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.create(Object.assign(Object.assign({}, convertCasing_1.default(options)), { webhook_data: webhookData }));
        });
    }
    retrieve(id, params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), params));
        });
    }
    update(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.update(Object.assign(Object.assign({ id }, convertCasing_1.default(options)), data));
        });
    }
    list(params, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign(Object.assign({}, convertCasing_1.default(options)), params));
        });
    }
}
//# sourceMappingURL=index.js.map