"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse20010Request = void 0;
class InlineResponse20010Request {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse20010Request.attributeTypeMap;
    }
}
exports.InlineResponse20010Request = InlineResponse20010Request;
InlineResponse20010Request.discriminator = undefined;
InlineResponse20010Request.attributeTypeMap = [
    {
        "name": "apiKey",
        "baseName": "api_key",
        "type": "string",
        "format": ""
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "InlineResponse20010RequestBody",
        "format": ""
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "InlineResponse20010RequestHeaders",
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
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=InlineResponse20010Request.js.map