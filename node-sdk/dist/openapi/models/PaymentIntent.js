"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIntent = void 0;
class PaymentIntent {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaymentIntent.attributeTypeMap;
    }
}
exports.PaymentIntent = PaymentIntent;
PaymentIntent.discriminator = undefined;
PaymentIntent.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
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
        "name": "hash",
        "baseName": "hash",
        "type": "string",
        "format": ""
    },
    {
        "name": "invoice",
        "baseName": "invoice",
        "type": "string | Invoice",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "PaymentIntentStatusEnum",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "PaymentIntentChainEnum",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "PaymentIntentCurrencyEnum",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "string | Subscription",
        "format": ""
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string | Price",
        "format": ""
    },
    {
        "name": "line_items",
        "baseName": "line_items",
        "type": "Array<PaymentIntentAllOfLineItems>",
        "format": ""
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string | Customer",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string | Wallet",
        "format": ""
    },
    {
        "name": "usd_amount",
        "baseName": "usd_amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "exchange_rate",
        "baseName": "exchange_rate",
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
        "name": "last_payment_error",
        "baseName": "last_payment_error",
        "type": "string",
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
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=PaymentIntent.js.map