"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ILog = void 0;
class ILog {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ILog.attributeTypeMap;
    }
}
exports.ILog = ILog;
ILog.discriminator = undefined;
ILog.attributeTypeMap = [
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
        "name": "request",
        "baseName": "request",
        "type": "IRequest",
        "format": ""
    },
    {
        "name": "response",
        "baseName": "response",
        "type": "IResponse",
        "format": ""
    }
];
//# sourceMappingURL=ILog.js.map