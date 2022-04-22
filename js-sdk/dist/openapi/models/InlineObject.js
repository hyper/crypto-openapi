"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineObject = void 0;
class InlineObject {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineObject.attributeTypeMap;
    }
}
exports.InlineObject = InlineObject;
InlineObject.discriminator = undefined;
InlineObject.attributeTypeMap = [
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
//# sourceMappingURL=InlineObject.js.map