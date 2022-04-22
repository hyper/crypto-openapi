"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineObject5 = void 0;
class InlineObject5 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineObject5.attributeTypeMap;
    }
}
exports.InlineObject5 = InlineObject5;
InlineObject5.discriminator = undefined;
InlineObject5.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpointUrl",
        "baseName": "endpoint_url",
        "type": "string",
        "format": ""
    },
    {
        "name": "eventTypes",
        "baseName": "event_types",
        "type": "Array<any>",
        "format": ""
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=InlineObject5.js.map