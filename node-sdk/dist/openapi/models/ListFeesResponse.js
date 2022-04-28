"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFeesResponse = void 0;
class ListFeesResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListFeesResponse.attributeTypeMap;
    }
}
exports.ListFeesResponse = ListFeesResponse;
ListFeesResponse.discriminator = undefined;
ListFeesResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Set<Fee>",
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
//# sourceMappingURL=ListFeesResponse.js.map