"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerBody = void 0;
class UpdateCustomerBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return UpdateCustomerBody.attributeTypeMap;
    }
}
exports.UpdateCustomerBody = UpdateCustomerBody;
UpdateCustomerBody.discriminator = undefined;
UpdateCustomerBody.attributeTypeMap = [
    {
        "name": "billing_details",
        "baseName": "billing_details",
        "type": "CustomersIdBillingDetails",
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
//# sourceMappingURL=UpdateCustomerBody.js.map