"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLinkCreateRequest = void 0;
class PaymentLinkCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaymentLinkCreateRequest.attributeTypeMap;
    }
}
exports.PaymentLinkCreateRequest = PaymentLinkCreateRequest;
PaymentLinkCreateRequest.discriminator = undefined;
PaymentLinkCreateRequest.attributeTypeMap = [
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "after_completion",
        "baseName": "after_completion",
        "type": "AfterCompletion",
        "format": ""
    },
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": "double"
    },
    {
        "name": "expires_at",
        "baseName": "expires_at",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "line_items",
        "baseName": "line_items",
        "type": "Array<LineItem>",
        "format": ""
    },
    {
        "name": "max_usages",
        "baseName": "max_usages",
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
//# sourceMappingURL=PaymentLinkCreateRequest.js.map