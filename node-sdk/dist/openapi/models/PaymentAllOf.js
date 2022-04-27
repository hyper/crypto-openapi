"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAllOf = void 0;
class PaymentAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaymentAllOf.attributeTypeMap;
    }
}
exports.PaymentAllOf = PaymentAllOf;
PaymentAllOf.discriminator = undefined;
PaymentAllOf.attributeTypeMap = [
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
        "name": "errorMessage",
        "baseName": "error_message",
        "type": "string",
        "format": ""
    },
    {
        "name": "exchangeRate",
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
        "type": "PaymentAllOfStatusEnum",
        "format": ""
    },
    {
        "name": "usdAmount",
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
//# sourceMappingURL=PaymentAllOf.js.map