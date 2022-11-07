"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISubscription = void 0;
class ISubscription {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ISubscription.attributeTypeMap;
    }
}
exports.ISubscription = ISubscription;
ISubscription.discriminator = undefined;
ISubscription.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
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
        "name": "canceled_at",
        "baseName": "canceled_at",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "coupon",
        "baseName": "coupon",
        "type": "string",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "number",
        "format": "double"
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
        "name": "customer",
        "baseName": "customer",
        "type": "string",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "latest_invoice",
        "baseName": "latest_invoice",
        "type": "IInvoice",
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
        "name": "object",
        "baseName": "object",
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
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string",
        "format": ""
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "SubscriptionStatus",
        "format": ""
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "trial_period_days",
        "baseName": "trial_period_days",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=ISubscription.js.map