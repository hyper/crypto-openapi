"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceListResponse = void 0;
class InvoiceListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InvoiceListResponse.attributeTypeMap;
    }
}
exports.InvoiceListResponse = InvoiceListResponse;
InvoiceListResponse.discriminator = undefined;
InvoiceListResponse.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": "double"
    },
    {
        "name": "has_more",
        "baseName": "has_more",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number",
        "format": "double"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<IInvoice>",
        "format": ""
    }
];
//# sourceMappingURL=InvoiceListResponse.js.map