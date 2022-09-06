"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyAllOf = void 0;
class ApiKeyAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ApiKeyAllOf.attributeTypeMap;
    }
}
exports.ApiKeyAllOf = ApiKeyAllOf;
ApiKeyAllOf.discriminator = undefined;
ApiKeyAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
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
        "name": "key",
        "baseName": "key",
        "type": "ApiKeyAllOfKeyEnum",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ApiKeyAllOfTypeEnum",
        "format": ""
    },
    {
        "name": "last_used",
        "baseName": "last_used",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "admin",
        "baseName": "admin",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=ApiKeyAllOf.js.map