"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2002 = void 0;
class InlineResponse2002 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse2002.attributeTypeMap;
    }
}
exports.InlineResponse2002 = InlineResponse2002;
InlineResponse2002.discriminator = undefined;
InlineResponse2002.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<Invoice>",
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
//# sourceMappingURL=InlineResponse2002.js.map