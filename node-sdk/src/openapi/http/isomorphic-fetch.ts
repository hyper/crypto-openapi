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
        }).then((res: any) => {
            const headers: { [name: string]: string } = {};

            if (res.headers) {
                res.headers.forEach((value: string, name: string) => {
                    headers[name] = value;
                });
            }

            const body = {
              text: () => res.text(),
              binary: () => res.blob()
            };
            return new ResponseContext(res.status, headers, body);
        });

        return from<Promise<ResponseContext>>(resultPromise);

    }
}
