"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletCreateRequest = void 0;
class WalletCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return WalletCreateRequest.attributeTypeMap;
    }
}
exports.WalletCreateRequest = WalletCreateRequest;
WalletCreateRequest.discriminator = undefined;
WalletCreateRequest.attributeTypeMap = [
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "Chain",
        "format": ""
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=WalletCreateRequest.js.map