"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineObject = void 0;
class InlineObject {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineObject.attributeTypeMap;
    }
}
exports.InlineObject = InlineObject;
InlineObject.discriminator = undefined;
InlineObject.attributeTypeMap = [
    {
        "name": "price",
        "baseName": "price",
        "type": "string",
        "format": ""
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string",
        "format": ""
    },
    {
        "name": "pause_collection",
        "baseName": "pause_collection",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "cancel_at",
        "baseName": "cancel_at",
        "type": "number",
        "format": ""
    },
    {
        "name": "trial_period_duration",
        "baseName": "trial_period_duration",
        "type": "number",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=InlineObject.js.map