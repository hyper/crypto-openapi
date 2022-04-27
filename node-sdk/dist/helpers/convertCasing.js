"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertCasing(obj) {
    if (!obj)
        return {};
    return Object.entries(obj)
        .map(([k, v]) => {
        const castObj = {};
        castObj[k.replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`)] = v;
        return castObj;
    });
}
exports.default = convertCasing;
//# sourceMappingURL=convertCasing.js.map