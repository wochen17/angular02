import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { User } from '../models/user.model';
import { distinctUntilChanged } from 'rxjs/operators';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { JwtService } from './jwt.service';

@Injectable()
export class UserService {
    private currentUserSubject = new BehaviorSubject<User>({} as User)
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged())
    private isAuthenicatedSubject = new ReplaySubject<boolean>(1)
    public isAuthenicated = this.isAuthenicatedSubject.asObservable()

    constructor(private apiService:ApiService,
                private http: HttpClient,
                private jwtService: JwtService) {

    }

    populate() {
        if (this.jwtService.getToken()) {
            this.apiService.get('/user').subscribe(
                data => this.setAuth(data.user),
                err => this.purgeAuth()
            )
        }
    }

    private setAuth(user: User) {
        this.jwtService.destoryToken()
        this.currentUserSubject.next(user)
        this.isAuthenicatedSubject.next(true)

    }

    private purgeAuth() {
        this.jwtService.destoryToken()
        this.currentUserSubject.next({} as User)
        this.isAuthenicatedSubject.next(false)
    }


}