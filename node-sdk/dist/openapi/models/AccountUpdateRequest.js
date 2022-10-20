"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateRequest = void 0;
class AccountUpdateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountUpdateRequest.attributeTypeMap;
    }
}
exports.AccountUpdateRequest = AccountUpdateRequest;
AccountUpdateRequest.discriminator = undefined;
AccountUpdateRequest.attributeTypeMap = [
    {
        "name": "settings",
        "baseName": "settings",
        "type": "ISettings",
        "format": ""
    },
    {
        "name": "business_profile",
        "baseName": "business_profile",
        "type": "IBusinessProfile",
        "format": ""
    }
];
//# sourceMappingURL=AccountUpdateRequest.js.map