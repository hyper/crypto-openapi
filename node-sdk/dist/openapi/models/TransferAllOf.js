"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferAllOf = void 0;
class TransferAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return TransferAllOf.attributeTypeMap;
    }
}
exports.TransferAllOf = TransferAllOf;
TransferAllOf.discriminator = undefined;
TransferAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
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
        "name": "invoice",
        "baseName": "invoice",
        "type": "string | Invoice",
        "format": ""
    },
    {
        "name": "percent",
        "baseName": "percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "payment_intent",
        "baseName": "payment_intent",
        "type": "string | PaymentIntent",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string | PayoutWallet",
        "format": ""
    }
];
//# sourceMappingURL=TransferAllOf.js.map