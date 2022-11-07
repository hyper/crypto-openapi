"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicePayRequest = void 0;
class InvoicePayRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InvoicePayRequest.attributeTypeMap;
    }
}
exports.InvoicePayRequest = InvoicePayRequest;
InvoicePayRequest.discriminator = undefined;
InvoicePayRequest.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": "double"
    },
    {
        "name": "coupon",
        "baseName": "coupon",
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
//# sourceMappingURL=InvoicePayRequest.js.map