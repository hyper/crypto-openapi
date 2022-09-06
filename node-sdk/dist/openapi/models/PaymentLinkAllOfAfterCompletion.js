"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLinkAllOfAfterCompletion = void 0;
class PaymentLinkAllOfAfterCompletion {
    constructor() {
    }
    static getAttributeTypeMap() {
        return PaymentLinkAllOfAfterCompletion.attributeTypeMap;
    }
}
exports.PaymentLinkAllOfAfterCompletion = PaymentLinkAllOfAfterCompletion;
PaymentLinkAllOfAfterCompletion.discriminator = undefined;
PaymentLinkAllOfAfterCompletion.attributeTypeMap = [
    {
        "name": "redirect_url",
        "baseName": "redirect_url",
        "type": "string",
        "format": ""
    },
    {
        "name": "hosted_confirmation_message",
        "baseName": "hosted_confirmation_message",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=PaymentLinkAllOfAfterCompletion.js.map