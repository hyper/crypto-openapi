"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookListResponse = void 0;
class WebhookListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return WebhookListResponse.attributeTypeMap;
    }
}
exports.WebhookListResponse = WebhookListResponse;
WebhookListResponse.discriminator = undefined;
WebhookListResponse.attributeTypeMap = [
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
        "type": "Array<IWebhook>",
        "format": ""
    }
];
//# sourceMappingURL=WebhookListResponse.js.map