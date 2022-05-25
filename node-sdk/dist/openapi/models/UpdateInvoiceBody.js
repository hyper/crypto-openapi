"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInvoiceBody = void 0;
class UpdateInvoiceBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return UpdateInvoiceBody.attributeTypeMap;
    }
}
exports.UpdateInvoiceBody = UpdateInvoiceBody;
UpdateInvoiceBody.discriminator = undefined;
UpdateInvoiceBody.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "string",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string",
        "format": ""
    },
    {
        "name": "due",
        "baseName": "due",
        "type": "string",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string",
        "format": ""
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=UpdateInvoiceBody.js.map