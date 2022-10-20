"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutCreateRequest = void 0;
class CheckoutCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CheckoutCreateRequest.attributeTypeMap;
    }
}
exports.CheckoutCreateRequest = CheckoutCreateRequest;
CheckoutCreateRequest.discriminator = undefined;
CheckoutCreateRequest.attributeTypeMap = [
    {
        "name": "customer_details",
        "baseName": "customer_details",
        "type": "CustomerDetails",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=CheckoutCreateRequest.js.map