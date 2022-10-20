"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyListResponse = void 0;
class ApiKeyListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ApiKeyListResponse.attributeTypeMap;
    }
}
exports.ApiKeyListResponse = ApiKeyListResponse;
ApiKeyListResponse.discriminator = undefined;
ApiKeyListResponse.attributeTypeMap = [
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
        "type": "Array<IApiKey>",
        "format": ""
    }
];
//# sourceMappingURL=ApiKeyListResponse.js.map