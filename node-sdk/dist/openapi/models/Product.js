'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Product = void 0;
class Product {
  constructor() {}
  static getAttributeTypeMap() {
    return Product.attributeTypeMap;
  }
}
exports.Product = Product;
Product.discriminator = undefined;
Product.attributeTypeMap = [
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
    name: 'amount',
    baseName: 'amount',
    type: 'number',
    format: '',
  },
  {
    name: 'baseCurrency',
    baseName: 'base_currency',
    type: 'string',
    format: '',
  },
  {
    name: 'chain',
    baseName: 'chain',
    type: 'string',
    format: '',
  },
  {
    name: 'created',
    baseName: 'created',
    type: 'Date',
    format: 'date-time',
  },
  {
    name: 'currency',
    baseName: 'currency',
    type: 'ProductCurrencyEnum',
    format: '',
  },
  {
    name: 'name',
    baseName: 'name',
    type: 'string',
    format: '',
  },
];
//# sourceMappingURL=Product.js.map
