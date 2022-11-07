"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRequest = void 0;
class IRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IRequest.attributeTypeMap;
    }
}
exports.IRequest = IRequest;
IRequest.discriminator = undefined;
IRequest.attributeTypeMap = [
    {
        "name": "api_key",
        "baseName": "api_key",
        "type": "string",
        "format": ""
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "{ [key: string]: any; }",
        "format": ""
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "Headers",
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
        "type": "string",
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
        "type": "{ [key: string]: any; }",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=IRequest.js.map