'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Wallet = void 0;
class Wallet {
  constructor() {}
  static getAttributeTypeMap() {
    return Wallet.attributeTypeMap;
  }
}
exports.Wallet = Wallet;
Wallet.discriminator = undefined;
Wallet.attributeTypeMap = [
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
    name: 'address',
    baseName: 'address',
    type: 'string',
    format: '',
  },
  {
    name: 'admin',
    baseName: 'admin',
    type: 'boolean',
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
    name: 'customer',
    baseName: 'customer',
    type: 'WalletCustomerEnum',
    format: '',
  },
];
//# sourceMappingURL=Wallet.js.map
