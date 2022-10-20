"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPaymentIntent = void 0;
class IPaymentIntent {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IPaymentIntent.attributeTypeMap;
    }
}
exports.IPaymentIntent = IPaymentIntent;
IPaymentIntent.discriminator = undefined;
IPaymentIntent.attributeTypeMap = [
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
        "name": "created",
        "baseName": "created",
        "type": "number",
        "format": "double"
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
        "type": "string",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string",
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
        "type": "string",
        "format": ""
    },
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "string",
        "format": ""
    },
    {
        "name": "checkout",
        "baseName": "checkout",
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
        "name": "line_items",
        "baseName": "line_items",
        "type": "Array<LineItem>",
        "format": ""
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "PaymentIntentStatus",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "Chain",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": "double"
    },
    {
        "name": "usd_amount",
        "baseName": "usd_amount",
        "type": "number",
        "format": "double"
    },
    {
        "name": "exchange_rate",
        "baseName": "exchange_rate",
        "type": "number",
        "format": "double"
    },
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": "double"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "Currency",
        "format": ""
    },
    {
        "name": "last_payment_error",
        "baseName": "last_payment_error",
        "type": "string",
        "format": ""
    },
    {
        "name": "receipt_pdf",
        "baseName": "receipt_pdf",
        "type": "string",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
        "format": ""
    }
];
//# sourceMappingURL=IPaymentIntent.js.map