"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountBody = void 0;
class CreateAccountBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateAccountBody.attributeTypeMap;
    }
}
exports.CreateAccountBody = CreateAccountBody;
CreateAccountBody.discriminator = undefined;
CreateAccountBody.attributeTypeMap = [
    {
        "name": "branding",
        "baseName": "branding",
        "type": "AccountsBranding",
        "format": ""
    },
    {
        "name": "connected_accounts",
        "baseName": "connected_accounts",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "invoice_prefix",
        "baseName": "invoice_prefix",
        "type": "string",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "parent_account",
        "baseName": "parent_account",
        "type": "string",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "boolean",
        "format": ""
    }
];
//# sourceMappingURL=CreateAccountBody.js.map