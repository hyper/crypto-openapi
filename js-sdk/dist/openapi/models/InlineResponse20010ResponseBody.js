"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineResponse20010ResponseBody = void 0;
class InlineResponse20010ResponseBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return InlineResponse20010ResponseBody.attributeTypeMap;
    }
}
exports.InlineResponse20010ResponseBody = InlineResponse20010ResponseBody;
InlineResponse20010ResponseBody.discriminator = undefined;
InlineResponse20010ResponseBody.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "_id",
        "type": "string",
        "format": ""
    },
    {
        "name": "branding",
        "baseName": "branding",
        "type": "InlineResponse20010ResponseBodyBranding",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "string",
        "format": ""
    },
    {
        "name": "invoicePrefix",
        "baseName": "invoice_prefix",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=InlineResponse20010ResponseBody.js.map