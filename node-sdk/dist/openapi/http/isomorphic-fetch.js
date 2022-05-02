"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsomorphicFetchHttpLibrary = void 0;
const http_1 = require("./http");
const rxjsStub_1 = require("../rxjsStub");
require("isomorphic-unfetch");
class IsomorphicFetchHttpLibrary {
    send(request) {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();
        const resultPromise = fetch(request.getUrl(), {
            method: method,
            body: body,
            headers: request.getHeaders(),
            credentials: 'include',
        }).then((res) => {
            const headers = {};
            if (res.headers) {
                res.headers.forEach((value, name) => {
                    headers[name] = value;
                });
            }
            const body = {
                text: () => res.text(),
                binary: () => res.blob()
            };
            return new http_1.ResponseContext(res.status, headers, body);
        });
        return rxjsStub_1.from(resultPromise);
    }
}
exports.IsomorphicFetchHttpLibrary = IsomorphicFetchHttpLibrary;
//# sourceMappingURL=isomorphic-fetch.js.map