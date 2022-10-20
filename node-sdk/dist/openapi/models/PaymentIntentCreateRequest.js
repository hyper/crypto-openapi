"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentIntentCreateRequest = void 0;
class PaymentIntentCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaymentIntentCreateRequest.attributeTypeMap;
    }
}
exports.PaymentIntentCreateRequest = PaymentIntentCreateRequest;
PaymentIntentCreateRequest.discriminator = undefined;
PaymentIntentCreateRequest.attributeTypeMap = [
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
        "name": "invoice",
        "baseName": "invoice",
        "type": "string",
        "format": ""
    },
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "string",
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
    }
];
//# sourceMappingURL=PaymentIntentCreateRequest.js.map