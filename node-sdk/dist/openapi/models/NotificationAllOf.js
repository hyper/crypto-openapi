"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationAllOf = void 0;
class NotificationAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return NotificationAllOf.attributeTypeMap;
    }
}
exports.NotificationAllOf = NotificationAllOf;
NotificationAllOf.discriminator = undefined;
NotificationAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "NotificationAllOfTypeEnum",
        "format": ""
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "any",
        "format": ""
    },
    {
        "name": "emails",
        "baseName": "emails",
        "type": "Array<string>",
        "format": ""
    }
];
//# sourceMappingURL=NotificationAllOf.js.map