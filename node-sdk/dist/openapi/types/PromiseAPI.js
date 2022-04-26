'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PromiseWebhooksApi =
  exports.PromiseWalletsApi =
  exports.PromiseProductsApi =
  exports.PromisePaymentsApi =
  exports.PromiseLogsApi =
  exports.PromiseInvoicesApi =
  exports.PromiseFeesApi =
  exports.PromiseCustomersApi =
    void 0;
const ObservableAPI_1 = require('./ObservableAPI');
class PromiseCustomersApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_1.ObservableCustomersApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  create(prismAccount, inlineObject, _options) {
    const result = this.api.create(prismAccount, inlineObject, _options);
    return result.toPromise();
  }
  list(limit, page, sort, expand, prismAccount, _options) {
    const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
    return result.toPromise();
  }
  retrieve(customerId, expand, prismAccount, _options) {
    const result = this.api.retrieve(customerId, expand, prismAccount, _options);
    return result.toPromise();
  }
  update(customerId, prismAccount, _options) {
    const result = this.api.update(customerId, prismAccount, _options);
    return result.toPromise();
  }
}
exports.PromiseCustomersApi = PromiseCustomersApi;
const ObservableAPI_2 = require('./ObservableAPI');
class PromiseFeesApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_2.ObservableFeesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  _delete(feeId, prismAccount, _options) {
    const result = this.api._delete(feeId, prismAccount, _options);
    return result.toPromise();
  }
  create(prismAccount, inlineObject1, _options) {
    const result = this.api.create(prismAccount, inlineObject1, _options);
    return result.toPromise();
  }
  list(limit, page, sort, expand, prismAccount, _options) {
    const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
    return result.toPromise();
  }
  retrieve(feeId, expand, prismAccount, _options) {
    const result = this.api.retrieve(feeId, expand, prismAccount, _options);
    return result.toPromise();
  }
}
exports.PromiseFeesApi = PromiseFeesApi;
const ObservableAPI_3 = require('./ObservableAPI');
class PromiseInvoicesApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_3.ObservableInvoicesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  create(prismAccount, inlineObject2, _options) {
    const result = this.api.create(prismAccount, inlineObject2, _options);
    return result.toPromise();
  }
  list(limit, page, sort, expand, prismAccount, _options) {
    const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
    return result.toPromise();
  }
  retrieve(invoiceId, expand, prismAccount, _options) {
    const result = this.api.retrieve(invoiceId, expand, prismAccount, _options);
    return result.toPromise();
  }
  update(invoiceId, prismAccount, _options) {
    const result = this.api.update(invoiceId, prismAccount, _options);
    return result.toPromise();
  }
}
exports.PromiseInvoicesApi = PromiseInvoicesApi;
const ObservableAPI_4 = require('./ObservableAPI');
class PromiseLogsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_4.ObservableLogsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  list(limit, page, sort, expand, prismAccount, _options) {
    const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
    return result.toPromise();
  }
  retrieve(logId, expand, prismAccount, _options) {
    const result = this.api.retrieve(logId, expand, prismAccount, _options);
    return result.toPromise();
  }
}
exports.PromiseLogsApi = PromiseLogsApi;
const ObservableAPI_5 = require('./ObservableAPI');
class PromisePaymentsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_5.ObservablePaymentsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  list(limit, page, sort, expand, prismAccount, _options) {
    const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
    return result.toPromise();
  }
  retrieve(paymentId, expand, prismAccount, _options) {
    const result = this.api.retrieve(paymentId, expand, prismAccount, _options);
    return result.toPromise();
  }
}
exports.PromisePaymentsApi = PromisePaymentsApi;
const ObservableAPI_6 = require('./ObservableAPI');
class PromiseProductsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_6.ObservableProductsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  _delete(productId, prismAccount, _options) {
    const result = this.api._delete(productId, prismAccount, _options);
    return result.toPromise();
  }
  create(prismAccount, inlineObject3, _options) {
    const result = this.api.create(prismAccount, inlineObject3, _options);
    return result.toPromise();
  }
  list(limit, page, sort, expand, prismAccount, _options) {
    const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
    return result.toPromise();
  }
  retrieve(productId, expand, prismAccount, _options) {
    const result = this.api.retrieve(productId, expand, prismAccount, _options);
    return result.toPromise();
  }
  update(productId, prismAccount, _options) {
    const result = this.api.update(productId, prismAccount, _options);
    return result.toPromise();
  }
}
exports.PromiseProductsApi = PromiseProductsApi;
const ObservableAPI_7 = require('./ObservableAPI');
class PromiseWalletsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_7.ObservableWalletsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  _delete(walletId, prismAccount, _options) {
    const result = this.api._delete(walletId, prismAccount, _options);
    return result.toPromise();
  }
  create(prismAccount, inlineObject4, _options) {
    const result = this.api.create(prismAccount, inlineObject4, _options);
    return result.toPromise();
  }
  list(limit, page, sort, expand, prismAccount, _options) {
    const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
    return result.toPromise();
  }
  retrieve(walletId, expand, prismAccount, _options) {
    const result = this.api.retrieve(walletId, expand, prismAccount, _options);
    return result.toPromise();
  }
  update(walletId, prismAccount, _options) {
    const result = this.api.update(walletId, prismAccount, _options);
    return result.toPromise();
  }
}
exports.PromiseWalletsApi = PromiseWalletsApi;
const ObservableAPI_8 = require('./ObservableAPI');
class PromiseWebhooksApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_8.ObservableWebhooksApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  _delete(webhookId, prismAccount, _options) {
    const result = this.api._delete(webhookId, prismAccount, _options);
    return result.toPromise();
  }
  create(prismAccount, inlineObject5, _options) {
    const result = this.api.create(prismAccount, inlineObject5, _options);
    return result.toPromise();
  }
  list(limit, page, sort, expand, prismAccount, _options) {
    const result = this.api.list(limit, page, sort, expand, prismAccount, _options);
    return result.toPromise();
  }
  retrieve(webhookId, expand, prismAccount, _options) {
    const result = this.api.retrieve(webhookId, expand, prismAccount, _options);
    return result.toPromise();
  }
  update(webhookId, prismAccount, _options) {
    const result = this.api.update(webhookId, prismAccount, _options);
    return result.toPromise();
  }
}
exports.PromiseWebhooksApi = PromiseWebhooksApi;
//# sourceMappingURL=PromiseAPI.js.map
