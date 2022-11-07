"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletUpdateRequest = void 0;
class WalletUpdateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return WalletUpdateRequest.attributeTypeMap;
    }
}
exports.WalletUpdateRequest = WalletUpdateRequest;
WalletUpdateRequest.discriminator = undefined;
WalletUpdateRequest.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "string",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "Chain",
        "format": ""
    }
];
//# sourceMappingURL=WalletUpdateRequest.js.map