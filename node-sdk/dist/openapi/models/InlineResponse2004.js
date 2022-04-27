"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2004 = void 0;
class InlineResponse2004 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse2004.attributeTypeMap;
    }
}
exports.InlineResponse2004 = InlineResponse2004;
InlineResponse2004.discriminator = undefined;
InlineResponse2004.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<Payment>",
        "format": ""
    },
    {
        "name": "hasMore",
        "baseName": "has_more",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number",
        "format": ""
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=InlineResponse2004.js.map