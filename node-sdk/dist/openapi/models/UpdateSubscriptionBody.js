"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSubscriptionBody = void 0;
class UpdateSubscriptionBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return UpdateSubscriptionBody.attributeTypeMap;
    }
}
exports.UpdateSubscriptionBody = UpdateSubscriptionBody;
UpdateSubscriptionBody.discriminator = undefined;
UpdateSubscriptionBody.attributeTypeMap = [
    {
        "name": "cancel_at",
        "baseName": "cancel_at",
        "type": "number",
        "format": ""
    },
    {
        "name": "canceled_at",
        "baseName": "canceled_at",
        "type": "number",
        "format": ""
    },
    {
        "name": "pause_collection",
        "baseName": "pause_collection",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=UpdateSubscriptionBody.js.map