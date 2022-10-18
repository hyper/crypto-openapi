"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICustomerBillingDetails = void 0;
class ICustomerBillingDetails {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ICustomerBillingDetails.attributeTypeMap;
    }
}
exports.ICustomerBillingDetails = ICustomerBillingDetails;
ICustomerBillingDetails.discriminator = undefined;
ICustomerBillingDetails.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "Address",
        "format": ""
    }
];
//# sourceMappingURL=ICustomerBillingDetails.js.map