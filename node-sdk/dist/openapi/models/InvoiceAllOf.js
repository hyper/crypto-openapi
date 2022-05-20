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
        "type": "string | Account | any",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string",
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
        "name": "currency",
        "baseName": "currency",
        "type": "InvoiceAllOfCurrencyEnum",
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
        "name": "fees",
        "baseName": "fees",
        "type": "Array<Fee>",
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
        "name": "price",
        "baseName": "price",
        "type": "string | Price",
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
        "type": "InvoiceAllOfStatusEnum",
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
        "name": "wallet",
        "baseName": "wallet",
        "type": "string | Wallet",
        "format": ""
    },
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=InvoiceAllOf.js.map