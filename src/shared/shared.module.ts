import { SnackBarService } from './service/snack-bar.service';
import { LoaderService } from './service/loader.service';
import { UserService } from './service/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoaderInterceptorService } from './service/loader-http-interceptor.service';
import { JwtOauhtModule } from './jwt-oauth/jwt-oauth.module';
import { DownloadFileService } from './service/download-service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
    imports: [
        JwtOauhtModule.forRoot(),
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
                SnackBarService,
                DownloadFileService,
                TranslateService
            ]
        };
    }
}
