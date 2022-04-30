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
        "name": "object",
        "baseName": "object",
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
        "name": "connected_accounts",
        "baseName": "connected_accounts",
        "type": "Array<string> | Array<Account>",
        "format": ""
    },
    {
        "name": "invoice_prefix",
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
        "name": "parent_account",
        "baseName": "parent_account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "payout_wallets",
        "baseName": "payout_wallets",
        "type": "Array<PayoutWallet>",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=Account.js.map