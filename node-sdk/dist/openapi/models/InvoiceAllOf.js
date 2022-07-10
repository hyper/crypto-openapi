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
        "name": "amount",
        "baseName": "amount",
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
        "name": "customer",
        "baseName": "customer",
        "type": "string | Customer",
        "format": ""
    },
    {
        "name": "due",
        "baseName": "due",
        "type": "number",
        "format": ""
    },
    {
        "name": "line_items",
        "baseName": "line_items",
        "type": "Array<InvoiceAllOfLineItems>",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    },
    {
        "name": "notify",
        "baseName": "notify",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "number",
        "baseName": "number",
        "type": "string",
        "format": ""
    },
    {
        "name": "period_end",
        "baseName": "period_end",
        "type": "number",
        "format": ""
    },
    {
        "name": "period_start",
        "baseName": "period_start",
        "type": "number",
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
        "name": "send_reminders",
        "baseName": "send_reminders",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "InvoiceAllOfStatusEnum",
        "format": ""
    },
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "string | Subscription",
        "format": ""
    },
    {
        "name": "trial_period_duration",
        "baseName": "trial_period_duration",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=InvoiceAllOf.js.map