'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ObjectWebhooksApi = exports.ObjectWalletsApi = exports.ObjectProductsApi = exports.ObjectPaymentsApi = exports.ObjectLogsApi = exports.ObjectInvoicesApi = exports.ObjectFeesApi = exports.ObjectCustomersApi = void 0;
const ObservableAPI_1 = require('./ObservableAPI');
class ObjectCustomersApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_1.ObservableCustomersApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  create(param = {}, options) {
    return this.api.create(param.prismAccount, param.inlineObject, options).toPromise();
  }
  list(param = {}, options) {
    return this.api
      .list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options)
      .toPromise();
  }
  retrieve(param, options) {
    return this.api
      .retrieve(param.customerId, param.expand, param.prismAccount, options)
      .toPromise();
  }
  update(param, options) {
    return this.api.update(param.customerId, param.prismAccount, options).toPromise();
  }
}
exports.ObjectCustomersApi = ObjectCustomersApi;
const ObservableAPI_2 = require('./ObservableAPI');
class ObjectFeesApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_2.ObservableFeesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  _delete(param, options) {
    return this.api._delete(param.feeId, param.prismAccount, options).toPromise();
  }
  create(param = {}, options) {
    return this.api.create(param.prismAccount, param.inlineObject1, options).toPromise();
  }
  list(param = {}, options) {
    return this.api
      .list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options)
      .toPromise();
  }
  retrieve(param, options) {
    return this.api.retrieve(param.feeId, param.expand, param.prismAccount, options).toPromise();
  }
}
exports.ObjectFeesApi = ObjectFeesApi;
const ObservableAPI_3 = require('./ObservableAPI');
class ObjectInvoicesApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_3.ObservableInvoicesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  create(param = {}, options) {
    return this.api.create(param.prismAccount, param.inlineObject2, options).toPromise();
  }
  list(param = {}, options) {
    return this.api
      .list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options)
      .toPromise();
  }
  retrieve(param, options) {
    return this.api
      .retrieve(param.invoiceId, param.expand, param.prismAccount, options)
      .toPromise();
  }
  update(param, options) {
    return this.api.update(param.invoiceId, param.prismAccount, options).toPromise();
  }
}
exports.ObjectInvoicesApi = ObjectInvoicesApi;
const ObservableAPI_4 = require('./ObservableAPI');
class ObjectLogsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_4.ObservableLogsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  list(param = {}, options) {
    return this.api
      .list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options)
      .toPromise();
  }
  retrieve(param, options) {
    return this.api.retrieve(param.logId, param.expand, param.prismAccount, options).toPromise();
  }
}
exports.ObjectLogsApi = ObjectLogsApi;
const ObservableAPI_5 = require('./ObservableAPI');
class ObjectPaymentsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_5.ObservablePaymentsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  list(param = {}, options) {
    return this.api
      .list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options)
      .toPromise();
  }
  retrieve(param, options) {
    return this.api
      .retrieve(param.paymentId, param.expand, param.prismAccount, options)
      .toPromise();
  }
}
exports.ObjectPaymentsApi = ObjectPaymentsApi;
const ObservableAPI_6 = require('./ObservableAPI');
class ObjectProductsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_6.ObservableProductsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  _delete(param, options) {
    return this.api._delete(param.productId, param.prismAccount, options).toPromise();
  }
  create(param = {}, options) {
    return this.api.create(param.prismAccount, param.inlineObject3, options).toPromise();
  }
  list(param = {}, options) {
    return this.api
      .list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options)
      .toPromise();
  }
  retrieve(param, options) {
    return this.api
      .retrieve(param.productId, param.expand, param.prismAccount, options)
      .toPromise();
  }
  update(param, options) {
    return this.api.update(param.productId, param.prismAccount, options).toPromise();
  }
}
exports.ObjectProductsApi = ObjectProductsApi;
const ObservableAPI_7 = require('./ObservableAPI');
class ObjectWalletsApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_7.ObservableWalletsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  _delete(param, options) {
    return this.api._delete(param.walletId, param.prismAccount, options).toPromise();
  }
  create(param = {}, options) {
    return this.api.create(param.prismAccount, param.inlineObject4, options).toPromise();
  }
  list(param = {}, options) {
    return this.api
      .list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options)
      .toPromise();
  }
  retrieve(param, options) {
    return this.api.retrieve(param.walletId, param.expand, param.prismAccount, options).toPromise();
  }
  update(param, options) {
    return this.api.update(param.walletId, param.prismAccount, options).toPromise();
  }
}
exports.ObjectWalletsApi = ObjectWalletsApi;
const ObservableAPI_8 = require('./ObservableAPI');
class ObjectWebhooksApi {
  constructor(configuration, requestFactory, responseProcessor) {
    this.api = new ObservableAPI_8.ObservableWebhooksApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }
  _delete(param, options) {
    return this.api._delete(param.webhookId, param.prismAccount, options).toPromise();
  }
  create(param = {}, options) {
    return this.api.create(param.prismAccount, param.inlineObject5, options).toPromise();
  }
  list(param = {}, options) {
    return this.api
      .list(param.limit, param.page, param.sort, param.expand, param.prismAccount, options)
      .toPromise();
  }
  retrieve(param, options) {
    return this.api
      .retrieve(param.webhookId, param.expand, param.prismAccount, options)
      .toPromise();
  }
  update(param, options) {
    return this.api.update(param.webhookId, param.prismAccount, options).toPromise();
  }
}
exports.ObjectWebhooksApi = ObjectWebhooksApi;
//# sourceMappingURL=ObjectParamAPI.js.map
