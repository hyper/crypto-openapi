"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosRequestLibrary = void 0;
const http_1 = require("./http");
const rxjsStub_1 = require("../rxjsStub");
const axios_1 = require("axios");
class AxiosRequestLibrary {
    send(request) {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();
        const resultPromise = axios_1.default.request({
            url: request.getUrl(),
            method: method,
            data: body,
            headers: request.getHeaders(),
            withCredentials: true,
        }).then((resp) => {
            const headers = {};
            resp.headers.forEach((value, name) => {
                headers[name] = value;
            });
            const body = {
                text: () => resp.text(),
                binary: () => resp.blob()
            };
            return new http_1.ResponseContext(resp.status, headers, body);
        });
        return rxjsStub_1.from(resultPromise);
    }
}
exports.AxiosRequestLibrary = AxiosRequestLibrary;
//# sourceMappingURL=axios-request.js.map