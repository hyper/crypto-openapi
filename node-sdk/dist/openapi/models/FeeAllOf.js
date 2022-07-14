"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeAllOf = void 0;
class FeeAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return FeeAllOf.attributeTypeMap;
    }
}
exports.FeeAllOf = FeeAllOf;
FeeAllOf.discriminator = undefined;
FeeAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "internal",
        "baseName": "internal",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "payment_intent",
        "baseName": "payment_intent",
        "type": "string | PaymentIntent",
        "format": ""
    },
    {
        "name": "percent",
        "baseName": "percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string | PayoutWallet",
        "format": ""
    }
];
//# sourceMappingURL=FeeAllOf.js.map