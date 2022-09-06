"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAllOfBillingDetails = void 0;
class CustomerAllOfBillingDetails {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomerAllOfBillingDetails.attributeTypeMap;
    }
}
exports.CustomerAllOfBillingDetails = CustomerAllOfBillingDetails;
CustomerAllOfBillingDetails.discriminator = undefined;
CustomerAllOfBillingDetails.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "Address",
        "format": ""
    }
];
//# sourceMappingURL=CustomerAllOfBillingDetails.js.map