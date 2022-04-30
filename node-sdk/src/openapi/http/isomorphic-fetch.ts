import { HttpLibrary, RequestContext, ResponseContext } from './http';
import { from, Observable } from '../rxjsStub';
import axios from 'axios';

export class IsomorphicFetchHttpLibrary implements HttpLibrary {

    public send(request: RequestContext): Observable<ResponseContext> {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();

        const resultPromise = axios.request({
            url: request.getUrl(),
            method: method,
            data: body as any,
            headers: request.getHeaders(),
            // credentials: 'same-origin',
            withCredentials: true,
        }).then((resp: any) => {
            const headers: { [name: string]: string } = {};

            if (headers) {
                resp.headers.forEach((value: string, name: string) => {
                    headers[name] = value;
                });
            }

            const body = {
              text: () => resp.text(),
              binary: () => resp.blob()
            };
            return new ResponseContext(resp.status, headers, body);
        });

        return from<Promise<ResponseContext>>(resultPromise);

    }
}
