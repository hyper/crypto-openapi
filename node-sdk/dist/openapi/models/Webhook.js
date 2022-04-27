"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhook = void 0;
class Webhook {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Webhook.attributeTypeMap;
    }
}
exports.Webhook = Webhook;
Webhook.discriminator = undefined;
Webhook.attributeTypeMap = [
    {
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
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
//# sourceMappingURL=Webhook.js.map