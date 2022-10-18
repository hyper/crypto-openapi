"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateRequestBillingDetails = void 0;
class CustomerCreateRequestBillingDetails {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomerCreateRequestBillingDetails.attributeTypeMap;
    }
}
exports.CustomerCreateRequestBillingDetails = CustomerCreateRequestBillingDetails;
CustomerCreateRequestBillingDetails.discriminator = undefined;
CustomerCreateRequestBillingDetails.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "Address",
        "format": ""
    }
];
//# sourceMappingURL=CustomerCreateRequestBillingDetails.js.map