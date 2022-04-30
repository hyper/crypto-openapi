"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransferBody = void 0;
class CreateTransferBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateTransferBody.attributeTypeMap;
    }
}
exports.CreateTransferBody = CreateTransferBody;
CreateTransferBody.discriminator = undefined;
CreateTransferBody.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "string",
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
        "name": "wallet",
        "baseName": "wallet",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CreateTransferBody.js.map