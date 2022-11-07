"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceUpdateRequest = void 0;
class InvoiceUpdateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InvoiceUpdateRequest.attributeTypeMap;
    }
}
exports.InvoiceUpdateRequest = InvoiceUpdateRequest;
InvoiceUpdateRequest.discriminator = undefined;
InvoiceUpdateRequest.attributeTypeMap = [
    {
        "name": "due",
        "baseName": "due",
        "type": "Date | number",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
        "format": ""
    },
    {
        "name": "notify",
        "baseName": "notify",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "InvoiceStatus",
        "format": ""
    }
];
//# sourceMappingURL=InvoiceUpdateRequest.js.map