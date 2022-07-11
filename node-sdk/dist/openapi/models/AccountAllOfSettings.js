"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAllOfSettings = void 0;
class AccountAllOfSettings {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountAllOfSettings.attributeTypeMap;
    }
}
exports.AccountAllOfSettings = AccountAllOfSettings;
AccountAllOfSettings.discriminator = undefined;
AccountAllOfSettings.attributeTypeMap = [
    {
        "name": "billing",
        "baseName": "billing",
        "type": "AccountAllOfSettingsBilling",
        "format": ""
    },
    {
        "name": "branding",
        "baseName": "branding",
        "type": "AccountAllOfSettingsBranding",
        "format": ""
    },
    {
        "name": "payments",
        "baseName": "payments",
        "type": "AccountAllOfSettingsPayments",
        "format": ""
    }
];
//# sourceMappingURL=AccountAllOfSettings.js.map