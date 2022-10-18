"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionCreateRequest = void 0;
class SubscriptionCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SubscriptionCreateRequest.attributeTypeMap;
    }
}
exports.SubscriptionCreateRequest = SubscriptionCreateRequest;
SubscriptionCreateRequest.discriminator = undefined;
SubscriptionCreateRequest.attributeTypeMap = [
    {
        "name": "cancel_at",
        "baseName": "cancel_at",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string",
        "format": ""
    },
    {
        "name": "line_items",
        "baseName": "line_items",
        "type": "Array<LineItem>",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
        "format": ""
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string",
        "format": ""
    },
    {
        "name": "trial_period_days",
        "baseName": "trial_period_days",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=SubscriptionCreateRequest.js.map