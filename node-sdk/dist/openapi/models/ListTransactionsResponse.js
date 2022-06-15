"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTransactionsResponse = void 0;
class ListTransactionsResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListTransactionsResponse.attributeTypeMap;
    }
}
exports.ListTransactionsResponse = ListTransactionsResponse;
ListTransactionsResponse.discriminator = undefined;
ListTransactionsResponse.attributeTypeMap = [
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
//# sourceMappingURL=ListTransactionsResponse.js.map