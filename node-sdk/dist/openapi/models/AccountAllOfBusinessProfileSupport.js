"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAllOfBusinessProfileSupport = void 0;
class AccountAllOfBusinessProfileSupport {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountAllOfBusinessProfileSupport.attributeTypeMap;
    }
}
exports.AccountAllOfBusinessProfileSupport = AccountAllOfBusinessProfileSupport;
AccountAllOfBusinessProfileSupport.discriminator = undefined;
AccountAllOfBusinessProfileSupport.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "CustomersIdBillingDetailsAddress",
        "format": ""
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string",
        "format": ""
    },
    {
        "name": "phone",
        "baseName": "phone",
        "type": "string",
        "format": ""
    },
    {
        "name": "website",
        "baseName": "website",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=AccountAllOfBusinessProfileSupport.js.map