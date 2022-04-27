"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2008 = void 0;
class InlineResponse2008 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse2008.attributeTypeMap;
    }
}
exports.InlineResponse2008 = InlineResponse2008;
InlineResponse2008.discriminator = undefined;
InlineResponse2008.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<Webhook>",
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
//# sourceMappingURL=InlineResponse2008.js.map