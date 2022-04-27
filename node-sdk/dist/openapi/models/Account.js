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
        "name": "connectedAccounts",
        "baseName": "connected_accounts",
        "type": "Array<any>",
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
        "type": "PayoutWallet",
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
        "name": "parentAccount",
        "baseName": "parent_account",
        "type": "any",
        "format": ""
    },
    {
        "name": "platformAccount",
        "baseName": "platform_account",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "solWallet",
        "baseName": "sol_wallet",
        "type": "PayoutWallet",
        "format": ""
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=Account.js.map