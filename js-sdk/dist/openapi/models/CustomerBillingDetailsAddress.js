"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerBillingDetailsAddress = void 0;
class CustomerBillingDetailsAddress {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomerBillingDetailsAddress.attributeTypeMap;
    }
}
exports.CustomerBillingDetailsAddress = CustomerBillingDetailsAddress;
CustomerBillingDetailsAddress.discriminator = undefined;
CustomerBillingDetailsAddress.attributeTypeMap = [
    {
        "name": "city",
        "baseName": "city",
        "type": "string",
        "format": ""
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string",
        "format": ""
    },
    {
        "name": "line1",
        "baseName": "line1",
        "type": "string",
        "format": ""
    },
    {
        "name": "line2",
        "baseName": "line2",
        "type": "string",
        "format": ""
    },
    {
        "name": "postalCode",
        "baseName": "postal_code",
        "type": "string",
        "format": ""
    },
    {
        "name": "state",
        "baseName": "state",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CustomerBillingDetailsAddress.js.map