"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceCreateRequest = void 0;
class InvoiceCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InvoiceCreateRequest.attributeTypeMap;
    }
}
exports.InvoiceCreateRequest = InvoiceCreateRequest;
InvoiceCreateRequest.discriminator = undefined;
InvoiceCreateRequest.attributeTypeMap = [
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
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
    }
];
//# sourceMappingURL=InvoiceCreateRequest.js.map