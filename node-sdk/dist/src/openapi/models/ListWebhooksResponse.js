"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWebhooksResponse = void 0;
class ListWebhooksResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListWebhooksResponse.attributeTypeMap;
    }
}
exports.ListWebhooksResponse = ListWebhooksResponse;
ListWebhooksResponse.discriminator = undefined;
ListWebhooksResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<Webhook>",
        "format": ""
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
        "format": ""
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=ListWebhooksResponse.js.map