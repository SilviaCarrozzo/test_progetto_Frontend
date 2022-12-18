import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { DataRequest } from 'src/app/core/data-request/data-request.model';
import { GetRequest } from 'src/app/core/data-request/get-request.service';
import { map, catchError } from 'rxjs/operators';
import { PostRequest } from 'src/app/core/data-request/post-request.service';
import { PutRequest } from 'src/app/core/data-request/put-request.service';
import { DeleteRequest } from 'src/app/core/data-request/delete-request.service';

@Injectable()

export class StoreService {
    dataReport: any;

    private historyDataModel = new BehaviorSubject(null);
    private elabDataModel = new BehaviorSubject(null);

    constructor(
        private getRequest: GetRequest,
        private postRequest: PostRequest,
        private putRequest: PutRequest,
        private deleteRequest: DeleteRequest,
    ) {
    }

    public getSideMenu(codFamiglia: any): Observable<any> {
        const req = new DataRequest('/side-menu/' + codFamiglia);
        return this.getRequest.doRequest(req)
            .pipe(
                map((response: any) => {
                    return response;
                }),
                catchError((err: any) => {
                    return throwError(() => err);
                })
            );
    }
    /** Jewellery List */
    public getJewelleryList(): Observable<any> {
        const req = new DataRequest('src/shared/assets/mocks/jewellery/001/get.json');
        return this.getRequest.doRequest(req)
            .pipe(
                map((response: any) => {
                    return response;
                }),
                catchError((err: any) => {
                    return throwError(() => err);
                })
            );
    }

}