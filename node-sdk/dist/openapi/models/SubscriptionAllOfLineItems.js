"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionAllOfLineItems = void 0;
class SubscriptionAllOfLineItems {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SubscriptionAllOfLineItems.attributeTypeMap;
    }
}
exports.SubscriptionAllOfLineItems = SubscriptionAllOfLineItems;
SubscriptionAllOfLineItems.discriminator = undefined;
SubscriptionAllOfLineItems.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=SubscriptionAllOfLineItems.js.map