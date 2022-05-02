"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesFeeData = void 0;
class InvoicesFeeData {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InvoicesFeeData.attributeTypeMap;
    }
}
exports.InvoicesFeeData = InvoicesFeeData;
InvoicesFeeData.discriminator = undefined;
InvoicesFeeData.attributeTypeMap = [
    {
        "name": "percent",
        "baseName": "percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=InvoicesFeeData.js.map