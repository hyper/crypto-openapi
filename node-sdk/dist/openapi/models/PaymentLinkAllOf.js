"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLinkAllOf = void 0;
class PaymentLinkAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaymentLinkAllOf.attributeTypeMap;
    }
}
exports.PaymentLinkAllOf = PaymentLinkAllOf;
PaymentLinkAllOf.discriminator = undefined;
PaymentLinkAllOf.attributeTypeMap = [
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
        "name": "active",
        "baseName": "active",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "after_completion",
        "baseName": "after_completion",
        "type": "PaymentLinkAllOfAfterCompletion",
        "format": ""
    },
    {
        "name": "line_items",
        "baseName": "line_items",
        "type": "Array<LineItem>",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "PaymentLinkAllOfCurrencyEnum",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "PaymentLinkAllOfChainEnum",
        "format": ""
    },
    {
        "name": "expires_at",
        "baseName": "expires_at",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "max_usages",
        "baseName": "max_usages",
        "type": "number",
        "format": ""
    },
    {
        "name": "remaining_stock",
        "baseName": "remaining_stock",
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
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=PaymentLinkAllOf.js.map