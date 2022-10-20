"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUpdateRequest = void 0;
class CustomerUpdateRequest {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomerUpdateRequest.attributeTypeMap;
    }
}
exports.CustomerUpdateRequest = CustomerUpdateRequest;
CustomerUpdateRequest.discriminator = undefined;
CustomerUpdateRequest.attributeTypeMap = [
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
//# sourceMappingURL=CustomerUpdateRequest.js.map