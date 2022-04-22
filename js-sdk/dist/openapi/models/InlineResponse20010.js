"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse20010 = void 0;
class InlineResponse20010 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse20010.attributeTypeMap;
    }
}
exports.InlineResponse20010 = InlineResponse20010;
InlineResponse20010.discriminator = undefined;
InlineResponse20010.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "string",
        "format": ""
    },
    {
        "name": "request",
        "baseName": "request",
        "type": "InlineResponse20010Request",
        "format": ""
    },
    {
        "name": "response",
        "baseName": "response",
        "type": "InlineResponse20010Response",
        "format": ""
    }
];
//# sourceMappingURL=InlineResponse20010.js.map