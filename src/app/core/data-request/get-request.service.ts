import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { DataRequest } from './data-request.model';
import { HttpDataRequest } from './http-data-request';
import { catchError } from 'rxjs/operators';
import { RequestIdService } from './request-id.service';

@Injectable()
export class GetRequest extends HttpDataRequest {

    constructor(
        private http: HttpClient,
        private requestIdService : RequestIdService
    ) {
        super();
    }

    // Implementation
    protected sendRequest<T>(request: DataRequest): Observable<any> {
        //
        return this.http.get<any>(request.getUrl('get'), {
            headers: request.getHeaders(),
            params: <HttpParams>request.getBody(),
            responseType: request.getResponseType() as 'json'
        }).pipe(
            catchError((response: HttpErrorResponse) => {
                if (response instanceof HttpErrorResponse && response.error) {
                    var XRequestId: string = response.headers.get('x-request-id') || '';
                    this.requestIdService.setRequestId(XRequestId);
                    return throwError(() => response.error);
                }
                throw response;
            })
        );
    }

    // Implementation
    protected transformBody(request: DataRequest): DataRequest {

        let params = new HttpParams();

        const body: any = request.getBody();
        Object.keys(request.getBody()).map(
            (key: string) => {
                params = params.append(key, body[key]);
            }
        );
        //
        request.setBody(params);

        return request;
    }
}
