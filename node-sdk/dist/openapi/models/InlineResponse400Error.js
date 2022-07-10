"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse400Error = void 0;
class InlineResponse400Error {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse400Error.attributeTypeMap;
    }
}
exports.InlineResponse400Error = InlineResponse400Error;
InlineResponse400Error.discriminator = undefined;
InlineResponse400Error.attributeTypeMap = [
    {
        "name": "message",
        "baseName": "message",
        "type": "string",
        "format": ""
    },
    {
        "name": "param",
        "baseName": "param",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=InlineResponse400Error.js.map