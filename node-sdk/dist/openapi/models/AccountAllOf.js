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
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "connected_accounts",
        "baseName": "connected_accounts",
        "type": "Array<Account>",
        "format": ""
    },
    {
        "name": "parent_account",
        "baseName": "parent_account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "team",
        "baseName": "team",
        "type": "Array<AccountAllOfTeam>",
        "format": ""
    },
    {
        "name": "payout_wallets",
        "baseName": "payout_wallets",
        "type": "Array<PayoutWallet>",
        "format": ""
    },
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "verified",
        "baseName": "verified",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "settings",
        "baseName": "settings",
        "type": "AccountAllOfSettings",
        "format": ""
    },
    {
        "name": "business_profile",
        "baseName": "business_profile",
        "type": "AccountAllOfBusinessProfile",
        "format": ""
    }
];
//# sourceMappingURL=AccountAllOf.js.map