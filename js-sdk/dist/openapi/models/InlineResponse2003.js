"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2003 = void 0;
class InlineResponse2003 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse2003.attributeTypeMap;
    }
}
exports.InlineResponse2003 = InlineResponse2003;
InlineResponse2003.discriminator = undefined;
InlineResponse2003.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Set<InlineResponse2003Data>",
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
//# sourceMappingURL=InlineResponse2003.js.map