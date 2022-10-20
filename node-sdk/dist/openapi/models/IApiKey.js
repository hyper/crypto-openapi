"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IApiKey = void 0;
class IApiKey {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IApiKey.attributeTypeMap;
    }
}
exports.IApiKey = IApiKey;
IApiKey.discriminator = undefined;
IApiKey.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "number",
        "format": "double"
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
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ApiKeyType",
        "format": ""
    },
    {
        "name": "last_used",
        "baseName": "last_used",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "admin",
        "baseName": "admin",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=IApiKey.js.map