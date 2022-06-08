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
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string",
        "format": ""
    },
    {
        "name": "trial_period_duration",
        "baseName": "trial_period_duration",
        "type": "number",
        "format": ""
    },
    {
        "name": "send_reminders",
        "baseName": "send_reminders",
        "type": "string",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    }
];
//# sourceMappingURL=UpdateInvoiceBody.js.map