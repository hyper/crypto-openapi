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
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "branding",
        "baseName": "branding",
        "type": "AccountAllOfBranding",
        "format": ""
    },
    {
        "name": "connectedAccounts",
        "baseName": "connected_accounts",
        "type": "Array<string> | Array<Account>",
        "format": ""
    },
    {
        "name": "ethWallet",
        "baseName": "eth_wallet",
        "type": "PayoutWallet",
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
        "type": "string | Account",
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
    }
];
//# sourceMappingURL=Account.js.map