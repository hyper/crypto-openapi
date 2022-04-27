"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2006 = void 0;
class InlineResponse2006 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse2006.attributeTypeMap;
    }
}
exports.InlineResponse2006 = InlineResponse2006;
InlineResponse2006.discriminator = undefined;
InlineResponse2006.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<Transfer>",
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
//# sourceMappingURL=InlineResponse2006.js.map