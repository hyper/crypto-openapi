"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionAllOf = void 0;
class SubscriptionAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SubscriptionAllOf.attributeTypeMap;
    }
}
exports.SubscriptionAllOf = SubscriptionAllOf;
SubscriptionAllOf.discriminator = undefined;
SubscriptionAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string | Price",
        "format": ""
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string | Customer",
        "format": ""
    },
    {
        "name": "latest_invoice",
        "baseName": "latest_invoice",
        "type": "Invoice",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "SubscriptionAllOfStatusEnum",
        "format": ""
    },
    {
        "name": "pause_collection",
        "baseName": "pause_collection",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "canceled_at",
        "baseName": "canceled_at",
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
        "name": "line_items",
        "baseName": "line_items",
        "type": "Array<PaymentIntentAllOfLineItems>",
        "format": ""
    },
    {
        "name": "current_period_start",
        "baseName": "current_period_start",
        "type": "number",
        "format": ""
    },
    {
        "name": "current_period_end",
        "baseName": "current_period_end",
        "type": "number",
        "format": ""
    },
    {
        "name": "cancel_at_period_end",
        "baseName": "cancel_at_period_end",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "cancel_at",
        "baseName": "cancel_at",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=SubscriptionAllOf.js.map