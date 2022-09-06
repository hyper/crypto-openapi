"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkout = void 0;
class Checkout {
    constructor() {
    }
    static getAttributeTypeMap() {
        return Checkout.attributeTypeMap;
    }
}
exports.Checkout = Checkout;
Checkout.discriminator = undefined;
Checkout.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "Date",
        "format": "date-time"
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
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
        "type": "CheckoutStatusEnum",
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
//# sourceMappingURL=Checkout.js.map