"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerData = void 0;
class CustomerData {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomerData.attributeTypeMap;
    }
}
exports.CustomerData = CustomerData;
CustomerData.discriminator = undefined;
CustomerData.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "billing_details",
        "baseName": "billing_details",
        "type": "CustomersBillingDetails",
        "format": ""
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "phone",
        "baseName": "phone",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CustomerData.js.map