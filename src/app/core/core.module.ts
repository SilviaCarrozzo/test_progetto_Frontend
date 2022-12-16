import { StorageService } from './storage/storage.service';
import { ModuleWithProviders, NgModule, Optional, Provider, SkipSelf } from '@angular/core';
import { DataRequestModule } from './data-request/data-request.module';
import { DatePipe } from '@angular/common';

@NgModule({
    imports: [
        DataRequestModule
    ]
})
export class CoreModule {

    constructor(
        @Optional()
        @SkipSelf() parentModule: CoreModule
    ) { }

    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                DatePipe,
                StorageService
            ]
        };
    }
}