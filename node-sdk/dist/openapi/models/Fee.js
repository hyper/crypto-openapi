'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Fee = void 0;
class Fee {
  constructor() {}
  static getAttributeTypeMap() {
    return Fee.attributeTypeMap;
  }
}
exports.Fee = Fee;
Fee.discriminator = undefined;
Fee.attributeTypeMap = [
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
    name: 'created',
    baseName: 'created',
    type: 'Date',
    format: 'date-time',
  },
  {
    name: 'currency',
    baseName: 'currency',
    type: 'string',
    format: '',
  },
  {
    name: 'description',
    baseName: 'description',
    type: 'string',
    format: '',
  },
  {
    name: 'internal',
    baseName: 'internal',
    type: 'boolean',
    format: '',
  },
  {
    name: 'invoice',
    baseName: 'invoice',
    type: 'string',
    format: '',
  },
  {
    name: 'percent',
    baseName: 'percent',
    type: 'number',
    format: '',
  },
  {
    name: 'usdAmount',
    baseName: 'usd_amount',
    type: 'number',
    format: '',
  },
  {
    name: 'wallet',
    baseName: 'wallet',
    type: 'string',
    format: '',
  },
];
//# sourceMappingURL=Fee.js.map
