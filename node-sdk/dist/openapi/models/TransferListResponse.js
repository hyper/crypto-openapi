"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferListResponse = void 0;
class TransferListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return TransferListResponse.attributeTypeMap;
    }
}
exports.TransferListResponse = TransferListResponse;
TransferListResponse.discriminator = undefined;
TransferListResponse.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": "double"
    },
    {
        "name": "has_more",
        "baseName": "has_more",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number",
        "format": "double"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<ITransfer>",
        "format": ""
    }
];
//# sourceMappingURL=TransferListResponse.js.map