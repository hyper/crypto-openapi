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
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=WalletCreateRequest.js.map