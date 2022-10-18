"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IIntegrations = void 0;
class IIntegrations {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IIntegrations.attributeTypeMap;
    }
}
exports.IIntegrations = IIntegrations;
IIntegrations.discriminator = undefined;
IIntegrations.attributeTypeMap = [
    {
        "name": "ftx",
        "baseName": "ftx",
        "type": "IIntegrationsFtx",
        "format": ""
    }
];
//# sourceMappingURL=IIntegrations.js.map