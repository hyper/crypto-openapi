"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2002 = void 0;
class InlineResponse2002 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse2002.attributeTypeMap;
    }
}
exports.InlineResponse2002 = InlineResponse2002;
InlineResponse2002.discriminator = undefined;
InlineResponse2002.attributeTypeMap = [
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
        "name": "created",
        "baseName": "created",
        "type": "string",
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
//# sourceMappingURL=InlineResponse2002.js.map