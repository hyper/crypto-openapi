"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPeriod = void 0;
class SubscriptionPeriod {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SubscriptionPeriod.attributeTypeMap;
    }
}
exports.SubscriptionPeriod = SubscriptionPeriod;
SubscriptionPeriod.discriminator = undefined;
SubscriptionPeriod.attributeTypeMap = [
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
        "name": "object",
        "baseName": "object",
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
        "name": "end",
        "baseName": "end",
        "type": "number",
        "format": ""
    },
    {
        "name": "invoice",
        "baseName": "invoice",
        "type": "string | Invoice",
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
//# sourceMappingURL=SubscriptionPeriod.js.map