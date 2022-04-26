"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerBillingDetails = void 0;
class CustomerBillingDetails {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomerBillingDetails.attributeTypeMap;
    }
}
exports.CustomerBillingDetails = CustomerBillingDetails;
CustomerBillingDetails.discriminator = undefined;
CustomerBillingDetails.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "CustomerBillingDetailsAddress",
        "format": ""
    }
];
//# sourceMappingURL=CustomerBillingDetails.js.map