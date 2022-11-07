"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponListResponse = void 0;
class CouponListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CouponListResponse.attributeTypeMap;
    }
}
exports.CouponListResponse = CouponListResponse;
CouponListResponse.discriminator = undefined;
CouponListResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<ICoupon>",
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
//# sourceMappingURL=CouponListResponse.js.map