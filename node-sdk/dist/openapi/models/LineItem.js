"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor() {
    }
    static getAttributeTypeMap() {
        return LineItem.attributeTypeMap;
    }
}
exports.LineItem = LineItem;
LineItem.discriminator = undefined;
LineItem.attributeTypeMap = [
    {
        "name": "price",
        "baseName": "price",
        "type": "string | Price",
        "format": ""
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number",
        "format": ""
    },
    {
        "name": "price_data",
        "baseName": "price_data",
        "type": "Price",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=LineItem.js.map