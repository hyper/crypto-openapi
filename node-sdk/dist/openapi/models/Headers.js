"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Headers = void 0;
class Headers {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Headers.attributeTypeMap;
    }
}
exports.Headers = Headers;
Headers.discriminator = undefined;
Headers.attributeTypeMap = [
    {
        "name": "authorization",
        "baseName": "authorization",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=Headers.js.map