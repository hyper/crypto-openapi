"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionAllOf = void 0;
class TransactionAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return TransactionAllOf.attributeTypeMap;
    }
}
exports.TransactionAllOf = TransactionAllOf;
TransactionAllOf.discriminator = undefined;
TransactionAllOf.attributeTypeMap = [
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
        "name": "invoice",
        "baseName": "invoice",
        "type": "string | Invoice",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "TransactionAllOfStatusEnum",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "TransactionAllOfChainEnum",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "TransactionAllOfCurrencyEnum",
        "format": ""
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "string | Product",
        "format": ""
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string | Customer",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string | Wallet",
        "format": ""
    }
];
//# sourceMappingURL=TransactionAllOf.js.map