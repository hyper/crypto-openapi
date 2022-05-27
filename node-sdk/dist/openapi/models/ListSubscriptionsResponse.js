"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSubscriptionsResponse = void 0;
class ListSubscriptionsResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListSubscriptionsResponse.attributeTypeMap;
    }
}
exports.ListSubscriptionsResponse = ListSubscriptionsResponse;
ListSubscriptionsResponse.discriminator = undefined;
ListSubscriptionsResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Subscription",
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
//# sourceMappingURL=ListSubscriptionsResponse.js.map