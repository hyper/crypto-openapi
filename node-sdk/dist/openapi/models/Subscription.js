"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
class Subscription {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Subscription.attributeTypeMap;
    }
}
exports.Subscription = Subscription;
Subscription.discriminator = undefined;
Subscription.attributeTypeMap = [
    {
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
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
        "name": "next_invoice",
        "baseName": "next_invoice",
        "type": "Invoice",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "SubscriptionStatusEnum",
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
        "name": "canceled_at",
        "baseName": "canceled_at",
        "type": "number",
        "format": ""
    },
    {
        "name": "invoices",
        "baseName": "invoices",
        "type": "Array<Invoice>",
        "format": ""
    },
    {
        "name": "payments",
        "baseName": "payments",
        "type": "Array<Payment>",
        "format": ""
    },
    {
        "name": "current_period",
        "baseName": "current_period",
        "type": "SubscriptionPeriod",
        "format": ""
    },
    {
        "name": "latest_period",
        "baseName": "latest_period",
        "type": "SubscriptionPeriod",
        "format": ""
    },
    {
        "name": "periods",
        "baseName": "periods",
        "type": "Array<SubscriptionPeriod>",
        "format": ""
    },
    {
        "name": "trial_period_duration",
        "baseName": "trial_period_duration",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=Subscription.js.map