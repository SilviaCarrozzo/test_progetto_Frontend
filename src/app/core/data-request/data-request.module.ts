import { NgModule } from '@angular/core';
import { DeleteRequest } from './delete-request.service';
import { GetRequest } from './get-request.service';
import { PostRequest } from './post-request.service';
import { PutRequest } from './put-request.service';
import { RequestIdService } from './request-id.service';

@NgModule({
    imports: [
    ],
    providers: [
        GetRequest,
        PostRequest,
        PutRequest,
        DeleteRequest,
        RequestIdService
    ]
})
export class DataRequestModule { }
