"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountBody = void 0;
class UpdateAccountBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return UpdateAccountBody.attributeTypeMap;
    }
}
exports.UpdateAccountBody = UpdateAccountBody;
UpdateAccountBody.discriminator = undefined;
UpdateAccountBody.attributeTypeMap = [
    {
        "name": "branding",
        "baseName": "branding",
        "type": "AccountsBranding",
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
        "name": "settings",
        "baseName": "settings",
        "type": "AccountsSettings",
        "format": ""
    }
];
//# sourceMappingURL=UpdateAccountBody.js.map