"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsIdSettings = void 0;
class AccountsIdSettings {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountsIdSettings.attributeTypeMap;
    }
}
exports.AccountsIdSettings = AccountsIdSettings;
AccountsIdSettings.discriminator = undefined;
AccountsIdSettings.attributeTypeMap = [
    {
        "name": "retry_period_duration",
        "baseName": "retry_period_duration",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=AccountsIdSettings.js.map