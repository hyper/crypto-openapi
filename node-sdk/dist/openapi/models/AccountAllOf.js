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
        "name": "connected_accounts",
        "baseName": "connected_accounts",
        "type": "Account",
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
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string",
        "format": ""
    },
    {
        "name": "payout_wallets",
        "baseName": "payout_wallets",
        "type": "Array<PayoutWallet>",
        "format": ""
    },
    {
        "name": "settings",
        "baseName": "settings",
        "type": "AccountsSettings",
        "format": ""
    }
];
//# sourceMappingURL=AccountAllOf.js.map