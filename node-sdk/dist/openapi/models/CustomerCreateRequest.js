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
        "name": "billing_details",
        "baseName": "billing_details",
        "type": "CustomerCreateRequestBillingDetails",
        "format": ""
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "{ [key: string]: any; }",
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
//# sourceMappingURL=CustomerCreateRequest.js.map