"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeyAllOf = void 0;
class APIKeyAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return APIKeyAllOf.attributeTypeMap;
    }
}
exports.APIKeyAllOf = APIKeyAllOf;
APIKeyAllOf.discriminator = undefined;
APIKeyAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "admin",
        "baseName": "admin",
        "type": "boolean",
        "format": ""
    },
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
        "name": "key",
        "baseName": "key",
        "type": "string",
        "format": ""
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "APIKeyAllOfTypeEnum",
        "format": ""
    }
];
//# sourceMappingURL=APIKeyAllOf.js.map