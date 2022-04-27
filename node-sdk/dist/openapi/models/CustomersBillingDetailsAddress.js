"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersBillingDetailsAddress = void 0;
class CustomersBillingDetailsAddress {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomersBillingDetailsAddress.attributeTypeMap;
    }
}
exports.CustomersBillingDetailsAddress = CustomersBillingDetailsAddress;
CustomersBillingDetailsAddress.discriminator = undefined;
CustomersBillingDetailsAddress.attributeTypeMap = [
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
//# sourceMappingURL=CustomersBillingDetailsAddress.js.map