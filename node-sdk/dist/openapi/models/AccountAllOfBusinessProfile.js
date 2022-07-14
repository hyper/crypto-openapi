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
        "name": "business_description",
        "baseName": "business_description",
        "type": "string",
        "format": ""
    },
    {
        "name": "support",
        "baseName": "support",
        "type": "AccountAllOfBusinessProfileSupport",
        "format": ""
    },
    {
        "name": "links",
        "baseName": "links",
        "type": "AccountAllOfBusinessProfileLinks",
        "format": ""
    }
];
//# sourceMappingURL=AccountAllOfBusinessProfile.js.map