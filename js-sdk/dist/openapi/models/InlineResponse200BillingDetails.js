"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse200BillingDetails = void 0;
class InlineResponse200BillingDetails {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse200BillingDetails.attributeTypeMap;
    }
}
exports.InlineResponse200BillingDetails = InlineResponse200BillingDetails;
InlineResponse200BillingDetails.discriminator = undefined;
InlineResponse200BillingDetails.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "InlineResponse200BillingDetailsAddress",
        "format": ""
    }
];
//# sourceMappingURL=InlineResponse200BillingDetails.js.map