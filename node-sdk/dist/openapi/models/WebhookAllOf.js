"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookAllOf = void 0;
class WebhookAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return WebhookAllOf.attributeTypeMap;
    }
}
exports.WebhookAllOf = WebhookAllOf;
WebhookAllOf.discriminator = undefined;
WebhookAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
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
//# sourceMappingURL=WebhookAllOf.js.map