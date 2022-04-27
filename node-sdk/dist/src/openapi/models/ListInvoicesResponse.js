"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInvoicesResponse = void 0;
class ListInvoicesResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListInvoicesResponse.attributeTypeMap;
    }
}
exports.ListInvoicesResponse = ListInvoicesResponse;
ListInvoicesResponse.discriminator = undefined;
ListInvoicesResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<Invoice>",
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
//# sourceMappingURL=ListInvoicesResponse.js.map