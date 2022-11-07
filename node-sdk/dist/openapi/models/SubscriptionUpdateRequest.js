"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionUpdateRequest = void 0;
class SubscriptionUpdateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SubscriptionUpdateRequest.attributeTypeMap;
    }
}
exports.SubscriptionUpdateRequest = SubscriptionUpdateRequest;
SubscriptionUpdateRequest.discriminator = undefined;
SubscriptionUpdateRequest.attributeTypeMap = [
    {
        "name": "cancel_at",
        "baseName": "cancel_at",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "cancel_at_period_end",
        "baseName": "cancel_at_period_end",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "current_period_end",
        "baseName": "current_period_end",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "current_period_start",
        "baseName": "current_period_start",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
        "format": ""
    },
    {
        "name": "pause_collection",
        "baseName": "pause_collection",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=SubscriptionUpdateRequest.js.map