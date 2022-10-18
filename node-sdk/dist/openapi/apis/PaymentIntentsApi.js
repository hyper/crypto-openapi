"use strict";
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
exports.PaymentIntentsApiResponseProcessor = exports.PaymentIntentsApiRequestFactory = void 0;
const baseapi_1 = require("./baseapi");
const http_1 = require("../http/http");
const ObjectSerializer_1 = require("../models/ObjectSerializer");
const exception_1 = require("./exception");
const util_1 = require("../util");
class PaymentIntentsApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
    _delete(id, pluto_account, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("PaymentIntentsApi", "_delete", "id");
            }
            const localVarPath = '/payment_intents/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    _delete_1(id, pluto_account, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("PaymentIntentsApi", "_delete_1", "id");
            }
            const localVarPath = '/payment_intents/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    create(pluto_account, payment_intent_create_request, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            const localVarPath = '/payment_intents';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(payment_intent_create_request, "PaymentIntentCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    create_2(pluto_account, payment_intent_create_request, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            const localVarPath = '/payment_intents';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(payment_intent_create_request, "PaymentIntentCreateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    list(pluto_account, limit, page, sort, expand, status, customer, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            const localVarPath = '/payment_intents';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "double"));
            }
            if (page !== undefined) {
                requestContext.setQueryParam("page", ObjectSerializer_1.ObjectSerializer.serialize(page, "number", "double"));
            }
            if (sort !== undefined) {
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "number", "double"));
            }
            if (expand !== undefined) {
                requestContext.setQueryParam("expand", ObjectSerializer_1.ObjectSerializer.serialize(expand, "string", ""));
            }
            if (status !== undefined) {
                requestContext.setQueryParam("status", ObjectSerializer_1.ObjectSerializer.serialize(status, "string", ""));
            }
            if (customer !== undefined) {
                requestContext.setQueryParam("customer", ObjectSerializer_1.ObjectSerializer.serialize(customer, "string", ""));
            }
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    list_3(pluto_account, limit, page, sort, expand, status, customer, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            const localVarPath = '/payment_intents';
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (limit !== undefined) {
                requestContext.setQueryParam("limit", ObjectSerializer_1.ObjectSerializer.serialize(limit, "number", "double"));
            }
            if (page !== undefined) {
                requestContext.setQueryParam("page", ObjectSerializer_1.ObjectSerializer.serialize(page, "number", "double"));
            }
            if (sort !== undefined) {
                requestContext.setQueryParam("sort", ObjectSerializer_1.ObjectSerializer.serialize(sort, "number", "double"));
            }
            if (expand !== undefined) {
                requestContext.setQueryParam("expand", ObjectSerializer_1.ObjectSerializer.serialize(expand, "string", ""));
            }
            if (status !== undefined) {
                requestContext.setQueryParam("status", ObjectSerializer_1.ObjectSerializer.serialize(status, "string", ""));
            }
            if (customer !== undefined) {
                requestContext.setQueryParam("customer", ObjectSerializer_1.ObjectSerializer.serialize(customer, "string", ""));
            }
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    poll(id, pluto_account, expand, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("PaymentIntentsApi", "poll", "id");
            }
            const localVarPath = '/payment_intents/{id}/poll'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (expand !== undefined) {
                requestContext.setQueryParam("expand", ObjectSerializer_1.ObjectSerializer.serialize(expand, "string", ""));
            }
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    poll_4(id, pluto_account, expand, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("PaymentIntentsApi", "poll_4", "id");
            }
            const localVarPath = '/payment_intents/{id}/poll'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (expand !== undefined) {
                requestContext.setQueryParam("expand", ObjectSerializer_1.ObjectSerializer.serialize(expand, "string", ""));
            }
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    retrieve(id, pluto_account, expand, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("PaymentIntentsApi", "retrieve", "id");
            }
            const localVarPath = '/payment_intents/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (expand !== undefined) {
                requestContext.setQueryParam("expand", ObjectSerializer_1.ObjectSerializer.serialize(expand, "string", ""));
            }
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    retrieve_5(id, pluto_account, expand, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("PaymentIntentsApi", "retrieve_5", "id");
            }
            const localVarPath = '/payment_intents/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (expand !== undefined) {
                requestContext.setQueryParam("expand", ObjectSerializer_1.ObjectSerializer.serialize(expand, "string", ""));
            }
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    sendReceipt(id, pluto_account, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("PaymentIntentsApi", "sendReceipt", "id");
            }
            const localVarPath = '/payment_intents/{id}/send_receipt'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    sendReceipt_6(id, pluto_account, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("PaymentIntentsApi", "sendReceipt_6", "id");
            }
            const localVarPath = '/payment_intents/{id}/send_receipt'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.POST);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    update(id, pluto_account, payment_intent_update_request, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("PaymentIntentsApi", "update", "id");
            }
            const localVarPath = '/payment_intents/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(payment_intent_update_request, "PaymentIntentUpdateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
    update_7(id, pluto_account, payment_intent_update_request, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            let _config = _options || this.configuration;
            if (id === null || id === undefined) {
                throw new baseapi_1.RequiredError("PaymentIntentsApi", "update_7", "id");
            }
            const localVarPath = '/payment_intents/{id}'
                .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
            const requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.PATCH);
            requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
            if (pluto_account !== undefined) {
                requestContext.setHeaderParam("Pluto-Account", ObjectSerializer_1.ObjectSerializer.serialize(pluto_account, "string", ""));
            }
            const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                "application/json"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
            const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(payment_intent_update_request, "PaymentIntentUpdateRequest", ""), contentType);
            requestContext.setBody(serializedBody);
            const defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
            if (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication) {
                yield (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext));
            }
            return requestContext;
        });
    }
}
exports.PaymentIntentsApiRequestFactory = PaymentIntentsApiRequestFactory;
class PaymentIntentsApiResponseProcessor {
    _delete(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (util_1.isCodeInRange("404", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    _delete_1(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (util_1.isCodeInRange("404", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    create(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            if (util_1.isCodeInRange("400", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", undefined, response.headers);
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    create_2(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            if (util_1.isCodeInRange("400", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", undefined, response.headers);
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    list(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PaymentIntentListResponse", "");
                return body;
            }
            if (util_1.isCodeInRange("400", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", undefined, response.headers);
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PaymentIntentListResponse", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    list_3(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PaymentIntentListResponse", "");
                return body;
            }
            if (util_1.isCodeInRange("400", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", undefined, response.headers);
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "PaymentIntentListResponse", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    poll(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (util_1.isCodeInRange("404", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    poll_4(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (util_1.isCodeInRange("404", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    retrieve(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (util_1.isCodeInRange("404", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    retrieve_5(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (util_1.isCodeInRange("404", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    sendReceipt(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (util_1.isCodeInRange("404", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    sendReceipt_6(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (util_1.isCodeInRange("404", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    update(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            if (util_1.isCodeInRange("400", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", undefined, response.headers);
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (util_1.isCodeInRange("404", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
    update_7(response) {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
            if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            if (util_1.isCodeInRange("400", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Bad Request", undefined, response.headers);
            }
            if (util_1.isCodeInRange("401", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Unauthorized", undefined, response.headers);
            }
            if (util_1.isCodeInRange("404", response.httpStatusCode)) {
                throw new exception_1.ApiException(response.httpStatusCode, "Not Found", undefined, response.headers);
            }
            if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
                const body = ObjectSerializer_1.ObjectSerializer.deserialize(ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType), "IPaymentIntent", "");
                return body;
            }
            throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!", yield response.getBodyAsAny(), response.headers);
        });
    }
}
exports.PaymentIntentsApiResponseProcessor = PaymentIntentsApiResponseProcessor;
//# sourceMappingURL=PaymentIntentsApi.js.map