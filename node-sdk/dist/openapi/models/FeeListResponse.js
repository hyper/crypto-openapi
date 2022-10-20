"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeListResponse = void 0;
class FeeListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return FeeListResponse.attributeTypeMap;
    }
}
exports.FeeListResponse = FeeListResponse;
FeeListResponse.discriminator = undefined;
FeeListResponse.attributeTypeMap = [
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
        "type": "Array<IFee>",
        "format": ""
    }
];
//# sourceMappingURL=FeeListResponse.js.map