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
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
    },
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ApiKeyTypeEnum",
        "format": ""
    },
    {
        "name": "admin",
        "baseName": "admin",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=ApiKey.js.map