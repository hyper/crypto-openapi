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
        "name": "past_due_period_duration",
        "baseName": "past_due_period_duration",
        "type": "number",
        "format": ""
    },
    {
        "name": "retry_period_duration",
        "baseName": "retry_period_duration",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=AccountAllOfSettings.js.map