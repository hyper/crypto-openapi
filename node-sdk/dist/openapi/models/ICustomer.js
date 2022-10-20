"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICustomer = void 0;
class ICustomer {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ICustomer.attributeTypeMap;
    }
}
exports.ICustomer = ICustomer;
ICustomer.discriminator = undefined;
ICustomer.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "number",
        "format": "double"
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "account",
        "baseName": "account",
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
        "name": "wallets",
        "baseName": "wallets",
        "type": "Array<IWallet>",
        "format": ""
    },
    {
        "name": "payments",
        "baseName": "payments",
        "type": "number",
        "format": "double"
    },
    {
        "name": "last_payment",
        "baseName": "last_payment",
        "type": "IPaymentIntent",
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
//# sourceMappingURL=ICustomer.js.map