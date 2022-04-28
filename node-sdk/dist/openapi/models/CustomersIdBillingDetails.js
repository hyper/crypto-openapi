"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersIdBillingDetails = void 0;
class CustomersIdBillingDetails {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomersIdBillingDetails.attributeTypeMap;
    }
}
exports.CustomersIdBillingDetails = CustomersIdBillingDetails;
CustomersIdBillingDetails.discriminator = undefined;
CustomersIdBillingDetails.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "CustomersIdBillingDetailsAddress",
        "format": ""
    }
];
//# sourceMappingURL=CustomersIdBillingDetails.js.map