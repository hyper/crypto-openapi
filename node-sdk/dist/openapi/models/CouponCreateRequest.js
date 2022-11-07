"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponCreateRequest = void 0;
class CouponCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CouponCreateRequest.attributeTypeMap;
    }
}
exports.CouponCreateRequest = CouponCreateRequest;
CouponCreateRequest.discriminator = undefined;
CouponCreateRequest.attributeTypeMap = [
    {
        "name": "amount_off",
        "baseName": "amount_off",
        "type": "number",
        "format": "double"
    },
    {
        "name": "archived",
        "baseName": "archived",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "Chain",
        "format": ""
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "Currency",
        "format": ""
    },
    {
        "name": "duration",
        "baseName": "duration",
        "type": "CouponDuration",
        "format": ""
    },
    {
        "name": "duration_in_days",
        "baseName": "duration_in_days",
        "type": "number",
        "format": "double"
    },
    {
        "name": "max_redemptions",
        "baseName": "max_redemptions",
        "type": "number",
        "format": "double"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "percent_off",
        "baseName": "percent_off",
        "type": "number",
        "format": "double"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "redeem_by",
        "baseName": "redeem_by",
        "type": "Date | number",
        "format": ""
    }
];
//# sourceMappingURL=CouponCreateRequest.js.map