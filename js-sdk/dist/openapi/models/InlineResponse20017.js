"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse20017 = void 0;
class InlineResponse20017 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse20017.attributeTypeMap;
    }
}
exports.InlineResponse20017 = InlineResponse20017;
InlineResponse20017.discriminator = undefined;
InlineResponse20017.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Set<InlineResponse20017Data>",
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
//# sourceMappingURL=InlineResponse20017.js.map