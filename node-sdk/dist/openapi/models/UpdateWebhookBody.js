"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWebhookBody = void 0;
class UpdateWebhookBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return UpdateWebhookBody.attributeTypeMap;
    }
}
exports.UpdateWebhookBody = UpdateWebhookBody;
UpdateWebhookBody.discriminator = undefined;
UpdateWebhookBody.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=UpdateWebhookBody.js.map