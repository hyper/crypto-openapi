"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDetails = void 0;
class CustomerDetails {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomerDetails.attributeTypeMap;
    }
}
exports.CustomerDetails = CustomerDetails;
CustomerDetails.discriminator = undefined;
CustomerDetails.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=CustomerDetails.js.map