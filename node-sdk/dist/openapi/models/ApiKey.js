"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKey = void 0;
class ApiKey {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ApiKey.attributeTypeMap;
    }
}
exports.ApiKey = ApiKey;
ApiKey.discriminator = undefined;
ApiKey.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "admin",
        "baseName": "admin",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "ApiKeyKeyEnum",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ApiKeyTypeEnum",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "last_used",
        "baseName": "last_used",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=ApiKey.js.map