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
        "name": "data",
        "baseName": "data",
        "type": "Array<ICheckout>",
        "format": ""
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
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=CheckoutListResponse.js.map