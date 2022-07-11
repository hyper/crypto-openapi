'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.DefaultApiResponseProcessor = exports.DefaultApiRequestFactory = void 0;
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
class DefaultApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  pay(id, prism_account, _options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
      let _config = _options || this.configuration;
      if (id === null || id === undefined) {
        throw new baseapi_1.RequiredError('DefaultApi', 'pay', 'id');
      }
      const localVarPath = '/invoices/{id}/pay'.replace(
        '{' + 'id' + '}',
        encodeURIComponent(String(id))
      );
      const requestContext = _config.baseServer.makeRequestContext(
        localVarPath,
        http_1.HttpMethod.POST
      );
      requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
      if (prism_account !== undefined) {
        requestContext.setHeaderParam(
          'Prism-Account',
          ObjectSerializer_1.ObjectSerializer.serialize(prism_account, 'string', '')
        );
      }
      const defaultAuth =
        ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null ||
        _a === void 0
          ? void 0
          : _a.default) ||
        ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) ===
          null || _c === void 0
          ? void 0
          : _c.default);
      if (
        defaultAuth === null || defaultAuth === void 0
          ? void 0
          : defaultAuth.applySecurityAuthentication
      ) {
        yield defaultAuth === null || defaultAuth === void 0
          ? void 0
          : defaultAuth.applySecurityAuthentication(requestContext);
      }
      return requestContext;
    });
  }
}
exports.DefaultApiRequestFactory = DefaultApiRequestFactory;
class DefaultApiResponseProcessor {
  pay(response) {
    return __awaiter(this, void 0, void 0, function* () {
      const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(
        response.headers['content-type']
      );
      if (util_1.isCodeInRange('200', response.httpStatusCode)) {
        return;
      }
      if (util_1.isCodeInRange('401', response.httpStatusCode)) {
        throw new exception_1.ApiException(
          response.httpStatusCode,
          'Unauthorized',
          undefined,
          response.headers
        );
      }
      if (util_1.isCodeInRange('404', response.httpStatusCode)) {
        throw new exception_1.ApiException(
          response.httpStatusCode,
          'Not Found',
          undefined,
          response.headers
        );
      }
      if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        const body = ObjectSerializer_1.ObjectSerializer.deserialize(
          ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType),
          'void',
          ''
        );
        return body;
      }
      throw new exception_1.ApiException(
        response.httpStatusCode,
        'Unknown API Status Code!',
        yield response.getBodyAsAny(),
        response.headers
      );
    });
  }
}
exports.DefaultApiResponseProcessor = DefaultApiResponseProcessor;
//# sourceMappingURL=DefaultApi.js.map
