"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAllOf = void 0;
class CustomerAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CustomerAllOf.attributeTypeMap;
    }
}
exports.CustomerAllOf = CustomerAllOf;
CustomerAllOf.discriminator = undefined;
CustomerAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
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
        "name": "billing_details",
        "baseName": "billing_details",
        "type": "CustomerAllOfBillingDetails",
        "format": ""
    },
    {
        "name": "wallets",
        "baseName": "wallets",
        "type": "Array<Wallet>",
        "format": ""
    },
    {
        "name": "payments",
        "baseName": "payments",
        "type": "Array<PaymentIntent>",
        "format": ""
    },
    {
        "name": "last_payment",
        "baseName": "last_payment",
        "type": "PaymentIntent",
        "format": ""
    }
];
//# sourceMappingURL=CustomerAllOf.js.map