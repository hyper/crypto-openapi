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
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "number",
        "baseName": "number",
        "type": "string",
        "format": ""
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "string | Product",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "InvoiceStatusEnum",
        "format": ""
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "string",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string | Wallet",
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
        "name": "payments",
        "baseName": "payments",
        "type": "Array<Payment>",
        "format": ""
    }
];
//# sourceMappingURL=Invoice.js.map