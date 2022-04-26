'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Payment = void 0;
class Payment {
  constructor() {}
  static getAttributeTypeMap() {
    return Payment.attributeTypeMap;
  }
}
exports.Payment = Payment;
Payment.discriminator = undefined;
Payment.attributeTypeMap = [
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
    name: 'customer',
    baseName: 'customer',
    type: 'string',
    format: '',
  },
  {
    name: 'errorMessage',
    baseName: 'error_message',
    type: 'string',
    format: '',
  },
  {
    name: 'exchangeRate',
    baseName: 'exchange_rate',
    type: 'number',
    format: '',
  },
  {
    name: 'invoice',
    baseName: 'invoice',
    type: 'string',
    format: '',
  },
  {
    name: 'status',
    baseName: 'status',
    type: 'PaymentStatusEnum',
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
//# sourceMappingURL=Payment.js.map
