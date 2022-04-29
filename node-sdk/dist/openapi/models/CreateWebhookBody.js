"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWebhookBody = void 0;
class CreateWebhookBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateWebhookBody.attributeTypeMap;
    }
}
exports.CreateWebhookBody = CreateWebhookBody;
CreateWebhookBody.discriminator = undefined;
CreateWebhookBody.attributeTypeMap = [
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
//# sourceMappingURL=CreateWebhookBody.js.map