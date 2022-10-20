"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCreateRequest = void 0;
class PriceCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PriceCreateRequest.attributeTypeMap;
    }
}
exports.PriceCreateRequest = PriceCreateRequest;
PriceCreateRequest.discriminator = undefined;
PriceCreateRequest.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": "double"
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "Chain",
        "format": ""
    },
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": "double"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "Currency",
        "format": ""
    },
    {
        "name": "custom_amount",
        "baseName": "custom_amount",
        "type": "CustomAmount",
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
        "name": "archived",
        "baseName": "archived",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=PriceCreateRequest.js.map