import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    constructor() {

    }

    setSession(key: string, value: any) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    getSession(key: string) {
        return sessionStorage[key] ? JSON.parse(sessionStorage[key]) : null;
    }

    removeSession(key: string) {
        sessionStorage.removeItem(key);
    }
}
