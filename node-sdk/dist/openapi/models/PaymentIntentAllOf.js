"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIntentAllOf = void 0;
class PaymentIntentAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaymentIntentAllOf.attributeTypeMap;
    }
}
exports.PaymentIntentAllOf = PaymentIntentAllOf;
PaymentIntentAllOf.discriminator = undefined;
PaymentIntentAllOf.attributeTypeMap = [
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
        "name": "subscription",
        "baseName": "subscription",
        "type": "string | Subscription",
        "format": ""
    },
    {
        "name": "checkout",
        "baseName": "checkout",
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
        "type": "Array<LineItem>",
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
        "name": "amount",
        "baseName": "amount",
        "type": "number",
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
        "name": "status",
        "baseName": "status",
        "type": "PaymentIntentAllOfStatusEnum",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "PaymentIntentAllOfChainEnum",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "PaymentIntentAllOfCurrencyEnum",
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
//# sourceMappingURL=PaymentIntentAllOf.js.map