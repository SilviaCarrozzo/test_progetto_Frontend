import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class DataRequest {

    private endPoint: string;
    private headers: HttpHeaders;
    private params: HttpParams;
    private body!: Object;
    private blocking = true;
    private responseType = 'json';

    constructor(endPoint: string) {
        this.endPoint = environment.baseHost + endPoint;
        this.headers = new HttpHeaders();
        this.params = new HttpParams();
    }
    public clone(req: DataRequest) {
        //
        this.setEndpoint(req.getEndpoint());
        this.setHeaders(req.getHeaders());
        this.setBody(req.getBody());
    }
    public setEndpoint(endPoint: string) {
        this.endPoint = endPoint;
    }
    public getEndpoint(): string {
        return this.endPoint;
    }
    public getUrl(type: any): string {
        if (!environment.production) {
            this.endPoint += '/' + type + '.json';
        }
        return this.endPoint;
    }
    public addHeaders(name: string, value: string) {
        this.headers = this.headers.append(name, value);
    }
    public getHeaders(): HttpHeaders {
        return this.headers;
    }
    public addParams(name: string, value: any) {
        this.params = this.params.append(name, value);
    }
    public getParams(): HttpParams {
        return this.params;
    }
    public setBody(body: Object) {
        this.body = body;
    }
    public getBody(): Object {
        return this.body;
    }
    public setBlocking(value: boolean) {
        this.blocking = value;
    }
    public isBlocking(): boolean {
        return this.blocking;
    }
    public setResponseType(responseType: any) {
        this.responseType = responseType;
    }
    public getResponseType() {
        return this.responseType;
    }
    //
    public encoding(value: boolean) {
        if (!value) {
            this.addHeaders('no-encode', 'true');
        }
    }
    //
    /* PRIVATE */
    private setHeaders(headers: HttpHeaders) {
        /* headers.keys().forEach(
            (key) => this.addHeaders(key, headers.get(key))
        ); */
    }
}
