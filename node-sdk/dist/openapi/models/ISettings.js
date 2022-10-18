"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISettings = void 0;
class ISettings {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ISettings.attributeTypeMap;
    }
}
exports.ISettings = ISettings;
ISettings.discriminator = undefined;
ISettings.attributeTypeMap = [
    {
        "name": "billing",
        "baseName": "billing",
        "type": "IBilling",
        "format": ""
    },
    {
        "name": "branding",
        "baseName": "branding",
        "type": "IBranding",
        "format": ""
    },
    {
        "name": "payments",
        "baseName": "payments",
        "type": "IPayments",
        "format": ""
    }
];
//# sourceMappingURL=ISettings.js.map