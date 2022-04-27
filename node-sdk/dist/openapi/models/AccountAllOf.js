"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAllOf = void 0;
class AccountAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountAllOf.attributeTypeMap;
    }
}
exports.AccountAllOf = AccountAllOf;
AccountAllOf.discriminator = undefined;
AccountAllOf.attributeTypeMap = [
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
//# sourceMappingURL=AccountAllOf.js.map