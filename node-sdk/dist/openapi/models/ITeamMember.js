"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITeamMember = void 0;
class ITeamMember {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ITeamMember.attributeTypeMap;
    }
}
exports.ITeamMember = ITeamMember;
ITeamMember.discriminator = undefined;
ITeamMember.attributeTypeMap = [
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
//# sourceMappingURL=ITeamMember.js.map