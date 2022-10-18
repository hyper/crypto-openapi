"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterCompletion = void 0;
class AfterCompletion {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AfterCompletion.attributeTypeMap;
    }
}
exports.AfterCompletion = AfterCompletion;
AfterCompletion.discriminator = undefined;
AfterCompletion.attributeTypeMap = [
    {
        "name": "hosted_confirmation_message",
        "baseName": "hosted_confirmation_message",
        "type": "string",
        "format": ""
    },
    {
        "name": "redirect_url",
        "baseName": "redirect_url",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=AfterCompletion.js.map