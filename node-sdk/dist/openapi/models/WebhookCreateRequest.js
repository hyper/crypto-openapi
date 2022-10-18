"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookCreateRequest = void 0;
class WebhookCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return WebhookCreateRequest.attributeTypeMap;
    }
}
exports.WebhookCreateRequest = WebhookCreateRequest;
WebhookCreateRequest.discriminator = undefined;
WebhookCreateRequest.attributeTypeMap = [
    {
        "name": "endpoint_url",
        "baseName": "endpoint_url",
        "type": "string",
        "format": ""
    },
    {
        "name": "event_types",
        "baseName": "event_types",
        "type": "Array<EventType>",
        "format": ""
    },
    {
        "name": "secret",
        "baseName": "secret",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=WebhookCreateRequest.js.map