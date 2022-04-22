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
        this.customers = new index_1.CustomersApi(config);
        this.fees = new index_1.FeesApi(config);
        this.invoices = new index_1.InvoicesApi(config);
        this.logs = new index_1.LogsApi(config);
        this.payments = new index_1.PaymentsApi(config);
        this.products = new index_1.ProductsApi(config);
        this.wallets = new index_1.WalletsApi(config);
        this.webhooks = new index_1.WebhooksApi(config);
    }
}
exports.Crypto = Crypto;
//# sourceMappingURL=index.js.map