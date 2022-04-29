"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerBody = void 0;
class CreateCustomerBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateCustomerBody.attributeTypeMap;
    }
}
exports.CreateCustomerBody = CreateCustomerBody;
CreateCustomerBody.discriminator = undefined;
CreateCustomerBody.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string",
        "format": ""
    },
    {
        "name": "billing_details",
        "baseName": "billing_details",
        "type": "CustomersBillingDetails",
        "format": ""
    },
    {
        "name": "email",
        "baseName": "email",
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
        "name": "phone",
        "baseName": "phone",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CreateCustomerBody.js.map