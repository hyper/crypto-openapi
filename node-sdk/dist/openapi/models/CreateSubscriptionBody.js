"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubscriptionBody = void 0;
class CreateSubscriptionBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateSubscriptionBody.attributeTypeMap;
    }
}
exports.CreateSubscriptionBody = CreateSubscriptionBody;
CreateSubscriptionBody.discriminator = undefined;
CreateSubscriptionBody.attributeTypeMap = [
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
//# sourceMappingURL=CreateSubscriptionBody.js.map