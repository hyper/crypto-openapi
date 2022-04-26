'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CustomersBillingDetails = void 0;
class CustomersBillingDetails {
  constructor() {}
  static getAttributeTypeMap() {
    return CustomersBillingDetails.attributeTypeMap;
  }
}
exports.CustomersBillingDetails = CustomersBillingDetails;
CustomersBillingDetails.discriminator = undefined;
CustomersBillingDetails.attributeTypeMap = [
  {
    name: 'address',
    baseName: 'address',
    type: 'CustomersBillingDetailsAddress',
    format: '',
  },
];
//# sourceMappingURL=CustomersBillingDetails.js.map
