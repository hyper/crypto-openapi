"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAllOfBillingDetailsAddress = void 0;
class CustomerAllOfBillingDetailsAddress {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomerAllOfBillingDetailsAddress.attributeTypeMap;
    }
}
exports.CustomerAllOfBillingDetailsAddress = CustomerAllOfBillingDetailsAddress;
CustomerAllOfBillingDetailsAddress.discriminator = undefined;
CustomerAllOfBillingDetailsAddress.attributeTypeMap = [
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
//# sourceMappingURL=CustomerAllOfBillingDetailsAddress.js.map