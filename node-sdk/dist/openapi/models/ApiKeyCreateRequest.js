"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyCreateRequest = void 0;
class ApiKeyCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ApiKeyCreateRequest.attributeTypeMap;
    }
}
exports.ApiKeyCreateRequest = ApiKeyCreateRequest;
ApiKeyCreateRequest.discriminator = undefined;
ApiKeyCreateRequest.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "note",
        "baseName": "note",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ApiKeyType",
        "format": ""
    }
];
//# sourceMappingURL=ApiKeyCreateRequest.js.map