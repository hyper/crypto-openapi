"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAllOfSettingsPayments = void 0;
class AccountAllOfSettingsPayments {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountAllOfSettingsPayments.attributeTypeMap;
    }
}
exports.AccountAllOfSettingsPayments = AccountAllOfSettingsPayments;
AccountAllOfSettingsPayments.discriminator = undefined;
AccountAllOfSettingsPayments.attributeTypeMap = [
    {
        "name": "invoice_prefix",
        "baseName": "invoice_prefix",
        "type": "string",
        "format": ""
    },
    {
        "name": "invoice_reminder_frequency",
        "baseName": "invoice_reminder_frequency",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=AccountAllOfSettingsPayments.js.map