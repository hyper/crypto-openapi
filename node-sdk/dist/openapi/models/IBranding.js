"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBranding = void 0;
class IBranding {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IBranding.attributeTypeMap;
    }
}
exports.IBranding = IBranding;
IBranding.discriminator = undefined;
IBranding.attributeTypeMap = [
    {
        "name": "logo",
        "baseName": "logo",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=IBranding.js.map