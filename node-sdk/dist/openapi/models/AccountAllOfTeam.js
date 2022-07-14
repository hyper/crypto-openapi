"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAllOfTeam = void 0;
class AccountAllOfTeam {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountAllOfTeam.attributeTypeMap;
    }
}
exports.AccountAllOfTeam = AccountAllOfTeam;
AccountAllOfTeam.discriminator = undefined;
AccountAllOfTeam.attributeTypeMap = [
    {
        "name": "user",
        "baseName": "user",
        "type": "string",
        "format": ""
    },
    {
        "name": "owner",
        "baseName": "owner",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=AccountAllOfTeam.js.map