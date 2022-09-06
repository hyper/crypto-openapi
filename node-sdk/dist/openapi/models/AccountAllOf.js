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
        "name": "parent_account",
        "baseName": "parent_account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "connected_accounts",
        "baseName": "connected_accounts",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "team",
        "baseName": "team",
        "type": "Array<AccountAllOfTeam>",
        "format": ""
    },
    {
        "name": "verified",
        "baseName": "verified",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "business_profile",
        "baseName": "business_profile",
        "type": "AccountAllOfBusinessProfile",
        "format": ""
    },
    {
        "name": "settings",
        "baseName": "settings",
        "type": "AccountAllOfSettings",
        "format": ""
    },
    {
        "name": "integrations",
        "baseName": "integrations",
        "type": "AccountAllOfIntegrations",
        "format": ""
    },
    {
        "name": "payout_wallets",
        "baseName": "payout_wallets",
        "type": "Array<PayoutWallet>",
        "format": ""
    }
];
//# sourceMappingURL=AccountAllOf.js.map