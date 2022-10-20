"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateRequest = void 0;
class CustomerCreateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomerCreateRequest.attributeTypeMap;
    }
}
exports.CustomerCreateRequest = CustomerCreateRequest;
CustomerCreateRequest.discriminator = undefined;
CustomerCreateRequest.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string",
        "format": ""
    },
    {
        "name": "phone",
        "baseName": "phone",
        "type": "string",
        "format": ""
    },
    {
        "name": "billing_details",
        "baseName": "billing_details",
        "type": "ICustomerBillingDetails",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
        "format": ""
    }
];
//# sourceMappingURL=CustomerCreateRequest.js.map