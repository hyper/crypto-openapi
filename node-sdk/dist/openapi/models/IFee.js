"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFee = void 0;
class IFee {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IFee.attributeTypeMap;
    }
}
exports.IFee = IFee;
IFee.discriminator = undefined;
IFee.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
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
        "name": "created",
        "baseName": "created",
        "type": "number",
        "format": "double"
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
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
        "type": "string",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string",
        "format": ""
    },
    {
        "name": "percent",
        "baseName": "percent",
        "type": "number",
        "format": "double"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=IFee.js.map