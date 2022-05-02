"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPaymentsResponse = void 0;
class ListPaymentsResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListPaymentsResponse.attributeTypeMap;
    }
}
exports.ListPaymentsResponse = ListPaymentsResponse;
ListPaymentsResponse.discriminator = undefined;
ListPaymentsResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Set<Payment>",
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
//# sourceMappingURL=ListPaymentsResponse.js.map