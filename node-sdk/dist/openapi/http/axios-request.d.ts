import { HttpLibrary, RequestContext, ResponseContext } from './http';
import { Observable } from '../rxjsStub';
export declare class AxiosRequestLibrary implements HttpLibrary {
  send(request: RequestContext): Observable<ResponseContext>;
}
