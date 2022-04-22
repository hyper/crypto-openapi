"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse200BillingDetailsAddress = void 0;
class InlineResponse200BillingDetailsAddress {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse200BillingDetailsAddress.attributeTypeMap;
    }
}
exports.InlineResponse200BillingDetailsAddress = InlineResponse200BillingDetailsAddress;
InlineResponse200BillingDetailsAddress.discriminator = undefined;
InlineResponse200BillingDetailsAddress.attributeTypeMap = [
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
//# sourceMappingURL=InlineResponse200BillingDetailsAddress.js.map