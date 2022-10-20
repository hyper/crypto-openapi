"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPrice = void 0;
class IPrice {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IPrice.attributeTypeMap;
    }
}
exports.IPrice = IPrice;
IPrice.discriminator = undefined;
IPrice.attributeTypeMap = [
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
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": "double"
    },
    {
        "name": "custom_amount",
        "baseName": "custom_amount",
        "type": "CustomAmount",
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
        "name": "product",
        "baseName": "product",
        "type": "string",
        "format": ""
    },
    {
        "name": "base_price",
        "baseName": "base_price",
        "type": "BasePrice",
        "format": ""
    },
    {
        "name": "billing_period_days",
        "baseName": "billing_period_days",
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
        "name": "archived",
        "baseName": "archived",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
        "format": ""
    }
];
//# sourceMappingURL=IPrice.js.map