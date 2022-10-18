"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IResponse = void 0;
class IResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IResponse.attributeTypeMap;
    }
}
exports.IResponse = IResponse;
IResponse.discriminator = undefined;
IResponse.attributeTypeMap = [
    {
        "name": "body",
        "baseName": "body",
        "type": "{ [key: string]: any; }",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=IResponse.js.map