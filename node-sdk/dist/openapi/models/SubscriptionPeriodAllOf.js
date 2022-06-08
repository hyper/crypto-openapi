"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPeriodAllOf = void 0;
class SubscriptionPeriodAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SubscriptionPeriodAllOf.attributeTypeMap;
    }
}
exports.SubscriptionPeriodAllOf = SubscriptionPeriodAllOf;
SubscriptionPeriodAllOf.discriminator = undefined;
SubscriptionPeriodAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "start",
        "baseName": "start",
        "type": "number",
        "format": ""
    },
    {
        "name": "end",
        "baseName": "end",
        "type": "number",
        "format": ""
    },
    {
        "name": "subscription",
        "baseName": "subscription",
        "type": "string | Subscription",
        "format": ""
    },
    {
        "name": "trial",
        "baseName": "trial",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=SubscriptionPeriodAllOf.js.map