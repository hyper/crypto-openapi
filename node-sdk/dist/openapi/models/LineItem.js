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
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string",
        "format": ""
    },
    {
        "name": "price_data",
        "baseName": "price_data",
        "type": "IPrice",
        "format": ""
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=LineItem.js.map