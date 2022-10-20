"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeCreateRequest = void 0;
class FeeCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return FeeCreateRequest.attributeTypeMap;
    }
}
exports.FeeCreateRequest = FeeCreateRequest;
FeeCreateRequest.discriminator = undefined;
FeeCreateRequest.attributeTypeMap = [
    {
        "name": "payment_intent",
        "baseName": "payment_intent",
        "type": "string",
        "format": ""
    },
    {
        "name": "percent",
        "baseName": "percent",
        "type": "number",
        "format": "double"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=FeeCreateRequest.js.map