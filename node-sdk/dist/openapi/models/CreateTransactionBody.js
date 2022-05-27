"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionBody = void 0;
class CreateTransactionBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateTransactionBody.attributeTypeMap;
    }
}
exports.CreateTransactionBody = CreateTransactionBody;
CreateTransactionBody.discriminator = undefined;
CreateTransactionBody.attributeTypeMap = [
    {
        "name": "transaction_hash",
        "baseName": "transaction_hash",
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
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=CreateTransactionBody.js.map