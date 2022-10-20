"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerListResponse = void 0;
class CustomerListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomerListResponse.attributeTypeMap;
    }
}
exports.CustomerListResponse = CustomerListResponse;
CustomerListResponse.discriminator = undefined;
CustomerListResponse.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": "double"
    },
    {
        "name": "has_more",
        "baseName": "has_more",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number",
        "format": "double"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<ICustomer>",
        "format": ""
    }
];
//# sourceMappingURL=CustomerListResponse.js.map