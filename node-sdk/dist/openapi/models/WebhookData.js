"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookData = void 0;
class WebhookData {
    constructor() {
    }
    static getAttributeTypeMap() {
        return WebhookData.attributeTypeMap;
    }
}
exports.WebhookData = WebhookData;
WebhookData.discriminator = undefined;
WebhookData.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "endpoint_url",
        "baseName": "endpoint_url",
        "type": "string",
        "format": ""
    },
    {
        "name": "event_types",
        "baseName": "event_types",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=WebhookData.js.map