"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListLogsResponse = void 0;
class ListLogsResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return ListLogsResponse.attributeTypeMap;
    }
}
exports.ListLogsResponse = ListLogsResponse;
ListLogsResponse.discriminator = undefined;
ListLogsResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<Log>",
        "format": ""
    },
    {
        "name": "has_more",
        "baseName": "has_more",
        "type": "string",
        "format": ""
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number",
        "format": ""
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=ListLogsResponse.js.map