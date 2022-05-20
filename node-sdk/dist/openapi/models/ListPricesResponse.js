"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPricesResponse = void 0;
class ListPricesResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListPricesResponse.attributeTypeMap;
    }
}
exports.ListPricesResponse = ListPricesResponse;
ListPricesResponse.discriminator = undefined;
ListPricesResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<Price>",
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
//# sourceMappingURL=ListPricesResponse.js.map