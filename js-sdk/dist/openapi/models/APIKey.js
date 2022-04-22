"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKey = void 0;
class APIKey {
    constructor() {
    }
    static getAttributeTypeMap() {
        return APIKey.attributeTypeMap;
    }
}
exports.APIKey = APIKey;
APIKey.discriminator = undefined;
APIKey.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
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
        "type": "APIKeyTypeEnum",
        "format": ""
    }
];
//# sourceMappingURL=APIKey.js.map