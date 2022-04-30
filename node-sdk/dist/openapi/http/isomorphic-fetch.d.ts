import { HttpLibrary, RequestContext, ResponseContext } from './http';
import { Observable } from '../rxjsStub';
import 'isomorphic-unfetch';
export declare class IsomorphicFetchHttpLibrary implements HttpLibrary {
    send(request: RequestContext): Observable<ResponseContext>;
}
