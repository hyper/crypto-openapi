"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferData = void 0;
class TransferData {
    constructor() {
    }
    static getAttributeTypeMap() {
        return TransferData.attributeTypeMap;
    }
}
exports.TransferData = TransferData;
TransferData.discriminator = undefined;
TransferData.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "invoice",
        "baseName": "invoice",
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
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=TransferData.js.map