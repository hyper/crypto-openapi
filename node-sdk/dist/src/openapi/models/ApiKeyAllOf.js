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
        "name": "admin",
        "baseName": "admin",
        "type": "boolean",
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
        "type": "ApiKeyAllOfTypeEnum",
        "format": ""
    }
];
//# sourceMappingURL=ApiKeyAllOf.js.map