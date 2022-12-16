import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable()

export class LoaderInterceptorService implements HttpInterceptor {
    //
    httpRequest = 0;
    //
    constructor(private loaderService: LoaderService) { }
    //
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.showLoader();
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.onEnd();
            }
        },
            (err: any) => {
                this.onEnd();
            }));
    }

    private onEnd(): void {
        this.httpRequest--;
        if (this.httpRequest === 0) {
            this.hideLoader();
        }
    }

    private showLoader(): void {
        this.httpRequest++;
        if (this.httpRequest === 1) {
            this.loaderService.show();
        }
    }

    private hideLoader(): void {
        this.loaderService.hide();
    }

}
