"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineObject8 = void 0;
class InlineObject8 {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineObject8.attributeTypeMap;
    }
}
exports.InlineObject8 = InlineObject8;
InlineObject8.discriminator = undefined;
InlineObject8.attributeTypeMap = [
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
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=InlineObject8.js.map