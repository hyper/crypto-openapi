"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Invoice.attributeTypeMap;
    }
}
exports.Invoice = Invoice;
Invoice.discriminator = undefined;
Invoice.attributeTypeMap = [
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
        "name": "status",
        "baseName": "status",
        "type": "InvoiceStatusEnum",
        "format": ""
    },
    {
        "name": "number",
        "baseName": "number",
        "type": "string",
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
        "name": "line_items",
        "baseName": "line_items",
        "type": "Array<InvoiceAllOfLineItems>",
        "format": ""
    },
    {
        "name": "trial_period_days",
        "baseName": "trial_period_days",
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
        "name": "period_start",
        "baseName": "period_start",
        "type": "number",
        "format": ""
    },
    {
        "name": "period_end",
        "baseName": "period_end",
        "type": "number",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "InvoiceChainEnum",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "send_reminders",
        "baseName": "send_reminders",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "due",
        "baseName": "due",
        "type": "number",
        "format": ""
    },
    {
        "name": "notify",
        "baseName": "notify",
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
//# sourceMappingURL=Invoice.js.map