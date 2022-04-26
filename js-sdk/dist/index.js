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
exports.Crypto = void 0;
const index_1 = require("./openapi/index");
__exportStar(require("./openapi/models/all"), exports);
__exportStar(require("./openapi/apis/exception"), exports);
const VERSION = '0.0.0';
class UserAgentMiddleware {
    pre(context) {
        context.setHeaderParam('User-Agent', `hyper-crypto-node/${VERSION}/javascript`);
        return Promise.resolve(context);
    }
    post(context) {
        return Promise.resolve(context);
    }
}
class Crypto {
    constructor(token) {
        const baseUrl = 'http://localhost:7070/v1';
        const baseServer = new index_1.ServerConfiguration(baseUrl, {});
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
exports.Crypto = Crypto;
class CustomersApiLayer {
    constructor(config) {
        this.api = new index_1.CustomersApi(config);
    }
    create(prismAccount, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.create({ prismAccount, inlineObject: data });
        });
    }
    retrieve(prismAccount, customerId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign({ prismAccount, customerId }, params));
        });
    }
    update(prismAccount, customerId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.update(Object.assign({ prismAccount, customerId }, data));
        });
    }
    ;
    list(prismAccount, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign({ prismAccount }, params));
        });
    }
}
class FeesApiLayer {
    constructor(config) {
        this.api = new index_1.FeesApi(config);
    }
    create(prismAccount, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.create({ prismAccount, inlineObject1: data });
        });
    }
    retrieve(prismAccount, feeId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign({ prismAccount, feeId }, params));
        });
    }
    list(prismAccount, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign({ prismAccount }, params));
        });
    }
}
class InvoicesApiLayer {
    constructor(config) {
        this.api = new index_1.InvoicesApi(config);
    }
    create(prismAccount, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.create({ prismAccount, inlineObject2: data });
        });
    }
    retrieve(prismAccount, invoiceId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign({ prismAccount, invoiceId }, params));
        });
    }
    update(prismAccount, invoiceId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.update(Object.assign({ prismAccount, invoiceId }, data));
        });
    }
    ;
    list(prismAccount, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign({ prismAccount }, params));
        });
    }
}
class LogsApiLayer {
    constructor(config) {
        this.api = new index_1.LogsApi(config);
    }
    retrieve(prismAccount, logId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign({ prismAccount, logId }, params));
        });
    }
    list(prismAccount, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign({ prismAccount }, params));
        });
    }
}
class PaymentsApiLayer {
    constructor(config) {
        this.api = new index_1.PaymentsApi(config);
    }
    retrieve(prismAccount, paymentId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign({ prismAccount, paymentId }, params));
        });
    }
    list(prismAccount, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign({ prismAccount }, params));
        });
    }
}
class ProductsApiLayer {
    constructor(config) {
        this.api = new index_1.ProductsApi(config);
    }
    create(prismAccount, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.create({ prismAccount, inlineObject3: data });
        });
    }
    retrieve(prismAccount, productId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign({ prismAccount, productId }, params));
        });
    }
    update(prismAccount, productId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.update(Object.assign({ prismAccount, productId }, data));
        });
    }
    ;
    list(prismAccount, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign({ prismAccount }, params));
        });
    }
}
class WalletsApiLayer {
    constructor(config) {
        this.api = new index_1.WalletsApi(config);
    }
    create(prismAccount, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.create({ prismAccount, inlineObject4: data });
        });
    }
    retrieve(prismAccount, walletId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign({ prismAccount, walletId }, params));
        });
    }
    update(prismAccount, walletId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.update(Object.assign({ prismAccount, walletId }, data));
        });
    }
    ;
    list(prismAccount, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign({ prismAccount }, params));
        });
    }
}
class WebhooksApiLayer {
    constructor(config) {
        this.api = new index_1.WebhooksApi(config);
    }
    create(prismAccount, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.create({ prismAccount, inlineObject5: data });
        });
    }
    retrieve(prismAccount, webhookId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.retrieve(Object.assign({ prismAccount, webhookId }, params));
        });
    }
    update(prismAccount, webhookId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.update(Object.assign({ prismAccount, webhookId }, data));
        });
    }
    ;
    list(prismAccount, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.api.list(Object.assign({ prismAccount }, params));
        });
    }
}
//# sourceMappingURL=index.js.map