"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse200Data = void 0;
class InlineResponse200Data {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse200Data.attributeTypeMap;
    }
}
exports.InlineResponse200Data = InlineResponse200Data;
InlineResponse200Data.discriminator = undefined;
InlineResponse200Data.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "billingDetails",
        "baseName": "billing_details",
        "type": "InlineResponse200BillingDetails",
        "format": ""
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
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
//# sourceMappingURL=InlineResponse200Data.js.map