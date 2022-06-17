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
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "InvoiceAllOfStatusEnum",
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
        "name": "trial_period_duration",
        "baseName": "trial_period_duration",
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
        "name": "due",
        "baseName": "due",
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