import { LoaderService } from './service/loader.service';
import { UserService } from './service/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoaderInterceptorService } from './service/loader-http-interceptor.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
    imports: [
       
        TranslateModule/*.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClient]
            }
          })*/
    ],
    providers: [
    ],
    exports: [TranslateModule
    ],
    declarations: [
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [
                LoaderService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: LoaderInterceptorService,
                    multi: true
                },
                UserService,
                TranslateService
            ]
        };
    }
}
