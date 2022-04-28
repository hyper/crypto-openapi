"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogAllOf = void 0;
class LogAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return LogAllOf.attributeTypeMap;
    }
}
exports.LogAllOf = LogAllOf;
LogAllOf.discriminator = undefined;
LogAllOf.attributeTypeMap = [
    {
        "name": "api_key",
        "baseName": "api_key",
        "type": "string",
        "format": ""
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "any",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "any",
        "format": ""
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string",
        "format": ""
    },
    {
        "name": "method",
        "baseName": "method",
        "type": "LogAllOfMethodEnum",
        "format": ""
    },
    {
        "name": "origin",
        "baseName": "origin",
        "type": "string",
        "format": ""
    },
    {
        "name": "query",
        "baseName": "query",
        "type": "any",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": ""
    },
    {
        "name": "success",
        "baseName": "success",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=LogAllOf.js.map