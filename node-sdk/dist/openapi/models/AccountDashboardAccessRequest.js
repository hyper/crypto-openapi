"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDashboardAccessRequest = void 0;
class AccountDashboardAccessRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountDashboardAccessRequest.attributeTypeMap;
    }
}
exports.AccountDashboardAccessRequest = AccountDashboardAccessRequest;
AccountDashboardAccessRequest.discriminator = undefined;
AccountDashboardAccessRequest.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string",
        "format": ""
    },
    {
        "name": "path",
        "baseName": "path",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=AccountDashboardAccessRequest.js.map