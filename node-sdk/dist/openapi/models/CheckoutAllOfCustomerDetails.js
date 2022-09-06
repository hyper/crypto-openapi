"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutAllOfCustomerDetails = void 0;
class CheckoutAllOfCustomerDetails {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CheckoutAllOfCustomerDetails.attributeTypeMap;
    }
}
exports.CheckoutAllOfCustomerDetails = CheckoutAllOfCustomerDetails;
CheckoutAllOfCustomerDetails.discriminator = undefined;
CheckoutAllOfCustomerDetails.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=CheckoutAllOfCustomerDetails.js.map