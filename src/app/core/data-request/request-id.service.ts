import { Injectable } from '@angular/core';

@Injectable()
export class RequestIdService{
    private requestId: string = '';
    
    setRequestId(requestId: string) {
        this.requestId = requestId;
    }

    getRequestId() {
        return this.requestId;
    }
}
