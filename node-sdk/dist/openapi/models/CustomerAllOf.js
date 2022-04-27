"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAllOf = void 0;
class CustomerAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomerAllOf.attributeTypeMap;
    }
}
exports.CustomerAllOf = CustomerAllOf;
CustomerAllOf.discriminator = undefined;
CustomerAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "billingDetails",
        "baseName": "billing_details",
        "type": "CustomerAllOfBillingDetails",
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
//# sourceMappingURL=CustomerAllOf.js.map