import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
    //

    public user = new BehaviorSubject(null);
    private simpleUser: any;

    //
    setUser(user: any) {
        this.simpleUser = user;
        this.user.next(user);    
    }
    //
    getUser() {
        return this.user.asObservable()
    }

    getSimpleUser() {
        return this.simpleUser;
    }
}
