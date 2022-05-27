"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSubscriptionPeriodsResponse = void 0;
class ListSubscriptionPeriodsResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListSubscriptionPeriodsResponse.attributeTypeMap;
    }
}
exports.ListSubscriptionPeriodsResponse = ListSubscriptionPeriodsResponse;
ListSubscriptionPeriodsResponse.discriminator = undefined;
ListSubscriptionPeriodsResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<SubscriptionPeriod>",
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
//# sourceMappingURL=ListSubscriptionPeriodsResponse.js.map