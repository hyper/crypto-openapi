"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesLineItems = void 0;
class InvoicesLineItems {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InvoicesLineItems.attributeTypeMap;
    }
}
exports.InvoicesLineItems = InvoicesLineItems;
InvoicesLineItems.discriminator = undefined;
InvoicesLineItems.attributeTypeMap = [
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
//# sourceMappingURL=InvoicesLineItems.js.map