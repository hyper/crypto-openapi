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
        "name": "business_description",
        "baseName": "business_description",
        "type": "string",
        "format": ""
    },
    {
        "name": "links",
        "baseName": "links",
        "type": "AccountAllOfBusinessProfileLinks",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "support",
        "baseName": "support",
        "type": "AccountAllOfBusinessProfileSupport",
        "format": ""
    }
];
//# sourceMappingURL=AccountAllOfBusinessProfile.js.map