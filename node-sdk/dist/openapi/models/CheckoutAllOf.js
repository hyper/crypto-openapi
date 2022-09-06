"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutAllOf = void 0;
class CheckoutAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CheckoutAllOf.attributeTypeMap;
    }
}
exports.CheckoutAllOf = CheckoutAllOf;
CheckoutAllOf.discriminator = undefined;
CheckoutAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "CheckoutAllOfStatusEnum",
        "format": ""
    },
    {
        "name": "customer_details",
        "baseName": "customer_details",
        "type": "CheckoutAllOfCustomerDetails",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "payment_link",
        "baseName": "payment_link",
        "type": "string | PaymentLink",
        "format": ""
    },
    {
        "name": "payment_intent",
        "baseName": "payment_intent",
        "type": "string | PaymentIntent",
        "format": ""
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string | Customer",
        "format": ""
    },
    {
        "name": "last_payment_error",
        "baseName": "last_payment_error",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=CheckoutAllOf.js.map