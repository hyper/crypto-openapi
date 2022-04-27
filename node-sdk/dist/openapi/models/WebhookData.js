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
        "name": "endpointUrl",
        "baseName": "endpoint_url",
        "type": "string",
        "format": ""
    },
    {
        "name": "eventTypes",
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