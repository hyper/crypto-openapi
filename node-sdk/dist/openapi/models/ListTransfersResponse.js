"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTransfersResponse = void 0;
class ListTransfersResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListTransfersResponse.attributeTypeMap;
    }
}
exports.ListTransfersResponse = ListTransfersResponse;
ListTransfersResponse.discriminator = undefined;
ListTransfersResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<Transfer>",
        "format": ""
    },
    {
        "name": "hasMore",
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
//# sourceMappingURL=ListTransfersResponse.js.map