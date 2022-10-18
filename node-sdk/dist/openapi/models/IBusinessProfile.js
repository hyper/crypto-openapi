"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBusinessProfile = void 0;
class IBusinessProfile {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IBusinessProfile.attributeTypeMap;
    }
}
exports.IBusinessProfile = IBusinessProfile;
IBusinessProfile.discriminator = undefined;
IBusinessProfile.attributeTypeMap = [
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
        "name": "support_address",
        "baseName": "support_address",
        "type": "Address",
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
        "name": "support_url",
        "baseName": "support_url",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=IBusinessProfile.js.map