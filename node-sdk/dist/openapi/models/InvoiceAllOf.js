"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceAllOf = void 0;
class InvoiceAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InvoiceAllOf.attributeTypeMap;
    }
}
exports.InvoiceAllOf = InvoiceAllOf;
InvoiceAllOf.discriminator = undefined;
InvoiceAllOf.attributeTypeMap = [
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
        "name": "amount_paid",
        "baseName": "amount_paid",
        "type": "number",
        "format": ""
    },
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "InvoiceAllOfChainEnum",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "InvoiceAllOfCurrencyEnum",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "InvoiceAllOfStatusEnum",
        "format": ""
    },
    {
        "name": "due",
        "baseName": "due",
        "type": "number",
        "format": "date-time"
    },
    {
        "name": "number",
        "baseName": "number",
        "type": "string",
        "format": ""
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string | Customer",
        "format": ""
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string | Price",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string | Wallet",
        "format": ""
    },
    {
        "name": "payment",
        "baseName": "payment",
        "type": "Payment",
        "format": ""
    },
    {
        "name": "transactions",
        "baseName": "transactions",
        "type": "Array<Transaction>",
        "format": ""
    },
    {
        "name": "fees",
        "baseName": "fees",
        "type": "Array<Fee>",
        "format": ""
    },
    {
        "name": "transfers",
        "baseName": "transfers",
        "type": "Array<Transfer>",
        "format": ""
    },
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "string | Subscription",
        "format": ""
    },
    {
        "name": "subscription_period",
        "baseName": "subscription_period",
        "type": "string | SubscriptionPeriod",
        "format": ""
    },
    {
        "name": "line_items",
        "baseName": "line_items",
        "type": "InvoiceAllOfLineItems",
        "format": ""
    },
    {
        "name": "trial_period_duration",
        "baseName": "trial_period_duration",
        "type": "number",
        "format": ""
    },
    {
        "name": "send_reminders",
        "baseName": "send_reminders",
        "type": "string",
        "format": ""
    },
    {
        "name": "renewal",
        "baseName": "renewal",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=InvoiceAllOf.js.map