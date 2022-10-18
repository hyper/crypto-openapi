"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookUpdateRequest = void 0;
class WebhookUpdateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return WebhookUpdateRequest.attributeTypeMap;
    }
}
exports.WebhookUpdateRequest = WebhookUpdateRequest;
WebhookUpdateRequest.discriminator = undefined;
WebhookUpdateRequest.attributeTypeMap = [
    {
        "name": "event_types",
        "baseName": "event_types",
        "type": "Array<EventType>",
        "format": ""
    }
];
//# sourceMappingURL=WebhookUpdateRequest.js.map