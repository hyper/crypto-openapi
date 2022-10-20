"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IInvoice = void 0;
class IInvoice {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IInvoice.attributeTypeMap;
    }
}
exports.IInvoice = IInvoice;
IInvoice.discriminator = undefined;
IInvoice.attributeTypeMap = [
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
        "name": "status",
        "baseName": "status",
        "type": "InvoiceStatus",
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
        "type": "string",
        "format": ""
    },
    {
        "name": "customer",
        "baseName": "customer",
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
        "name": "trial_period_days",
        "baseName": "trial_period_days",
        "type": "number",
        "format": "double"
    },
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "string",
        "format": ""
    },
    {
        "name": "period_start",
        "baseName": "period_start",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "period_end",
        "baseName": "period_end",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "due",
        "baseName": "due",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "notify",
        "baseName": "notify",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "invoice_pdf",
        "baseName": "invoice_pdf",
        "type": "string",
        "format": ""
    },
    {
        "name": "hosted_invoice_url",
        "baseName": "hosted_invoice_url",
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
//# sourceMappingURL=IInvoice.js.map