"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2005 = void 0;
class InlineResponse2005 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse2005.attributeTypeMap;
    }
}
exports.InlineResponse2005 = InlineResponse2005;
InlineResponse2005.discriminator = undefined;
InlineResponse2005.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<Product>",
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
//# sourceMappingURL=InlineResponse2005.js.map