"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountConnectRequest = void 0;
class AccountConnectRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountConnectRequest.attributeTypeMap;
    }
}
exports.AccountConnectRequest = AccountConnectRequest;
AccountConnectRequest.discriminator = undefined;
AccountConnectRequest.attributeTypeMap = [
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=AccountConnectRequest.js.map