"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceListResponse = void 0;
class PriceListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PriceListResponse.attributeTypeMap;
    }
}
exports.PriceListResponse = PriceListResponse;
PriceListResponse.discriminator = undefined;
PriceListResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<IPrice>",
        "format": ""
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
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=PriceListResponse.js.map