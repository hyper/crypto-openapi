"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Payment.attributeTypeMap;
    }
}
exports.Payment = Payment;
Payment.discriminator = undefined;
Payment.attributeTypeMap = [
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
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
    },
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
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
        "name": "error_message",
        "baseName": "error_message",
        "type": "string",
        "format": ""
    },
    {
        "name": "exchange_rate",
        "baseName": "exchange_rate",
        "type": "number",
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
        "type": "PaymentStatusEnum",
        "format": ""
    },
    {
        "name": "usd_amount",
        "baseName": "usd_amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string | Wallet",
        "format": ""
    }
];
//# sourceMappingURL=Payment.js.map