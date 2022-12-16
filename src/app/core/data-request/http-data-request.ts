import { Observable } from 'rxjs';
import { DataRequest } from './data-request.model';
import { map } from 'rxjs/operators';

export abstract class HttpDataRequest {

    protected mock = false;

    protected abstract sendRequest<T>(req: DataRequest): Observable<any>;
    protected abstract transformBody(req: DataRequest): DataRequest;

    public doRequest<T>(incomingRequest: DataRequest): Observable<any> {

        let request = new DataRequest('');
        request.clone(incomingRequest);
        request = incomingRequest;
        //
        if (request.getBody()) {
            this.transformBody(request);
        }
        //
        // Executing the implementation of the HttpRequest subclass
        //
        return this.sendRequest<any>(request);
    }
}

