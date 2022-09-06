"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAllOfBusinessProfile = void 0;
class AccountAllOfBusinessProfile {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountAllOfBusinessProfile.attributeTypeMap;
    }
}
exports.AccountAllOfBusinessProfile = AccountAllOfBusinessProfile;
AccountAllOfBusinessProfile.discriminator = undefined;
AccountAllOfBusinessProfile.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "product_description",
        "baseName": "product_description",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": ""
    },
    {
        "name": "support_url",
        "baseName": "support_url",
        "type": "string",
        "format": ""
    },
    {
        "name": "support_email",
        "baseName": "support_email",
        "type": "string",
        "format": ""
    },
    {
        "name": "support_phone",
        "baseName": "support_phone",
        "type": "string",
        "format": ""
    },
    {
        "name": "support_address",
        "baseName": "support_address",
        "type": "Address",
        "format": ""
    }
];
//# sourceMappingURL=AccountAllOfBusinessProfile.js.map