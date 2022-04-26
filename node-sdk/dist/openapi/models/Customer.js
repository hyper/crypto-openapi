'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Customer = void 0;
class Customer {
  constructor() {}
  static getAttributeTypeMap() {
    return Customer.attributeTypeMap;
  }
}
exports.Customer = Customer;
Customer.discriminator = undefined;
Customer.attributeTypeMap = [
  {
    name: 'id',
    baseName: '_id',
    type: 'string',
    format: '',
  },
  {
    name: 'account',
    baseName: 'account',
    type: 'string',
    format: '',
  },
  {
    name: 'billingDetails',
    baseName: 'billing_details',
    type: 'CustomerBillingDetails',
    format: '',
  },
  {
    name: 'created',
    baseName: 'created',
    type: 'Date',
    format: 'date-time',
  },
  {
    name: 'email',
    baseName: 'email',
    type: 'string',
    format: '',
  },
  {
    name: 'name',
    baseName: 'name',
    type: 'string',
    format: '',
  },
  {
    name: 'phone',
    baseName: 'phone',
    type: 'string',
    format: '',
  },
];
//# sourceMappingURL=Customer.js.map
