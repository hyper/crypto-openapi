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
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
    },
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
        "name": "amount",
        "baseName": "amount",
        "type": "number",
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
        "type": "InvoiceChainEnum",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "InvoiceCurrencyEnum",
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
        "format": "date-time"
    },
    {
        "name": "fees",
        "baseName": "fees",
        "type": "Array<Fee>",
        "format": ""
    },
    {
        "name": "line_items",
        "baseName": "line_items",
        "type": "InvoiceAllOfLineItems",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    },
    {
        "name": "number",
        "baseName": "number",
        "type": "string",
        "format": ""
    },
    {
        "name": "payment",
        "baseName": "payment",
        "type": "Payment",
        "format": ""
    },
    {
        "name": "period",
        "baseName": "period",
        "type": "string | SubscriptionPeriod",
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
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "InvoiceStatusEnum",
        "format": ""
    },
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "string | Subscription",
        "format": ""
    },
    {
        "name": "transactions",
        "baseName": "transactions",
        "type": "Array<Transaction>",
        "format": ""
    },
    {
        "name": "transfers",
        "baseName": "transfers",
        "type": "Array<Transfer>",
        "format": ""
    },
    {
        "name": "trial_period_duration",
        "baseName": "trial_period_duration",
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
//# sourceMappingURL=Invoice.js.map