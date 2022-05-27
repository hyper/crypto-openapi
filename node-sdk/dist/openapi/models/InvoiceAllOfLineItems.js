"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceAllOfLineItems = void 0;
class InvoiceAllOfLineItems {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InvoiceAllOfLineItems.attributeTypeMap;
    }
}
exports.InvoiceAllOfLineItems = InvoiceAllOfLineItems;
InvoiceAllOfLineItems.discriminator = undefined;
InvoiceAllOfLineItems.attributeTypeMap = [
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
//# sourceMappingURL=InvoiceAllOfLineItems.js.map