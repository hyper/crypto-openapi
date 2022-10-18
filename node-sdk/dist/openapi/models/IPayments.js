"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPayments = void 0;
class IPayments {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IPayments.attributeTypeMap;
    }
}
exports.IPayments = IPayments;
IPayments.discriminator = undefined;
IPayments.attributeTypeMap = [
    {
        "name": "invoice_prefix",
        "baseName": "invoice_prefix",
        "type": "string",
        "format": ""
    },
    {
        "name": "invoice_reminder_frequency",
        "baseName": "invoice_reminder_frequency",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=IPayments.js.map