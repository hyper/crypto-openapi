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
        "name": "next_invoice",
        "baseName": "next_invoice",
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
//# sourceMappingURL=SubscriptionAllOf.js.map