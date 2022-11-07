"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogListResponse = void 0;
class LogListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return LogListResponse.attributeTypeMap;
    }
}
exports.LogListResponse = LogListResponse;
LogListResponse.discriminator = undefined;
LogListResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<ILog>",
        "format": ""
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
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=LogListResponse.js.map