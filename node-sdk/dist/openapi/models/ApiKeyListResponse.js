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
        "name": "data",
        "baseName": "data",
        "type": "Array<IApiKey>",
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
//# sourceMappingURL=ApiKeyListResponse.js.map