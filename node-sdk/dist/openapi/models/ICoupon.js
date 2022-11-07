"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICoupon = void 0;
class ICoupon {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ICoupon.attributeTypeMap;
    }
}
exports.ICoupon = ICoupon;
ICoupon.discriminator = undefined;
ICoupon.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
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
        "name": "created",
        "baseName": "created",
        "type": "number",
        "format": "double"
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
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
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
        "name": "object",
        "baseName": "object",
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
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "times_redeemed",
        "baseName": "times_redeemed",
        "type": "number",
        "format": "double"
    },
    {
        "name": "valid",
        "baseName": "valid",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=ICoupon.js.map