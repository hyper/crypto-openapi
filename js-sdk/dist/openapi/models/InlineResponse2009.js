"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse2009 = void 0;
class InlineResponse2009 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse2009.attributeTypeMap;
    }
}
exports.InlineResponse2009 = InlineResponse2009;
InlineResponse2009.discriminator = undefined;
InlineResponse2009.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Set<any>",
        "format": ""
    },
    {
        "name": "hasMore",
        "baseName": "has_more",
        "type": "string",
        "format": ""
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=InlineResponse2009.js.map