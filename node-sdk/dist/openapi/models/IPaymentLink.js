"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPaymentLink = void 0;
class IPaymentLink {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IPaymentLink.attributeTypeMap;
    }
}
exports.IPaymentLink = IPaymentLink;
IPaymentLink.discriminator = undefined;
IPaymentLink.attributeTypeMap = [
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
        "name": "active",
        "baseName": "active",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": ""
    },
    {
        "name": "after_completion",
        "baseName": "after_completion",
        "type": "AfterCompletion",
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
        "type": "Currency",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "Chain",
        "format": ""
    },
    {
        "name": "expires_at",
        "baseName": "expires_at",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "max_usages",
        "baseName": "max_usages",
        "type": "number",
        "format": "double"
    },
    {
        "name": "remaining_stock",
        "baseName": "remaining_stock",
        "type": "number",
        "format": "double"
    },
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": "double"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
        "format": ""
    }
];
//# sourceMappingURL=IPaymentLink.js.map