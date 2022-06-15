"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPaymentIntentsResponse = void 0;
class ListPaymentIntentsResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListPaymentIntentsResponse.attributeTypeMap;
    }
}
exports.ListPaymentIntentsResponse = ListPaymentIntentsResponse;
ListPaymentIntentsResponse.discriminator = undefined;
ListPaymentIntentsResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<PaymentIntent>",
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
        "format": ""
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=ListPaymentIntentsResponse.js.map