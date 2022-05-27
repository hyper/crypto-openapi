"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsSettings = void 0;
class AccountsSettings {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountsSettings.attributeTypeMap;
    }
}
exports.AccountsSettings = AccountsSettings;
AccountsSettings.discriminator = undefined;
AccountsSettings.attributeTypeMap = [
    {
        "name": "retry_period_duration",
        "baseName": "retry_period_duration",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=AccountsSettings.js.map