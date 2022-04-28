"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
class Log {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Log.attributeTypeMap;
    }
}
exports.Log = Log;
Log.discriminator = undefined;
Log.attributeTypeMap = [
    {
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "id",
        "baseName": "id",
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
        "type": "LogMethodEnum",
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
    }
];
//# sourceMappingURL=Log.js.map