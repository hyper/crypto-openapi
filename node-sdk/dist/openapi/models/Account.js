"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Account.attributeTypeMap;
    }
}
exports.Account = Account;
Account.discriminator = undefined;
Account.attributeTypeMap = [
    {
        "name": "branding",
        "baseName": "branding",
        "type": "AccountBranding",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "ethWallet",
        "baseName": "eth_wallet",
        "type": "any",
        "format": ""
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "invoicePrefix",
        "baseName": "invoice_prefix",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "solWallet",
        "baseName": "sol_wallet",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=Account.js.map