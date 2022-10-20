"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceUpdateRequest = void 0;
class PriceUpdateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PriceUpdateRequest.attributeTypeMap;
    }
}
exports.PriceUpdateRequest = PriceUpdateRequest;
PriceUpdateRequest.discriminator = undefined;
PriceUpdateRequest.attributeTypeMap = [
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
        "format": ""
    },
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": "double"
    },
    {
        "name": "archived",
        "baseName": "archived",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=PriceUpdateRequest.js.map