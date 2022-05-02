"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertCasing(obj) {
    if (!obj)
        return {};
    return Object.entries(obj).reduce((reducer, [k, v]) => (Object.assign(Object.assign({}, reducer), { [k.replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`)]: v })), {});
}
exports.default = convertCasing;
//# sourceMappingURL=convertCasing.js.map