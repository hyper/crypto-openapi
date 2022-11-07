"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateRequest = void 0;
class AccountCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountCreateRequest.attributeTypeMap;
    }
}
exports.AccountCreateRequest = AccountCreateRequest;
AccountCreateRequest.discriminator = undefined;
AccountCreateRequest.attributeTypeMap = [
    {
        "name": "business_profile",
        "baseName": "business_profile",
        "type": "IBusinessProfile",
        "format": ""
    },
    {
        "name": "connected_accounts",
        "baseName": "connected_accounts",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "settings",
        "baseName": "settings",
        "type": "ISettings",
        "format": ""
    }
];
//# sourceMappingURL=AccountCreateRequest.js.map