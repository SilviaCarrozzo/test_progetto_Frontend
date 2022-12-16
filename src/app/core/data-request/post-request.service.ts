import { HttpErrorResponse, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { DataRequest } from './data-request.model';
import { HttpDataRequest } from './http-data-request';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RequestIdService } from './request-id.service';

@Injectable()
export class PostRequest extends HttpDataRequest {

    constructor(
        private http: HttpClient,
        private requestIdService : RequestIdService
    ) {
        super();
    }

    // Implementation
    protected sendRequest<T>(request: DataRequest): Observable<any> {
        //

        if(environment.production){
            return this.http.post<any>(
                request.getUrl('post'),
                request.getBody(),
                {
                    headers: request.getHeaders(),
                    params: request.getParams(),
                    responseType: request.getResponseType() as 'json'
                }).pipe(
                    catchError((response: HttpErrorResponse) => {
                        if (response instanceof HttpErrorResponse && response.error) {
                            var XRequestId : string = response.headers.get('x-request-id') || '';
                            this.requestIdService.setRequestId(XRequestId);
                            return throwError(() => response.error);
                        }
                        throw response;
                    })
                );
        } else {
            return this.http.get<any>(request.getUrl('post'), {
                headers: request.getHeaders(),
                params: <HttpParams>request.getBody(),
                responseType: request.getResponseType() as 'json'
            }).pipe(
                catchError((response: HttpErrorResponse) => {
                    if (response instanceof HttpErrorResponse && response.error) {
                        return of(response.error);
                    }
                    throw response;
                })
            );
        }
         
    }

    // Implementation
    protected transformBody(request: DataRequest): DataRequest {
        return request;
    }
}
