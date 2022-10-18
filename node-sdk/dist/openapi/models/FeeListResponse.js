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
        "name": "data",
        "baseName": "data",
        "type": "Array<IFee>",
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
//# sourceMappingURL=FeeListResponse.js.map