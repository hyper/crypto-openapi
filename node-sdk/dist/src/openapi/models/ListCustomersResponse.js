"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomersResponse = void 0;
class ListCustomersResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListCustomersResponse.attributeTypeMap;
    }
}
exports.ListCustomersResponse = ListCustomersResponse;
ListCustomersResponse.discriminator = undefined;
ListCustomersResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Set<Customer>",
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
//# sourceMappingURL=ListCustomersResponse.js.map