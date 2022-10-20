"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutListResponse = void 0;
class CheckoutListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CheckoutListResponse.attributeTypeMap;
    }
}
exports.CheckoutListResponse = CheckoutListResponse;
CheckoutListResponse.discriminator = undefined;
CheckoutListResponse.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": "double"
    },
    {
        "name": "has_more",
        "baseName": "has_more",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number",
        "format": "double"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<ICheckout>",
        "format": ""
    }
];
//# sourceMappingURL=CheckoutListResponse.js.map